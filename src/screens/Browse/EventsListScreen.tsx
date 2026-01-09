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
    <Card className="mx-4 mt-6 mb-6 overflow-hidden h-[320px] border-0 shadow-2xl relative rounded-[32px]">
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop' }}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          className="absolute inset-0 w-full h-full justify-end p-8"
        >
          <CardTitle className="text-5xl text-white font-black tracking-tighter mb-2 shadow-text">
            We Buy Direct.
          </CardTitle>
          <CardDescription className="text-gray-100 text-2xl mb-6 font-bold opacity-90">
            You Save 10%.
          </CardDescription>
          <Button size="lg" className="w-full bg-white active:bg-gray-200 rounded-full h-14 shadow-xl border-b-4 border-gray-300">
            <Text className="text-black font-extrabold text-lg">Start Saving</Text>
          </Button>
        </LinearGradient>
      </ImageBackground>
    </Card>
  );

  const renderEventItem = ({ item }: { item: typeof filteredEvents[0] }) => (
    <Card className="mb-6 mx-4 bg-card border border-border/60 shadow-lg rounded-3xl overflow-hidden active:scale-[0.98] transition-all duration-200">
      <CardHeader className="p-5 pb-3 flex-row justify-between items-start">
        <View className="flex-1 mr-4">
          <Badge variant="outline" className="mb-2 self-start border-primary/30 text-primary bg-primary/10 rounded-md px-2 py-0.5">
            <Text className="text-[10px] font-bold uppercase tracking-widest">{item.trackCode}</Text>
          </Badge>
          <CardTitle className="text-2xl font-bold leading-7 text-foreground">{item.title}</CardTitle>
        </View>
        <TouchableOpacity className="bg-muted/50 p-2 rounded-full">
          <Ionicons name="heart-outline" size={20} color="#64748b" />
        </TouchableOpacity>
      </CardHeader>

      <CardContent className="p-5 pt-1 space-y-2">
        <View className="flex-row items-center space-x-2">
          <Ionicons name="calendar-clear-outline" size={16} color="#94a3b8" />
          <Text className="text-muted-foreground text-sm font-semibold">
            {new Date(item.startDateTime).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Ionicons name="location-outline" size={16} color="#94a3b8" />
          <Text className="text-muted-foreground text-sm font-medium">
            {item.location}
          </Text>
        </View>
      </CardContent>

      <CardFooter className="p-4 bg-muted/30 border-t border-border/50 flex-row justify-between items-center backdrop-blur-sm">
        <View>
          <Text className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Starting at</Text>
          <View className="flex-row items-baseline">
            <Text className="text-xl font-black text-primary">${item.price || 50}</Text>
            <Text className="text-xs text-muted-foreground ml-1 font-medium">/ticket</Text>
          </View>
        </View>
        <Button size="sm" className="rounded-full px-6 h-10 shadow-md bg-primary">
          <Text className="font-bold text-primary-foreground">Buy Now</Text>
        </Button>
      </CardFooter>
    </Card>
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <View className="flex-1 bg-background">
      {/* Floating Glass Header */}
      <View className="absolute top-0 left-0 right-0 z-50 px-4 pt-12 pb-4 bg-background/60 backdrop-blur-2xl border-b border-white/20">
        <View className="flex-row items-center bg-white/50 border border-white/40 rounded-full h-12 px-4 shadow-sm">
          <Ionicons name="search" size={20} color="#64748b" />
          <TextInput
            placeholder="Search events, teams..."
            className="flex-1 ml-3 text-base font-semibold text-foreground h-full"
            placeholderTextColor="#94a3b8"
          />
          <View className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center">
            <Text className="text-xs font-bold text-gray-600">J</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={filteredEvents}
        renderItem={renderEventItem}
        ListHeaderComponent={() => <View className="pt-24">{renderHero()}</View>} // Padding for sticky header
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EventsListScreen;
