import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from '../../utils/constants';

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
  ({ variant = 'default', size = 'default', label, leftIcon, rightIcon, style, children, ...props }, ref) => {
    const getButtonStyle = () => {
      const baseStyle: any = {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDER_RADIUS.md,
      };

      // Size styles
      switch (size) {
        case 'sm':
          baseStyle.paddingVertical = SPACING.xs;
          baseStyle.paddingHorizontal = SPACING.md;
          baseStyle.minWidth = 80;
          break;
        case 'lg':
          baseStyle.paddingVertical = SPACING.md;
          baseStyle.paddingHorizontal = SPACING.xl;
          baseStyle.minWidth = 160;
          break;
        case 'icon':
          baseStyle.width = 40;
          baseStyle.height = 40;
          break;
        default:
          baseStyle.paddingVertical = SPACING.sm;
          baseStyle.paddingHorizontal = SPACING.lg;
          baseStyle.minWidth = 120;
      }

      // Variant styles
      switch (variant) {
        case 'secondary':
          baseStyle.backgroundColor = COLORS.secondary;
          break;
        case 'outline':
          baseStyle.backgroundColor = 'transparent';
          baseStyle.borderWidth = 1;
          baseStyle.borderColor = COLORS.primary;
          break;
        case 'destructive':
          baseStyle.backgroundColor = COLORS.error;
          break;
        case 'ghost':
          baseStyle.backgroundColor = 'transparent';
          break;
        default:
          baseStyle.backgroundColor = COLORS.primary;
          baseStyle.shadowColor = COLORS.primary;
          baseStyle.shadowOffset = { width: 0, height: 2 };
          baseStyle.shadowOpacity = 0.3;
          baseStyle.shadowRadius = 4;
          baseStyle.elevation = 4;
      }

      return baseStyle;
    };

    const getTextStyle = () => {
      const baseStyle: any = {
        fontWeight: FONT_WEIGHTS.medium,
        textAlign: 'center',
      };

      switch (size) {
        case 'sm':
          baseStyle.fontSize = FONT_SIZES.sm;
          break;
        case 'lg':
          baseStyle.fontSize = FONT_SIZES.lg;
          break;
        default:
          baseStyle.fontSize = FONT_SIZES.md;
      }

      switch (variant) {
        case 'outline':
        case 'ghost':
          baseStyle.color = COLORS.primary;
          break;
        default:
          baseStyle.color = COLORS.white;
      }

      return baseStyle;
    };

    return (
      <TouchableOpacity
        ref={ref}
        style={[getButtonStyle(), style]}
        activeOpacity={0.7}
        {...props}
      >
        {leftIcon && <View style={{ marginRight: SPACING.sm }}>{leftIcon}</View>}
        {label ? (
          <Text style={getTextStyle()}>{label}</Text>
        ) : (
          children
        )}
        {rightIcon && <View style={{ marginLeft: SPACING.sm }}>{rightIcon}</View>}
      </TouchableOpacity>
    );
  }
);
Button.displayName = "Button";

export { Button };
