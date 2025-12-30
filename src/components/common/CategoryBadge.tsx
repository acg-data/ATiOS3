import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TrackInfo, TRACKS } from '../types';
import { COLORS, SPACING, FONT_SIZES } from '../utils/constants';

interface CategoryBadgeProps {
  trackCode: number;
  selected?: boolean;
  onPress?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const CategoryBadge: React.FC<CategoryBadgeProps & TouchableOpacityProps> = ({
  trackCode,
  selected = false,
  onPress,
  size = 'medium',
  ...props
}) => {
  const track = TRACKS.find(t => t.id === trackCode);
  
  if (!track) return null;
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          badge: styles.badgeSmall,
          text: styles.textSmall
        };
      case 'large':
        return {
          badge: styles.badgeLarge,
          text: styles.textLarge
        };
      default:
        return {
          badge: styles.badgeMedium,
          text: styles.textMedium
        };
    }
  };
  
  const { badge, text } = getSizeStyles();
  
  const Container = onPress ? TouchableOpacity : View;
  
  return (
    <Container
      style={[
        badge,
        {
          backgroundColor: selected ? track.color : `${track.color}20`
        },
        selected && styles.selectedBadge
      ]}
      onPress={onPress}
      {...props}
    >
      <Text style={[text, { color: selected ? COLORS.white : track.color }]}>
        {track.name}
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  badgeSmall: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8
  },
  badgeMedium: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10
  },
  badgeLarge: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 24,
    marginRight: 12,
    marginBottom: 12
  },
  selectedBadge: {
    borderWidth: 0
  },
  textSmall: {
    fontSize: 11,
    fontWeight: '600' as const
  },
  textMedium: {
    fontSize: 13,
    fontWeight: '600' as const
  },
  textLarge: {
    fontSize: 15,
    fontWeight: '700' as const
  }
});

export default CategoryBadge;
