import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Event } from '../../types';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from '../../utils/constants';
import { formatEventDate, getTrackColor, getTrackName } from '../../utils/helpers';
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
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Track indicator bar */}
      <View style={[styles.trackIndicator, { backgroundColor: trackColor }]} />
      
      <View style={styles.content}>
        {/* Header with category and favorite */}
        <View style={styles.header}>
          <CategoryBadge trackCode={event.trackCode} size="small" />
          <FavoriteButton
            isFavorite={event.favorite}
            onPress={onFavoritePress}
          />
        </View>
        
        {/* Event title */}
        <Text style={styles.title} numberOfLines={2}>
          {event.title}
        </Text>
        
        {/* Date and time */}
        <Text style={styles.dateTime}>
          {formatEventDate(event.startDateTime)}
        </Text>
        
        {/* Location */}
        <Text style={styles.location} numberOfLines={1}>
          {event.location}
        </Text>
        
        {/* Footer with price */}
        <View style={styles.footer}>
          <PriceTag price={event.price || 50} size="small" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    }
  },
  trackIndicator: {
    width: 6,
    backgroundColor: COLORS.primary
  },
  content: {
    flex: 1,
    padding: SPACING.md
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm
  },
  title: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.text,
    marginBottom: SPACING.xs
  },
  dateTime: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    marginBottom: SPACING.xs,
    ...FONT_WEIGHTS.medium
  },
  location: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default EventCard;
