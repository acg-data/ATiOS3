import { View, Text, ViewProps, TextProps, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from '../../utils/constants';

const styles = StyleSheet.create({
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
  cardHeader: {
    flexDirection: 'column',
    padding: SPACING.lg,
  },
  cardTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  cardDescription: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
  },
  cardContent: {
    padding: SPACING.lg,
    paddingTop: 0,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.lg,
    paddingTop: 0,
  },
});

interface CardProps extends ViewProps {
  variant?: 'default' | 'solid' | 'primary';
}

const Card = React.forwardRef<View, CardProps>(({ variant = 'default', style, ...props }, ref) => {
  let cardStyle = styles.card;

  if (variant === 'solid') {
    cardStyle = { ...styles.card, borderWidth: 0 };
  } else if (variant === 'primary') {
    cardStyle = {
      ...styles.card,
      borderColor: COLORS.primary,
      shadowColor: COLORS.primary,
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 6,
    };
  }

  return (
    <View
      ref={ref}
      style={[cardStyle, style]}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<View, ViewProps>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.cardHeader, style]} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<Text, TextProps>(({ style, ...props }, ref) => (
  <Text ref={ref} style={[styles.cardTitle, style]} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<Text, TextProps>(({ style, ...props }, ref) => (
  <Text ref={ref} style={[styles.cardDescription, style]} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<View, ViewProps>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.cardContent, style]} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<View, ViewProps>(({ style, ...props }, ref) => (
  <View ref={ref} style={[styles.cardFooter, style]} {...props} />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
