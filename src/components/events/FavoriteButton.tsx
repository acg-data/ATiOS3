import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../utils/constants';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large';
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onPress,
  size = 'medium'
}) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 28;
      case 'large':
        return 48;
      default:
        return 36;
    }
  };
  
  const buttonSize = getSize();
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: buttonSize,
          height: buttonSize,
          borderRadius: buttonSize / 2
        }
      ]}
      onPress={onPress}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <HeartIcon isFavorite={isFavorite} />
    </TouchableOpacity>
  );
};

const HeartIcon: React.FC<{ isFavorite: boolean }> = ({ isFavorite }) => {
  if (isFavorite) {
    return (
      <SVGHeartFilled />
    );
  }
  return (
    <SVGHeartOutline />
  );
};

const SVGHeartFilled = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill={COLORS.secondary}>
    <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </Svg>
);

const SVGHeartOutline = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.textSecondary} strokeWidth="2">
    <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </Svg>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoriteButton;
