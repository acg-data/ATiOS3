import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from '../../utils/constants';

interface ThemeToggleProps {
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  showLabel = true,
  size = 'medium'
}) => {
  const { theme, toggleTheme, colors } = useTheme();

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: styles.containerSmall,
          icon: 20,
          text: styles.textSmall,
        };
      case 'large':
        return {
          container: styles.containerLarge,
          icon: 28,
          text: styles.textLarge,
        };
      default:
        return {
          container: styles.containerMedium,
          icon: 24,
          text: styles.textMedium,
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      style={[styles.container, sizeStyles.container]}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Ionicons
          name={theme === 'dark' ? 'sunny' : 'moon'}
          size={sizeStyles.icon}
          color={colors.primary}
        />
        {showLabel && (
          <Text style={[styles.text, sizeStyles.text, { color: colors.text }]}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Text>
        )}
      </View>
      <View
        style={[
          styles.toggleIndicator,
          {
            backgroundColor: colors.primary,
            transform: [{ translateX: theme === 'dark' ? 0 : 20 }],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  containerSmall: {
    padding: SPACING.xs,
    minHeight: 32,
  },
  containerMedium: {
    padding: SPACING.sm,
    minHeight: 40,
  },
  containerLarge: {
    padding: SPACING.md,
    minHeight: 48,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: SPACING.sm,
    fontWeight: FONT_WEIGHTS.medium,
  },
  textSmall: {
    fontSize: FONT_SIZES.sm,
  },
  textMedium: {
    fontSize: FONT_SIZES.md,
  },
  textLarge: {
    fontSize: FONT_SIZES.lg,
  },
  toggleIndicator: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default ThemeToggle;