import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useEventStore } from '../stores';
import { EventCard } from '../components/events';
import { EmptyState, LoadingSpinner } from '../components/common';
import { COLORS, SPACING, FONT_SIZES } from '../utils/constants';

const FavoritesScreen: React.FC = () => {
  const {
    events,
    favorites,
    isLoading,
    fetchEvents,
    toggleFavorite,
    loadFavorites
  } = useEventStore();
  
  useEffect(() => {
    fetchEvents();
    loadFavorites();
  }, []);
  
  const favoriteEvents = events.filter(event => favorites.includes(event.id));
  
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    
    if (favoriteEvents.length === 0) {
      return (
        <EmptyState
          title="No Favorites Yet"
          message="Browse events and tap the heart icon to save them here!"
          buttonTitle="Browse Events"
          onButtonPress={() => {
            // Navigate to Browse tab
          }}
        />
      );
    }
    
    return (
      <FlatList
        data={favoriteEvents}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            onPress={() => {
              // Navigate to event detail
            }}
            onFavoritePress={() => toggleFavorite(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.eventsList}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Favorites</Text>
        <Text style={styles.subtitle}>{favoriteEvents.length} saved events</Text>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  header: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.text,
    ...{
      fontWeight: '700' as const
    }
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: 4
  },
  eventsList: {
    padding: SPACING.md
  }
});

export default FavoritesScreen;
