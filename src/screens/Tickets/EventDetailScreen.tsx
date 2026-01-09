import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEventStore } from '../../stores';
import { Event, Ticket } from '../../types';
import MockDataService from '../../services/mockDataService';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

type EventDetailRouteProp = RouteProp<{ EventDetail: { eventId: string } }, 'EventDetail'>;

const EventDetailScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<EventDetailRouteProp>();
    const { events } = useEventStore();
    const [event, setEvent] = useState<Event | undefined>(undefined);
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

    useEffect(() => {
        const foundEvent = events.find(e => e.id === route.params.eventId);
        setEvent(foundEvent);

        // Mock fetching tickets for this specific event
        // In a real app, we'd query by eventId. For now, we'll generate some dummy tiers.
        const mockTiers: any[] = [
            { id: 't1', section: 'Balcony 308', row: 'F', price: (foundEvent?.price || 50) * 0.8, type: 'Economy' },
            { id: 't2', section: 'Loge 12', row: 'M', price: (foundEvent?.price || 50), type: 'Standard' },
            { id: 't3', section: 'Club 112', row: 'C', price: (foundEvent?.price || 50) * 2.5, type: 'Premium' },
            { id: 't4', section: 'Courtside A', row: '1', price: (foundEvent?.price || 50) * 10, type: 'VIP' },
        ];
        setTickets(mockTiers);
    }, [route.params.eventId, events]);

    if (!event) return <View className="flex-1 bg-background" />;

    const handleBuy = () => {
        if (!selectedTicketId) {
            Alert.alert("Select a Ticket", "Please choose your seats to continue.");
            return;
        }
        Alert.alert("Success!", "Proceeding to checkout...");
    };

    return (
        <View className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Header Image */}
                <View className="h-[400px] relative">
                    <Image
                        source={{ uri: event.imageUrl }}
                        className="absolute inset-0 w-full h-full"
                        resizeMode="cover"
                    />
                    <LinearGradient
                        colors={['transparent', '#000']}
                        className="absolute inset-0 w-full h-full"
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 0, y: 1 }}
                    />

                    {/* Navigation Back Button */}
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-12 left-4 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full items-center justify-center border border-white/20"
                    >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>

                    <View className="absolute bottom-8 left-6 right-6">
                        <Text className="text-white/80 font-bold tracking-widest uppercase text-xs mb-2">
                            {event.location}
                        </Text>
                        <Text className="text-4xl font-black text-white tracking-tighter leading-10 shadow-lg">
                            {event.title}
                        </Text>
                    </View>
                </View>

                {/* Venue Map */}
                <View className="px-6 -mt-6">
                    <Card className="p-0 overflow-hidden rounded-[32px] border-0 shadow-2xl bg-card">
                        <View className="p-5 border-b border-border/10 bg-muted/20">
                            <Text className="text-lg font-bold">Venue Map</Text>
                            <Text className="text-muted-foreground text-xs">Select a section to filter tickets</Text>
                        </View>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2670&auto=format&fit=crop' }}
                            className="w-full h-48 bg-gray-200"
                            resizeMode="cover"
                        />
                    </Card>
                </View>

                {/* Ticket Selection */}
                <View className="px-6 mt-8">
                    <Text className="text-xl font-black mb-4 ml-1">Select Tickets</Text>
                    {tickets.map((t) => (
                        <TouchableOpacity
                            key={t.id}
                            onPress={() => setSelectedTicketId(t.id)}
                            activeOpacity={0.8}
                            className={`mb-4 rounded-[28px] p-5 border shadow-sm flex-row justify-between items-center transition-all ${selectedTicketId === t.id
                                ? 'bg-primary border-primary'
                                : 'bg-card border-border/50'
                                }`}
                        >
                            <View>
                                <Text className={`font-bold text-lg ${selectedTicketId === t.id ? 'text-primary-foreground' : 'text-foreground'}`}>
                                    {t.section}
                                </Text>
                                <Text className={`text-xs font-medium ${selectedTicketId === t.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                    Row {t.row} • {t.type}
                                </Text>
                            </View>
                            <View className="items-end">
                                <Text className={`font-black text-xl ${selectedTicketId === t.id ? 'text-primary-foreground' : 'text-foreground'}`}>
                                    ${t.price.toFixed(0)}
                                </Text>
                                <Text className={`text-[10px] font-bold uppercase ${selectedTicketId === t.id ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                                    each
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Sticky Buy Button */}
            <View className="absolute bottom-0 left-0 right-0 p-6 pt-4 bg-background/80 backdrop-blur-xl border-t border-border/10">
                <Button
                    size="lg"
                    className="w-full rounded-full h-14 shadow-xl"
                    onPress={handleBuy}
                >
                    <Text className="font-extrabold text-lg">
                        Go to Checkout
                        {selectedTicketId && ` • $${tickets.find(t => t.id === selectedTicketId)?.price.toFixed(0)}`}
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default EventDetailScreen;
