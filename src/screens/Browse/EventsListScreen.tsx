import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import { useEventStore } from '../../stores';
import { TRACKS } from '../../types';
import { EventCard } from '../../components/events';
import { EmptyState, LoadingSpinner, CategoryBadge } from '../../components/common';
import { COLORS, SPACING, FONT_SIZES, SHADOWS } from '../../utils/constants';

const EventsListScreen: React.FC = () => {
  const {
    filteredEvents,
    favorites,
    isLoading,
    fetchEvents,
    toggleFavorite,
    setFilters,
    loadFavorites
  } = useEventStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchEvents();
    loadFavorites();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters({ searchQuery: query });
  };

  const toggleCategory = (trackId: number) => {
    const newCategories = selectedCategories.includes(trackId)
      ? selectedCategories.filter(id => id !== trackId)
      : [...selectedCategories, trackId];

    setSelectedCategories(newCategories);
    setFilters({ trackIds: newCategories.length > 0 ? newCategories : undefined });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery('');
    setFilters({});
  };

  const hasFilters = searchQuery.length > 0 || selectedCategories.length > 0;

  const renderCategoryItem = ({ item }: { item: typeof TRACKS[0] }) => (
    <CategoryBadge
      trackCode={item.id}
      selected={selectedCategories.includes(item.id)}
      onPress={() => toggleCategory(item.id)}
      size="small"
    />
  );

  const renderEventItem = ({ item }: { item: typeof filteredEvents[0] }) => (
    <EventCard
      event={item}
      onPress={() => {
        // Navigate to event detail
        console.log('Navigate to event:', item.id);
      }}
      onFavoritePress={() => toggleFavorite(item.id)}
    />
  );

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search events, teams, venues..."
          placeholderTextColor={COLORS.textSecondary}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch('')}>
            <Text style={styles.clearButton}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.filterButton,
          hasFilters && styles.filterButtonActive
        ]}
        onPress={() => setShowFilters(!showFilters)}
      >
        <Text style={[
          styles.filterButtonText,
          hasFilters && styles.filterButtonTextActive
        ]}>
          {hasFilters ? `${selectedCategories.length} filters` : 'Filters'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderFilters = () => {
    if (!showFilters) return null;

    return (
      <View style={styles.filtersContainer}>
        <View style={styles.filterHeader}>
          <Text style={styles.filterTitle}>Categories</Text>
          {hasFilters && (
            <TouchableOpacity onPress={clearFilters}>
              <Text style={styles.clearFiltersText}>Clear All</Text>
            </TouchableOpacity>
          )}
        </View>

        <FlatList
          data={TRACKS}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (filteredEvents.length === 0) {
      return (
        <EmptyState
          title={hasFilters ? 'No Events Found' : 'No Events Yet'}
          message={
            hasFilters
              ? 'Try adjusting your filters or search query'
              : 'Check back soon for upcoming events!'
          }
          buttonTitle={hasFilters ? 'Clear Filters' : undefined}
          onButtonPress={hasFilters ? clearFilters : undefined}
        />
      );
    }

    return (
      <FlatList
        data={filteredEvents}
        renderItem={renderEventItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.eventsList}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderFilters()}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderSearchBar()}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7' // Cleaner off-white
  },
  searchContainer: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
    backgroundColor: 'transparent',
    zIndex: 10
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    ...SHADOWS.small
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    marginLeft: 8
  },
  clearButton: {
    fontSize: 18,
    color: COLORS.textSecondary,
    padding: 4
  },
  filtersContainer: {
    paddingBottom: SPACING.sm,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm
  },
  filterTitle: {
    display: 'none'
  },
  clearFiltersText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600'
  },
  categoriesList: {
    paddingHorizontal: SPACING.md,
    paddingVertical: 4
  },
  eventsList: {
    padding: SPACING.md,
    paddingTop: SPACING.sm
  },
  filterButton: {
    marginLeft: 8,
    padding: 8
  },
  filterButtonText: {
    display: 'none'
  },
  filterButtonActive: {},
  filterButtonTextActive: {}
});

export default EventsListScreen;
