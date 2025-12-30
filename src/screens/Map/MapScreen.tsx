import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import MockDataService from '../services/mockDataService';
import { Venue } from '../types';
import { COLORS, SPACING, FONT_SIZES } from '../utils/constants';

const MapScreen: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard');
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation);
    })();
    
    // Load venues
    MockDataService.getVenues().then(setVenues);
  }, []);
  
  const bostonRegion = {
    latitude: 42.3601,
    longitude: -71.0589,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  };
  
  const renderVenueItem = ({ item }: { item: Venue }) => (
    <TouchableOpacity
      style={[
        styles.venueItem,
        selectedVenue?.id === item.id && styles.venueItemSelected
      ]}
      onPress={() => setSelectedVenue(item)}
    >
      <Text style={styles.venueName}>{item.name}</Text>
      <Text style={styles.venueAddress}>{item.address}, {item.city}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={bostonRegion}
          mapType={mapType}
        >
          {/* User location marker */}
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }}
              title="Your Location"
              pinColor={COLORS.primary}
            />
          )}
          
          {/* Venue markers */}
          {venues.map(venue => (
            <Marker
              key={venue.id}
              coordinate={{
                latitude: venue.latitude,
                longitude: venue.longitude
              }}
              title={venue.name}
              onCalloutPress={() => setSelectedVenue(venue)}
            />
          ))}
        </MapView>
        
        {/* Map type toggle */}
        <TouchableOpacity
          style={styles.mapTypeButton}
          onPress={() => setMapType(mapType === 'standard' ? 'satellite' : 'standard')}
        >
          <Text style={styles.mapTypeButtonText}>
            {mapType === 'standard' ? 'Satellite' : 'Map'}
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Venues list */}
      <View style={styles.venuesContainer}>
        <Text style={styles.sectionTitle}>Boston Venues</Text>
        <FlatList
          data={venues}
          renderItem={renderVenueItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.venuesList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1
  },
  mapTypeButton: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    ...{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    }
  },
  mapTypeButtonText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    ...{
      fontWeight: '500' as const
    }
  },
  venuesContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.divider
  },
  sectionTitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    padding: SPACING.md,
    ...{
      fontWeight: '600' as const
    }
  },
  venuesList: {
    paddingHorizontal: SPACING.md
  },
  venueItem: {
    width: 160,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    padding: SPACING.sm,
    marginRight: SPACING.sm
  },
  venueItemSelected: {
    backgroundColor: COLORS.primaryLight,
    borderWidth: 1,
    borderColor: COLORS.primary
  },
  venueName: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text,
    ...{
      fontWeight: '600' as const
    },
    marginBottom: 4
  },
  venueAddress: {
    fontSize: 11,
    color: COLORS.textSecondary
  }
});

export default MapScreen;
