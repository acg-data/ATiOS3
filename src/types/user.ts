export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  phoneNumber?: string;
  createdAt: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  notificationsEnabled: boolean;
  favoriteTeams: string[];
  preferredVenues: string[];
  reminderTime: number; // minutes before event
  theme: 'light' | 'dark';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
