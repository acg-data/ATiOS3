import { create } from 'zustand';
import { Ticket, TicketStatus, TicketFilters } from '../types';
import MockDataService from '../services/mockDataService';

interface TicketState {
  tickets: Ticket[];
  filteredTickets: Ticket[];
  filters: TicketFilters;
  isLoading: boolean;
  error: string | null;
  totalValue: number;
  
  // Actions
  fetchTickets: () => Promise<void>;
  setFilters: (filters: TicketFilters) => void;
  clearFilters: () => void;
  getTicketById: (id: string) => Ticket | undefined;
  getTicketStats: () => { total: number; active: number; used: number; expired: number };
}

export const useTicketStore = create<TicketState>((set, get) => ({
  tickets: [],
  filteredTickets: [],
  filters: {},
  isLoading: false,
  error: null,
  totalValue: 0,
  
  fetchTickets: async () => {
    set({ isLoading: true, error: null });
    try {
      const tickets = await MockDataService.getTickets();
      
      // Calculate total value
      const totalValue = tickets.reduce((sum, ticket) => sum + ticket.price, 0);
      
      set({
        tickets,
        filteredTickets: tickets,
        totalValue,
        isLoading: false
      });
    } catch (error) {
      set({ error: 'Failed to load tickets', isLoading: false });
    }
  },
  
  setFilters: (filters: TicketFilters) => {
    const { tickets } = get();
    let filtered = [...tickets];
    
    // Filter by status
    if (filters.status) {
      filtered = filtered.filter(ticket => ticket.status === filters.status);
    }
    
    // Filter by search query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(ticket =>
        ticket.eventTitle.toLowerCase().includes(query) ||
        ticket.venue.toLowerCase().includes(query) ||
        ticket.section.toLowerCase().includes(query)
      );
    }
    
    set({ filters, filteredTickets: filtered });
  },
  
  clearFilters: () => {
    set({ filters: {}, filteredTickets: get().tickets });
  },
  
  getTicketById: (id: string) => {
    return get().tickets.find(ticket => ticket.id === id);
  },
  
  getTicketStats: () => {
    const { tickets } = get();
    return {
      total: tickets.length,
      active: tickets.filter(t => t.status === TicketStatus.Purchased).length,
      used: tickets.filter(t => t.status === TicketStatus.Used).length,
      expired: tickets.filter(t => t.status === TicketStatus.Expired).length
    };
  }
}));

export default useTicketStore;
