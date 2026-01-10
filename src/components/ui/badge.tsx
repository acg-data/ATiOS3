import { View, Text, ViewProps, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from '../../utils/constants';

interface BadgeProps extends ViewProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  text?: string;
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  badgeDefault: {
    backgroundColor: COLORS.primary,
    borderColor: 'transparent',
  },
  badgeSecondary: {
    backgroundColor: COLORS.secondary,
    borderColor: 'transparent',
  },
  badgeDestructive: {
    backgroundColor: COLORS.error,
    borderColor: 'transparent',
  },
  badgeOutline: {
    backgroundColor: 'transparent',
    borderColor: COLORS.divider,
  },
  badgeText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.semibold,
  },
  badgeTextDefault: {
    color: COLORS.white,
  },
  badgeTextSecondary: {
    color: COLORS.white,
  },
  badgeTextDestructive: {
    color: COLORS.white,
  },
  badgeTextOutline: {
    color: COLORS.text,
  },
});

function Badge({ variant = 'default', text, children, style, ...props }: BadgeProps) {
  const getBadgeStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.badgeSecondary;
      case 'destructive':
        return styles.badgeDestructive;
      case 'outline':
        return styles.badgeOutline;
      default:
        return styles.badgeDefault;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.badgeTextSecondary;
      case 'destructive':
        return styles.badgeTextDestructive;
      case 'outline':
        return styles.badgeTextOutline;
      default:
        return styles.badgeTextDefault;
    }
  };

  return (
    <View style={[styles.badge, getBadgeStyle(), style]} {...props}>
      {text ? (
        <Text style={[styles.badgeText, getTextStyle()]}>{text}</Text>
      ) : (
        children
      )}
    </View>
  );
}

export { Badge };
