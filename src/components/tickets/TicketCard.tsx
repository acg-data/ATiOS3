import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ticket, TicketStatus } from '../types';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from '../utils/constants';
import { formatTicketDate, getSeatDisplay } from '../utils/helpers';

interface TicketCardProps {
  ticket: Ticket;
  onPress: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  ticket,
  onPress
}) => {
  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case TicketStatus.Purchased:
        return COLORS.success;
      case TicketStatus.Used:
        return COLORS.textSecondary;
      case TicketStatus.Expired:
        return COLORS.error;
      case TicketStatus.Refunded:
        return COLORS.warning;
      default:
        return COLORS.textSecondary;
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
  statusBar: {
    width: 6,
    backgroundColor: COLORS.success
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
    color: COLORS.text,
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
    color: COLORS.primary,
    marginBottom: 4,
    ...FONT_WEIGHTS.medium
  },
  venue: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: 4
  },
  seatInfo: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm
  },
  price: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.primary
  }
});

export default TicketCard;
