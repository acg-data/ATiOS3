import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ticket, TicketStatus } from '../../types';
import { SPACING, FONT_SIZES, FONT_WEIGHTS } from '../../utils/constants';
import { formatTicketDate, getSeatDisplay } from '../../utils/helpers';
import { useTheme } from '../../contexts/ThemeContext';

interface TicketCardProps {
  ticket: Ticket;
  onPress: () => void;
}

// Create theme-aware styles
const createTicketCardStyles = (colors: any) => StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    ...{
      shadowColor: colors.isDark ? '#000' : '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: colors.isDark ? 0.3 : 0.1,
      shadowRadius: 4,
      elevation: colors.isDark ? 3 : 2
    }
  },
  statusBar: {
    width: 6,
    backgroundColor: colors.success
  },
  content: {
    flex: 1,
    padding: SPACING.md
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.sm
  },
  eventTitle: {
    flex: 1,
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
    color: colors.text,
    marginRight: SPACING.sm
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12
  },
  statusText: {
    fontSize: 10,
    fontWeight: FONT_WEIGHTS.semibold
  },
  date: {
    fontSize: FONT_SIZES.sm,
    color: colors.primary,
    marginBottom: 4,
    fontWeight: FONT_WEIGHTS.medium
  },
  venue: {
    fontSize: FONT_SIZES.sm,
    color: colors.textSecondary,
    marginBottom: 4
  },
  seatInfo: {
    fontSize: FONT_SIZES.sm,
    color: colors.textSecondary,
    marginBottom: SPACING.sm
  },
  price: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: colors.primary
  }
});

const TicketCard: React.FC<TicketCardProps> = ({
  ticket,
  onPress
}) => {
  const { colors } = useTheme();
  const styles = createTicketCardStyles(colors);

  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case TicketStatus.Purchased:
        return colors.success;
      case TicketStatus.Used:
        return colors.textSecondary;
      case TicketStatus.Expired:
        return colors.error;
      case TicketStatus.Refunded:
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusText = (status: TicketStatus) => {
    switch (status) {
      case TicketStatus.Purchased:
        return 'Active';
      case TicketStatus.Used:
        return 'Used';
      case TicketStatus.Expired:
        return 'Expired';
      case TicketStatus.Refunded:
        return 'Refunded';
      default:
        return status;
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Left colored bar */}
      <View style={[styles.statusBar, { backgroundColor: getStatusColor(ticket.status) }]} />

      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.eventTitle} numberOfLines={2}>
            {ticket.eventTitle}
          </Text>
          <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(ticket.status)}20` }]}>
            <Text style={[styles.statusText, { color: getStatusColor(ticket.status) }]}>
              {getStatusText(ticket.status)}
            </Text>
          </View>
        </View>

        {/* Date */}
        <Text style={styles.date}>
          {formatTicketDate(ticket.date)}
        </Text>

        {/* Venue */}
        <Text style={styles.venue}>
          {ticket.venue}
        </Text>

        {/* Seat info */}
        <Text style={styles.seatInfo}>
          {getSeatDisplay(ticket.section, ticket.row, ticket.seat)}
        </Text>

        {/* Price */}
        <Text style={styles.price}>
          ${ticket.price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;
