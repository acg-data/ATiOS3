import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTicketStore } from '../../stores';
import { TicketCard } from '../../components/tickets';
import { EmptyState, LoadingSpinner } from '../../components/common';
import { COLORS, SPACING, FONT_SIZES } from '../../utils/constants';

const MyTicketsScreen: React.FC = () => {
  const {
    filteredTickets,
    isLoading,
    totalValue,
    fetchTickets,
    setFilters
  } = useTicketStore();
  
  const [selectedTab, setSelectedTab] = useState<'all' | 'active' | 'past'>('all');
  
  useEffect(() => {
    fetchTickets();
  }, []);
  
  const handleTabChange = (tab: 'all' | 'active' | 'past') => {
    setSelectedTab(tab);
    
    if (tab === 'all') {
      setFilters({});
    } else if (tab === 'active') {
      setFilters({ status: 'purchased' as any });
    } else {
      setFilters({ status: 'used' as any });
    }
  };
  
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    
    if (filteredTickets.length === 0) {
      return (
        <EmptyState
          title="No Tickets Yet"
          message="Browse events to find your next experience!"
          buttonTitle="Browse Events"
          onButtonPress={() => {
            // Navigate to Browse tab
          }}
        />
      );
    }
    
    return (
      <FlatList
        data={filteredTickets}
        renderItem={({ item }) => (
          <TicketCard
            ticket={item}
            onPress={() => {
              // Navigate to ticket detail
            }}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.ticketsList}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  
  return (
    <View style={styles.container}>
      {/* Header with stats */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          <TabButton
            title="All"
            isActive={selectedTab === 'all'}
            onPress={() => handleTabChange('all')}
          />
          <TabButton
            title="Active"
            isActive={selectedTab === 'active'}
            onPress={() => handleTabChange('active')}
          />
          <TabButton
            title="Past"
            isActive={selectedTab === 'past'}
            onPress={() => handleTabChange('past')}
          />
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Tickets</Text>
            <Text style={styles.statValue}>{filteredTickets.length}</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Total Value</Text>
            <Text style={styles.statValue}>${totalValue.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      
      {/* Tickets list */}
      {renderContent()}
    </View>
  );
};

const TabButton: React.FC<{
  title: string;
  isActive: boolean;
  onPress: () => void;
}> = ({ title, isActive, onPress }) => (
  <TouchableOpacity
    style={[
      styles.tabButton,
      isActive && styles.tabButtonActive
    ]}
    onPress={onPress}
  >
    <Text style={[
      styles.tabButtonText,
      isActive && styles.tabButtonTextActive
    ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  header: {
    backgroundColor: COLORS.white,
    paddingBottom: SPACING.md
  },
  tabContainer: {
    flexDirection: 'row',
    padding: SPACING.md,
    paddingBottom: 0
  },
  tabButton: {
    flex: 1,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.divider
  },
  tabButtonActive: {
    borderBottomColor: COLORS.primary
  },
  tabButtonText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    ...{
      fontWeight: '500' as const
    }
  },
  tabButtonTextActive: {
    color: COLORS.primary
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm
  },
  statItem: {
    flex: 1,
    alignItems: 'center'
  },
  statDivider: {
    width: 1,
    backgroundColor: COLORS.divider
  },
  statLabel: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    marginBottom: 2
  },
  statValue: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.text,
    ...{
      fontWeight: '700' as const
    }
  },
  ticketsList: {
    padding: SPACING.md
  }
});

export default MyTicketsScreen;
