import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTicketStore } from '../stores';
import { QRCodeDisplay } from '../components/tickets';
import { LoadingSpinner } from '../components/common';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from '../utils/constants';
import { formatTicketDate, getSeatDisplay } from '../utils/helpers';

const TicketDetailScreen: React.FC<{ route: any }> = ({ route }) => {
  const { ticketId } = route.params || {};
  const { getTicketById, fetchTickets, isLoading } = useTicketStore();
  
  const ticket = ticketId ? getTicketById(ticketId) : null;
  
  useEffect(() => {
    if (!ticket) {
      fetchTickets();
    }
  }, []);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  if (!ticket) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Ticket not found</Text>
      </View>
    );
  }
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* QR Code Section */}
      <View style={styles.qrSection}>
        <QRCodeDisplay
          value={ticket.qrCode}
          size={220}
          label="Scan this code at the venue"
        />
      </View>
      
      {/* Event Details Card */}
      <View style={styles.card}>
        <Text style={styles.eventTitle}>{ticket.eventTitle}</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date & Time</Text>
          <Text style={styles.detailValue}>
            {formatTicketDate(ticket.date)}
          </Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Venue</Text>
          <Text style={styles.detailValue}>{ticket.venue}</Text>
        </View>
        
        <View style={styles.separator} />
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Section</Text>
          <Text style={styles.detailValue}>{ticket.section}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Row</Text>
          <Text style={styles.detailValue}>{ticket.row}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Seat</Text>
          <Text style={styles.detailValue}>{ticket.seat}</Text>
        </View>
      </View>
      
      {/* Price Card */}
      <View style={styles.card}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Price Paid</Text>
          <Text style={styles.priceValue}>
            ${ticket.price.toFixed(2)}
          </Text>
        </View>
      </View>
      
      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            // Add to calendar
          }}
        >
          <Text style={styles.actionButtonText}>Add to Calendar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.actionButtonOutline}
          onPress={() => {
            // Share ticket
          }}
        >
          <Text style={styles.actionButtonOutlineText}>Share Ticket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  scrollContent: {
    padding: SPACING.md
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.error
  },
  qrSection: {
    alignItems: 'center',
    marginBottom: SPACING.lg
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    }
  },
  eventTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.text,
    marginBottom: SPACING.md,
    textAlign: 'center'
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.sm
  },
  detailLabel: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary
  },
  detailValue: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    ...{
      fontWeight: '500' as const
    }
  },
  priceValue: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.primary,
    ...{
      fontWeight: '700' as const
    }
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: SPACING.sm
  },
  actionsContainer: {
    marginTop: SPACING.md
  },
  actionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: SPACING.sm
  },
  actionButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.md,
    ...{
      fontWeight: '600' as const
    }
  },
  actionButtonOutline: {
    backgroundColor: 'transparent',
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary
  },
  actionButtonOutlineText: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.md,
    ...{
      fontWeight: '600' as const
    }
  }
});

export default TicketDetailScreen;
