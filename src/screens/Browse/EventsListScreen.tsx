import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useEventStore } from '../../stores';
import { TRACKS } from '../../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { EmptyState, LoadingSpinner } from '../../components/common';

const EventsListScreen: React.FC = () => {
  const { filteredEvents, isLoading, fetchEvents } = useEventStore();

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderHero = () => (
    <Card className="mx-4 mt-6 mb-6 overflow-hidden h-[320px] border-0 shadow-lg relative rounded-3xl">
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop' }}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          className="absolute inset-0 w-full h-full justify-end p-6"
        >
          <Badge variant="secondary" className="self-start mb-2 bg-primary/20 backdrop-blur-md border border-white/10">
            <View><Text className="text-white font-bold">Trending Now</Text></View>
          </Badge>
          <CardTitle className="text-4xl text-white font-extrabold tracking-tight mb-2">
            The Finals
          </CardTitle>
          <CardDescription className="text-gray-200 text-lg mb-4 font-medium">
            Don't miss the biggest game of the year.
          </CardDescription>
          <Button size="lg" className="w-full bg-white active:bg-gray-100 rounded-full">
            <Text className="text-black font-bold text-base">Get Access</Text>
          </Button>
        </LinearGradient>
      </ImageBackground>
    </Card>
  );

  const renderEventItem = ({ item }: { item: typeof filteredEvents[0] }) => (
    <Card className="mb-4 mx-4 bg-card border-border/50 shadow-sm active:scale-[0.98] transition-transform">
      <CardHeader className="p-4 pb-2 flex-row justify-between items-start">
        <View className="flex-1">
          <Badge variant="outline" className="mb-2 self-start border-primary/20 text-primary bg-primary/5">
            <Text className="text-xs font-semibold uppercase tracking-wider">{item.trackCode}</Text>
          </Badge>
          <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
        </View>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#64748b" />
        </TouchableOpacity>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <View className="flex-row items-center space-x-2 mb-1">
          <Ionicons name="calendar-outline" size={14} color="#94a3b8" />
          <Text className="text-muted-foreground text-sm font-medium ml-1">
            {new Date(item.startDateTime).toLocaleDateString()}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Ionicons name="location-outline" size={14} color="#94a3b8" />
          <Text className="text-muted-foreground text-sm ml-1">
            {item.location}
          </Text>
        </View>
      </CardContent>

      <CardFooter className="p-4 pt-0 border-t border-border/40 flex-row justify-between items-center mt-2 pt-3">
        <View>
          <Text className="text-xs text-muted-foreground font-medium uppercase">Starting at</Text>
          <Text className="text-lg font-bold text-primary">${item.price || 50}</Text>
        </View>
        <Button size="sm" variant="secondary" className="rounded-full px-6">
          <Text className="font-semibold text-secondary-foreground">Buy Tickets</Text>
        </Button>
      </CardFooter>
    </Card>
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <View className="flex-1 bg-background">
      {/* Floating Header */}
      <View className="px-4 py-2 bg-background/80 backdrop-blur-xl z-10 sticky top-0 border-b border-border/50 pb-4 pt-12">
        <View className="flex-row items-center bg-secondary/50 rounded-2xl p-2 px-4 shadow-sm border border-border/50">
          <Ionicons name="search" size={20} color="#64748b" />
          <TextInput
            placeholder="Search events, teams..."
            className="flex-1 ml-2 text-base font-medium h-10 text-foreground"
            placeholderTextColor="#94a3b8"
          />
        </View>
      </View>

      <FlatList
        data={filteredEvents}
        renderItem={renderEventItem}
        ListHeaderComponent={renderHero}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EventsListScreen;
