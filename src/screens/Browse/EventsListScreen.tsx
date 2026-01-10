import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useEventStore } from '../../stores';
import { TRACKS } from '../../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { EmptyState, LoadingSpinner } from '../../components/common';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from '../../utils/constants';

const EventsListScreen: React.FC = () => {
  const { filteredEvents, isLoading, fetchEvents, setFilters } = useEventStore();
  const navigation = useNavigation<any>();

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderHero = () => (
    <View style={styles.heroCard}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop' }}
        style={styles.heroImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.heroGradient}
        >
          <Text style={styles.heroTitle}>We Buy Direct.</Text>
          <Text style={styles.heroSubtitle}>You Save 10%.</Text>
          <Button
            variant="default"
            size="lg"
            label="Start Saving"
            style={styles.heroButton}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );

  const renderEventItem = ({ item }: { item: typeof filteredEvents[0] }) => (
    <Card style={styles.eventCard}>
      <CardHeader style={styles.eventHeader}>
        <View style={styles.eventHeaderLeft}>
          <Badge
            variant="outline"
            text={item.trackCode.toString()}
            style={styles.eventBadge}
          />
          <CardTitle style={styles.eventTitle}>{item.title}</CardTitle>
        </View>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
      </CardHeader>

      <CardContent style={styles.eventContent}>
        <View style={styles.eventRow}>
          <Ionicons name="calendar-clear-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.eventDate}>
            {new Date(item.startDateTime).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
          </Text>
        </View>
        <View style={styles.eventRow}>
          <Ionicons name="location-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.eventLocation}>
            {item.location}
          </Text>
        </View>
      </CardContent>

      <CardFooter style={styles.eventFooter}>
        <View>
          <Text style={styles.priceLabel}>Starting at</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceAmount}>${item.price || 50}</Text>
            <Text style={styles.pricePerTicket}>/ticket</Text>
          </View>
        </View>
        <Button
          variant="default"
          size="sm"
          label="Buy Now"
          style={styles.buyButton}
          onPress={() => navigation.navigate('EventDetail', { eventId: item.id })}
        />
      </CardFooter>
    </Card>
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      {/* Floating Glass Header */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={COLORS.textSecondary} />
          <TextInput
            placeholder="Search events, teams..."
            style={styles.searchInput}
            placeholderTextColor={COLORS.textSecondary}
            onChangeText={(text) => setFilters({ searchQuery: text })}
          />
          <View style={styles.searchAvatar}>
            <Text style={styles.searchAvatarText}>J</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={filteredEvents}
        renderItem={renderEventItem}
        ListHeaderComponent={() => <View style={styles.heroContainer}>{renderHero()}</View>}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    paddingHorizontal: SPACING.md,
    paddingTop: 50,
    paddingBottom: SPACING.md,
    backgroundColor: 'rgba(43, 40, 41, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.divider,
    borderRadius: BORDER_RADIUS.round,
    height: 48,
    paddingHorizontal: SPACING.md,
  },
  searchInput: {
    flex: 1,
    marginLeft: SPACING.md,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.text,
  },
  searchAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchAvatarText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
  },
  heroContainer: {
    paddingTop: 100,
  },
  heroCard: {
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.md,
    height: 320,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 12,
      elevation: 10,
    },
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: SPACING.xl,
  },
  heroTitle: {
    fontSize: 40,
    color: COLORS.white,
    fontWeight: '900',
    marginBottom: SPACING.xs,
  },
  heroSubtitle: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.bold,
    marginBottom: SPACING.lg,
    opacity: 0.9,
  },
  heroButton: {
    width: '100%',
    height: 56,
    borderRadius: BORDER_RADIUS.round,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  eventCard: {
    marginBottom: SPACING.lg,
    marginHorizontal: SPACING.md,
    borderRadius: 32,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.divider,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: SPACING.lg,
    paddingBottom: SPACING.sm,
  },
  eventHeaderLeft: {
    flex: 1,
    marginRight: SPACING.md,
  },
  eventBadge: {
    marginBottom: SPACING.sm,
    alignSelf: 'flex-start',
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(209, 18, 38, 0.1)',
  },
  eventTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.text,
    lineHeight: 28,
  },
  favoriteButton: {
    backgroundColor: 'rgba(155, 154, 154, 0.2)',
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.round,
  },
  eventContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: 0,
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  eventDate: {
    marginLeft: SPACING.xs,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textSecondary,
  },
  eventLocation: {
    marginLeft: SPACING.xs,
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
  },
  eventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    backgroundColor: 'rgba(155, 154, 154, 0.2)',
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
  },
  priceLabel: {
    fontSize: 10,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.bold,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceAmount: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '900',
    color: COLORS.primary,
  },
  pricePerTicket: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    marginLeft: SPACING.xs,
    fontWeight: FONT_WEIGHTS.medium,
  },
  buyButton: {
    borderRadius: BORDER_RADIUS.round,
    paddingHorizontal: SPACING.lg,
    height: 40,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  listContainer: {
    paddingBottom: 100,
  },
});

export default EventsListScreen;
