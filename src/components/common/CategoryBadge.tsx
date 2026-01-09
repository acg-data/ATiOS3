import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TrackInfo, TRACKS } from '../../types';
import { COLORS, SPACING, FONT_SIZES, SHADOWS } from '../../utils/constants';

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

  const containerStyle = [
    badge,
    {
      backgroundColor: selected ? track.color : `${track.color}20`
    },
    selected && styles.selectedBadge
  ];

  if (onPress) {
    return (
      <TouchableOpacity style={containerStyle} onPress={onPress} {...props}>
        <Text style={[text, { color: selected ? COLORS.white : track.color }]}>
          {track.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={containerStyle}>
      <Text style={[text, { color: selected ? COLORS.white : track.color }]}>
        {track.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeSmall: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)'
  },
  badgeMedium: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)'
  },
  badgeLarge: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    marginRight: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)'
  },
  selectedBadge: {
    borderColor: 'transparent',
    ...SHADOWS.small
  },
  textSmall: {
    fontSize: 12,
    fontWeight: '600' as const,
    letterSpacing: 0.3
  },
  textMedium: {
    fontSize: 14,
    fontWeight: '600' as const,
    letterSpacing: 0.3
  },
  textLarge: {
    fontSize: 16,
    fontWeight: '700' as const,
    letterSpacing: 0.3
  }
});

export default CategoryBadge;
