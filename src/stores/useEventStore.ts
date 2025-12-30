import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event, EventFilters } from '../types';
import MockDataService from '../services/mockDataService';

interface EventState {
  events: Event[];
  filteredEvents: Event[];
  favorites: string[];
  filters: EventFilters;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchEvents: () => Promise<void>;
  toggleFavorite: (eventId: string) => void;
  setFilters: (filters: EventFilters) => void;
  clearFilters: () => void;
  searchEvents: (query: string) => Promise<void>;
  loadFavorites: () => Promise<void>;
  saveFavorites: () => Promise<void>;
}

export const useEventStore = create<EventState>((set, get) => ({
  events: [],
  filteredEvents: [],
  favorites: [],
  filters: {},
  isLoading: false,
  error: null,
  
  fetchEvents: async () => {
    set({ isLoading: true, error: null });
    try {
      const events = await MockDataService.getEvents();
      const favorites = await get().favorites;
      
      const eventsWithFavorites = events.map(event => ({
        ...event,
        favorite: favorites.includes(event.id)
      }));
      
      set({
        events: eventsWithFavorites,
        filteredEvents: eventsWithFavorites,
        isLoading: false
      });
    } catch (error) {
      set({ error: 'Failed to load events', isLoading: false });
    }
  },
  
  toggleFavorite: async (eventId: string) => {
    const { favorites } = get();
    const isFavorite = favorites.includes(eventId);
    
    const newFavorites = isFavorite
      ? favorites.filter(id => id !== eventId)
      : [...favorites, eventId];
    
    set({ favorites: newFavorites });
    
    // Update events with new favorite status
    const updatedEvents = get().events.map(event =>
      event.id === eventId
        ? { ...event, favorite: !event.favorite }
        : event
    );
    
    set({ events: updatedEvents });
    await get().saveFavorites();
  },
  
  setFilters: (filters: EventFilters) => {
    const { events } = get();
    let filtered = [...events];
    
    // Filter by track IDs
    if (filters.trackIds && filters.trackIds.length > 0) {
      filtered = filtered.filter(event =>
        filters.trackIds!.includes(event.trackCode)
      );
    }
    
    // Filter by search query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.shortDescription.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      );
    }
    
    // Filter by date
    if (filters.date) {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.startDateTime);
        return eventDate.toDateString() === filters.date!.toDateString();
      });
    }
    
    set({ filters, filteredEvents: filtered });
  },
  
  clearFilters: () => {
    set({ filters: {}, filteredEvents: get().events });
  },
  
  searchEvents: async (query: string) => {
    set({ isLoading: true });
    try {
      const events = await MockDataService.searchEvents(query);
      set({ filteredEvents: events, isLoading: false });
    } catch (error) {
      set({ error: 'Search failed', isLoading: false });
    }
  },
  
  loadFavorites: async () => {
    try {
      const stored = await AsyncStorage.getItem('favorites');
      if (stored) {
        const favorites = JSON.parse(stored);
        set({ favorites });
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
  },
  
  saveFavorites: async () => {
    try {
      const { favorites } = get();
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  }
}));

export default useEventStore;
