import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  variant?: 'elevated' | 'outlined' | 'flat';
  padding?: 'none' | 'small' | 'medium' | 'large';
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'medium',
  className,
  style,
  ...props
}) => {
  const baseClasses = "rounded-xl bg-card";

  const variantClasses = {
    elevated: "shadow-lg",
    outlined: "border border-border",
    flat: "",
  };

  const paddingClasses = {
    none: "p-0",
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  return (
    <View
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className || ''}`}
      style={style}
      {...props}
    />
  );
};

export default Card;
