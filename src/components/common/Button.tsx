import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  View
} from 'react-native';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from '../../utils/constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  leftIcon,
  rightIcon,
  style,
  disabled,
  ...props
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...styles.button,
      ...styles[`button_${size}`]
    };
    
    switch (variant) {
      case 'primary':
        return { ...baseStyle, backgroundColor: COLORS.primary };
      case 'secondary':
        return { ...baseStyle, backgroundColor: COLORS.secondary };
      case 'outline':
        return { ...baseStyle, backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.primary };
      case 'danger':
        return { ...baseStyle, backgroundColor: COLORS.error };
      default:
        return baseStyle;
    }
  };
  
  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.buttonText,
      ...styles[`buttonText_${size}`]
    };
    
    switch (variant) {
      case 'primary':
        return { ...baseStyle, color: COLORS.white };
      case 'secondary':
        return { ...baseStyle, color: COLORS.white };
      case 'outline':
        return { ...baseStyle, color: COLORS.primary };
      case 'danger':
        return { ...baseStyle, color: COLORS.white };
      default:
        return baseStyle;
    }
  };
  
  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        disabled && styles.buttonDisabled,
        style
      ]}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' ? COLORS.primary : COLORS.white} />
      ) : (
        <>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          <Text style={getTextStyle()}>{title}</Text>
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    ...FONT_WEIGHTS.semibold
  },
  button_small: {
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    minWidth: 80
  },
  button_medium: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    minWidth: 120
  },
  button_large: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    minWidth: 160
  },
  buttonText: {
    textAlign: 'center'
  },
  buttonText_small: {
    fontSize: FONT_SIZES.sm
  },
  buttonText_medium: {
    fontSize: FONT_SIZES.md
  },
  buttonText_large: {
    fontSize: FONT_SIZES.lg
  },
  buttonDisabled: {
    opacity: 0.5
  },
  iconLeft: {
    marginRight: SPACING.sm
  },
  iconRight: {
    marginLeft: SPACING.sm
  }
});

export default Button;
