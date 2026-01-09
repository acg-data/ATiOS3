import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../../utils/constants';
import Button from './Button';

interface EmptyStateProps {
  title: string;
  message: string;
  buttonTitle?: string;
  onButtonPress?: () => void;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  buttonTitle,
  onButtonPress,
  icon
}) => {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      
      {buttonTitle && onButtonPress && (
        <View style={styles.buttonContainer}>
          <Button
            title={buttonTitle}
            onPress={onButtonPress}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl
  },
  icon: {
    marginBottom: SPACING.lg
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '700' as const,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SPACING.sm
  },
  message: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 22
  },
  buttonContainer: {
    marginTop: SPACING.md
  }
});

export default EmptyState;
