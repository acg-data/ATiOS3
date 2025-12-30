import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, UserPreferences, LoginCredentials, RegisterData } from '../types';

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: Partial<User>) => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
  loadUser: () => Promise<void>;
}

const DEFAULT_PREFERENCES: UserPreferences = {
  notificationsEnabled: true,
  favoriteTeams: [],
  preferredVenues: [],
  reminderTime: 60 // 1 hour before event
};

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  
  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo: Accept any login for now
      const user: User = {
        id: 'user-001',
        email: credentials.email,
        firstName: 'Demo',
        lastName: 'User',
        phoneNumber: '',
        createdAt: new Date().toISOString(),
        preferences: DEFAULT_PREFERENCES
      };
      
      await AsyncStorage.setItem('user', JSON.stringify(user));
      
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      set({ error: 'Login failed', isLoading: false });
    }
  },
  
  register: async (data: RegisterData) => {
    set({ isLoading: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo: Accept any registration
      const user: User = {
        id: `user-${Date.now()}`,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        createdAt: new Date().toISOString(),
        preferences: DEFAULT_PREFERENCES
      };
      
      await AsyncStorage.setItem('user', JSON.stringify(user));
      
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      set({ error: 'Registration failed', isLoading: false });
    }
  },
  
  logout: async () => {
    try {
      await AsyncStorage.removeItem('user');
      set({
        user: null,
        isAuthenticated: false,
        error: null
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  },
  
  updateUser: (updates: Partial<User>) => {
    const { user } = get();
    if (user) {
      const updatedUser = { ...user, ...updates };
      set({ user: updatedUser });
      AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    }
  },
  
  updatePreferences: (preferences: Partial<UserPreferences>) => {
    const { user } = get();
    if (user) {
      const updatedPreferences = { ...user.preferences, ...preferences };
      const updatedUser = { ...user, preferences: updatedPreferences };
      set({ user: updatedUser });
      AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    }
  },
  
  loadUser: async () => {
    try {
      const stored = await AsyncStorage.getItem('user');
      if (stored) {
        const user = JSON.parse(stored);
        set({ user, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Failed to load user:', error);
    }
  }
}));

export default useUserStore;
