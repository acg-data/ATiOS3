import { StyleSheet, ViewStyle, TextStyle, ShadowStyleIOS } from 'react-native';
import { SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from './constants';
import { useTheme } from '../contexts/ThemeContext';

// Aurora-UI Theme-Aware Styling Utilities
// Provides consistent styling patterns that adapt to light/dark theme

// Create theme-aware styles function
export const createAuroraStyles = (colors: any) => StyleSheet.create({
  // Core Layout Styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Card Styles
  card: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: colors.divider,
    ...{
      shadowColor: colors.isDark ? '#000' : '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: colors.isDark ? 0.3 : 0.1,
      shadowRadius: 4,
      elevation: colors.isDark ? 3 : 2,
    },
  },

  cardSolid: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 0,
    ...{
      shadowColor: colors.isDark ? '#000' : '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: colors.isDark ? 0.3 : 0.1,
      shadowRadius: 4,
      elevation: colors.isDark ? 3 : 2,
    },
  },

  cardPrimary: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: colors.primary,
    ...{
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 6,
    },
  },

  // Button Styles
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...{
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
  },

  buttonSecondary: {
    backgroundColor: colors.secondary,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonOutline: {
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Input Styles
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    color: colors.text,
    fontSize: FONT_SIZES.md,
  },

  // Header Styles
  headerSolid: {
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  headerTransparent: {
    backgroundColor: colors.isDark ? 'rgba(43, 40, 41, 0.95)' : 'rgba(248, 248, 248, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  // Text Styles
  textPrimary: {
    color: colors.primary,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semibold,
  },

  textSecondary: {
    color: colors.textSecondary,
    fontSize: FONT_SIZES.md,
  },

  textMuted: {
    color: colors.textSecondary,
    fontSize: FONT_SIZES.sm,
  },

  textLarge: {
    color: colors.text,
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
  },

  // Spacing Utilities
  paddingSm: {
    padding: SPACING.sm,
  },

  paddingMd: {
    padding: SPACING.md,
  },

  paddingLg: {
    padding: SPACING.lg,
  },

  marginSm: {
    margin: SPACING.sm,
  },

  marginMd: {
    margin: SPACING.md,
  },

  marginLg: {
    margin: SPACING.lg,
  },

  // Layout Utilities
  flexRow: {
    flexDirection: 'row',
  },

  flexColumn: {
    flexDirection: 'column',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  alignCenter: {
    alignItems: 'center',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  // Special Effects
  glowPrimary: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  // Screen-specific styles
  screenHeader: {
    backgroundColor: colors.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },

  screenTitle: {
    fontSize: FONT_SIZES.xxl,
    color: colors.text,
    fontWeight: FONT_WEIGHTS.bold,
  },

  screenSubtitle: {
    fontSize: FONT_SIZES.md,
    color: colors.textSecondary,
    marginTop: 4,
  },
});

// Hook to get theme-aware styles
export const useAuroraStyles = () => {
  const { colors } = useTheme();
  return createAuroraStyles(colors);
};

// Helper functions for dynamic styles
export const getCardStyle = (colors: any, variant: 'default' | 'solid' | 'primary' = 'default'): ViewStyle => {
  const styles = createAuroraStyles(colors);
  switch (variant) {
    case 'solid':
      return styles.cardSolid;
    case 'primary':
      return styles.cardPrimary;
    default:
      return styles.card;
  }
};

export const getButtonStyle = (colors: any, variant: 'primary' | 'secondary' | 'outline' = 'primary'): ViewStyle => {
  const styles = createAuroraStyles(colors);
  switch (variant) {
    case 'secondary':
      return styles.buttonSecondary;
    case 'outline':
      return styles.buttonOutline;
    default:
      return styles.buttonPrimary;
  }
};

export const getTextStyle = (colors: any, variant: 'primary' | 'secondary' | 'muted' | 'large' = 'primary'): TextStyle => {
  const styles = createAuroraStyles(colors);
  switch (variant) {
    case 'secondary':
      return styles.textSecondary;
    case 'muted':
      return styles.textMuted;
    case 'large':
      return styles.textLarge;
    default:
      return styles.textPrimary;
  }
};

export const getSpacing = (size: 'sm' | 'md' | 'lg' = 'md'): number => {
  switch (size) {
    case 'sm':
      return SPACING.sm;
    case 'lg':
      return SPACING.lg;
    default:
      return SPACING.md;
  }
};

export const getBorderRadius = (size: 'sm' | 'md' | 'lg' = 'md'): number => {
  switch (size) {
    case 'sm':
      return BORDER_RADIUS.sm;
    case 'lg':
      return BORDER_RADIUS.lg;
    default:
      return BORDER_RADIUS.md;
  }
};