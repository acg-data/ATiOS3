import { StyleSheet, ViewStyle, TextStyle, ShadowStyleIOS } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from './constants';

// Aurora-UI Dark Theme Styling Utilities
// Provides consistent styling patterns across the app

export const auroraStyles = StyleSheet.create({
  // Core Layout Styles
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Card Styles
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.divider,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
  },

  cardSolid: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 0,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
  },

  cardPrimary: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.primary,
    ...{
      shadowColor: COLORS.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 6,
    },
  },

  // Button Styles
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...{
      shadowColor: COLORS.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
  },

  buttonSecondary: {
    backgroundColor: COLORS.secondary,
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
    borderColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Input Styles
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.divider,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    color: COLORS.text,
    fontSize: FONT_SIZES.md,
  },

  // Header Styles
  headerSolid: {
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  headerTransparent: {
    backgroundColor: 'rgba(43, 40, 41, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
  },

  // Text Styles
  textPrimary: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semibold,
  },

  textSecondary: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZES.md,
  },

  textMuted: {
    color: COLORS.textSecondary,
    fontSize: FONT_SIZES.sm,
  },

  textLarge: {
    color: COLORS.text,
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
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  // Screen-specific styles
  screenHeader: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },

  screenTitle: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.text,
    fontWeight: FONT_WEIGHTS.bold,
  },

  screenSubtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
});

// Helper functions for dynamic styles
export const getCardStyle = (variant: 'default' | 'solid' | 'primary' = 'default'): ViewStyle => {
  switch (variant) {
    case 'solid':
      return auroraStyles.cardSolid;
    case 'primary':
      return auroraStyles.cardPrimary;
    default:
      return auroraStyles.card;
  }
};

export const getButtonStyle = (variant: 'primary' | 'secondary' | 'outline' = 'primary'): ViewStyle => {
  switch (variant) {
    case 'secondary':
      return auroraStyles.buttonSecondary;
    case 'outline':
      return auroraStyles.buttonOutline;
    default:
      return auroraStyles.buttonPrimary;
  }
};

export const getTextStyle = (variant: 'primary' | 'secondary' | 'muted' | 'large' = 'primary'): TextStyle => {
  switch (variant) {
    case 'secondary':
      return auroraStyles.textSecondary;
    case 'muted':
      return auroraStyles.textMuted;
    case 'large':
      return auroraStyles.textLarge;
    default:
      return auroraStyles.textPrimary;
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