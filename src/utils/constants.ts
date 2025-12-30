export const COLORS = {
  // Primary Ace brand colors
  aceRed: '#DD0000',        // Primary Logo, Login button
  aceBlue: '#3862FA',       // Top banner, secondary accents
  white: '#FFFFFF',         // Backgrounds
  black: '#000000',         // Primary text, logo outline
  
  // Semantic mappings
  primary: '#3862FA',       // Ace Blue
  secondary: '#DD0000',     // Ace Red
  background: '#FFFFFF',
  surface: '#F8F8F8',
  text: '#000000',
  textSecondary: '#666666',
  textDisabled: '#9E9E9E',
  divider: '#E0E0E0',
  error: '#D32F2F',
  success: '#388E3C',
  warning: '#FFA000',
  
  // Track colors - using Ace brand palette
  mlb: '#3862FA',
  nhl: '#DD0000',
  nba: '#3862FA',
  nfl: '#DD0000',
  ncaa: '#3862FA',
  concerts: '#DD0000',
  theater: '#3862FA',
  comedy: '#DD0000',
  festivals: '#3862FA',
  wrestling: '#DD0000',
  mma: '#3862FA',
  ufc: '#DD0000',
  soccer: '#3862FA',
  golf: '#DD0000',
  tennis: '#3862FA',
  racing: '#DD0000'
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

export const FONT_SIZES = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 24,
  xxxl: 32,
  display: 40
};

export const FONT_WEIGHTS = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8
  }
};

export const API_CONFIG = {
  baseURL: 'https://api.aceticket.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const STORAGE_KEYS = {
  FAVORITES: 'favorites',
  USER: 'user',
  PREFERENCES: 'preferences',
  RECENT_SEARCHES: 'recentSearches'
};

export const APP_CONFIG = {
  name: 'Ace Ticket',
  version: '1.0.0',
  buildNumber: '1',
  supportEmail: 'support@aceticket.com',
  website: 'https://www.aceticket.com'
};
