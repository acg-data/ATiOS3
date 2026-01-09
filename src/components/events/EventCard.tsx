import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Event } from '../../types';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS, SHADOWS } from '../../utils/constants';
import { formatEventDate, getTrackColor } from '../../utils/helpers';
import CategoryBadge from '../common/CategoryBadge';
import PriceTag from '../common/PriceTag';
import FavoriteButton from './FavoriteButton';

interface EventCardProps {
  event: Event;
  onPress: () => void;
  onFavoritePress: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onPress,
  onFavoritePress
}) => {
  const trackColor = getTrackColor(event.trackCode);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.92}
    >
      <View style={styles.cardContainer}>
        {/* Decorative Gradient Bar */}
        <LinearGradient
          colors={[trackColor, `${trackColor}80`]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBar}
        />

        <View style={styles.content}>
          <View style={styles.mainInfo}>
            <View style={styles.headerRow}>
              <CategoryBadge trackCode={event.trackCode} size="small" />
              <FavoriteButton isFavorite={event.favorite} onPress={onFavoritePress} />
            </View>

            <Text style={styles.title} numberOfLines={2}>
              {event.title}
            </Text>

            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={14} color={COLORS.textSecondary} />
              <Text style={styles.location} numberOfLines={1}>
                {event.location}
              </Text>
            </View>
          </View>

          {/* Right Side Date & Price Box */}
          <View style={styles.sideInfo}>
            <View style={styles.dateBox}>
              <Text style={styles.dateText}>
                {formatEventDate(event.startDateTime).split(',')[0]}
              </Text>
              <Text style={styles.timeText}>
                {formatEventDate(event.startDateTime).split(',')[1]}
              </Text>
            </View>

            <View style={styles.priceContainer}>
              <PriceTag price={event.price || 50} size="medium" />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
    paddingHorizontal: 4, // Space for shadow
    paddingBottom: 4
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    ...SHADOWS.medium, // Premium float
  },
  gradientBar: {
    height: 6,
    width: '100%'
  },
  content: {
    flexDirection: 'row',
    padding: SPACING.md,
  },
  mainInfo: {
    flex: 1,
    marginRight: SPACING.md
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm
  },
  title: {
    fontSize: 17, // Slightly larger
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: SPACING.sm,
    lineHeight: 22
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  location: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    fontWeight: '500'
  },
  sideInfo: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    minWidth: 80
  },
  dateBox: {
    alignItems: 'flex-end',
    marginBottom: SPACING.sm
  },
  dateText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primary
  },
  timeText: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 2
  },
  priceContainer: {
    marginTop: 'auto'
  }
});

export default EventCard;
