export const COLORS = {
  // Ace Ticket Brand Colors (Dark Theme)
  aceRed: '#d12026',        // Primary brand red
  aceDeepRed: '#b21e23',    // Deep red for accents
  white: '#FFFFFF',         // Light text on dark
  black: '#000000',         // Dark backgrounds
  charcoal: '#2b2829',      // Card/surface backgrounds
  gray: '#9b9a9a',          // Muted text

  // Semantic mappings - Dark Theme First
  primary: '#d12026',       // Ace Red as primary
  primaryLight: '#3d1f20',  // Dark red tint for backgrounds
  secondary: '#b21e23',     // Deep Red
  background: '#000000',    // Pure black background
  surface: '#2b2829',       // Charcoal surfaces
  text: '#FFFFFF',          // White text
  textSecondary: '#9b9a9a', // Muted gray
  textDisabled: '#4a4a4a',  // Darker disabled text
  divider: '#3a3a3a',       // Subtle dark dividers
  error: '#d12026',         // Using brand red for errors
  success: '#22c55e',       // Green for success
  warning: '#f59e0b',       // Amber for warnings

  // Track colors - alternating reds and charcoals
  mlb: '#d12026',
  nhl: '#b21e23',
  nba: '#d12026',
  nfl: '#b21e23',
  ncaa: '#d12026',
  concerts: '#b21e23',
  theater: '#d12026',
  comedy: '#b21e23',
  festivals: '#d12026',
  wrestling: '#b21e23',
  mma: '#d12026',
  ufc: '#b21e23',
  soccer: '#d12026',
  golf: '#b21e23',
  tennis: '#d12026',
  racing: '#b21e23'
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
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 5
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 24,
    elevation: 10
  },
  // Ace Red glow effect for primary buttons/cards
  glow: {
    shadowColor: '#d12026',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8
  }
};

export const GRADIENTS = {
  primary: ['#d12026', '#b21e23'] as const,
  dark: ['#2b2829', '#000000'] as const,
  surface: ['#2b2829', '#1a1a1a'] as const,
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

