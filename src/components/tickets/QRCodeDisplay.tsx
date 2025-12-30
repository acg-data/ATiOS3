import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from '../utils/constants';

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  style?: ViewStyle;
  showLabel?: boolean;
  label?: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  value,
  size = 200,
  style,
  showLabel = true,
  label
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.qrCodeWrapper}>
        <View style={styles.qrCodeBackground}>
          <QRCode
            value={value}
            size={size - 20}
            backgroundColor={COLORS.white}
            color={COLORS.black}
          />
        </View>
      </View>
      
      {showLabel && (
        <Text style={styles.label}>
          {label || 'Scan at venue'}
        </Text>
      )}
      
      <Text style={styles.ticketId}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: SPACING.lg
  },
  qrCodeWrapper: {
    padding: SPACING.md,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5
    }
  },
  qrCodeBackground: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: SPACING.sm
  },
  label: {
    marginTop: SPACING.md,
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    ...FONT_WEIGHTS.medium
  },
  ticketId: {
    marginTop: SPACING.sm,
    fontSize: FONT_SIZES.xs,
    color: COLORS.textDisabled,
    ...FONT_WEIGHTS.regular
  }
});

export default QRCodeDisplay;
