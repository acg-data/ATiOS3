import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../utils/constants';
import { formatPrice } from '../utils/helpers';

interface PriceTagProps {
  price: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}

const PriceTag: React.FC<PriceTagProps> = ({
  price,
  size = 'medium',
  showLabel = false
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: styles.priceTagSmall,
          text: styles.priceTextSmall
        };
      case 'large':
        return {
          container: styles.priceTagLarge,
          text: styles.priceTextLarge
        };
      default:
        return {
          container: styles.priceTagMedium,
          text: styles.priceTextMedium
        };
    }
  };
  
  const { container, text } = getSizeStyles();
  
  return (
    <View style={[styles.priceTagContainer, container]}>
      {showLabel && (
        <Text style={styles.priceLabel}>From</Text>
      )}
      <Text style={[styles.priceText, text]}>
        {formatPrice(price)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priceTagContainer: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start'
  },
  priceTagSmall: {
    paddingVertical: 2,
    paddingHorizontal: 6
  },
  priceTagMedium: {
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  priceTagLarge: {
    paddingVertical: 6,
    paddingHorizontal: 12
  },
  priceLabel: {
    fontSize: 10,
    color: COLORS.primary,
    marginBottom: 2,
    ...{
      fontWeight: '500' as const
    }
  },
  priceText: {
    color: COLORS.primary,
    fontWeight: '700' as const
  },
  priceTextSmall: {
    fontSize: 12
  },
  priceTextMedium: {
    fontSize: 14
  },
  priceTextLarge: {
    fontSize: 18
  }
});

export default PriceTag;
