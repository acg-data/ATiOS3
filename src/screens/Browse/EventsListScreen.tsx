import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEventStore } from '../../stores';
import { EventCard } from '../../components/events';
import { EmptyState, LoadingSpinner } from '../../components/common';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from '../../utils/constants';

const EventsListScreen: React.FC = () => {
  const { filteredEvents, isLoading, fetchEvents, toggleFavorite } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderHeader = () => (
    <View style={styles.heroCard}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop' }}
        style={styles.heroImage}
        resizeMode="cover"
      />
      <View style={styles.heroOverlay}>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>Trending Now</Text>
        </View>
        <Text style={styles.heroTitle}>The Finals</Text>
        <Text style={styles.heroSubtitle}>Don't miss the biggest game of the year.</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Get Access</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color={COLORS.textSecondary} />
            <TextInput
              placeholder="Search events, teams, venues..."
              style={styles.searchInput}
              placeholderTextColor={COLORS.textSecondary}
            />
          </View>
        </View>
        <EmptyState
          title="No Events Available"
          message="Check back soon for upcoming events!"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={COLORS.textSecondary} />
          <TextInput
            placeholder="Search events, teams, venues..."
            style={styles.searchInput}
            placeholderTextColor={COLORS.textSecondary}
          />
        </View>
      </View>

      <FlatList
        data={filteredEvents}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onPress={() => {}}
            onFavoritePress={() => toggleFavorite(item.id)}
          />
        )}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  searchContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm
  },
  searchInput: {
    flex: 1,
    marginLeft: SPACING.sm,
    fontSize: FONT_SIZES.md,
    color: COLORS.text
  },
  listContent: {
    paddingBottom: 100
  },
  heroCard: {
    margin: SPACING.md,
    borderRadius: 16,
    overflow: 'hidden',
    height: 280,
    backgroundColor: COLORS.textDisabled
  },
  heroImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: SPACING.lg,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  heroBadge: {
    backgroundColor: 'rgba(99, 102, 241, 0.9)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: SPACING.sm
  },
  heroBadgeText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.bold
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
    marginBottom: SPACING.xs
  },
  heroSubtitle: {
    fontSize: FONT_SIZES.lg,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: SPACING.md
  },
  heroButton: {
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 24,
    alignItems: 'center'
  },
  heroButtonText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semibold
  }
});

export default EventsListScreen;
