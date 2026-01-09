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
import StadiumMap from '../../components/tickets/StadiumMap';

type EventDetailRouteProp = RouteProp<{ EventDetail: { eventId: string } }, 'EventDetail'>;

const EventDetailScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<EventDetailRouteProp>();
    const { events } = useEventStore();

    const [event, setEvent] = useState<Event | undefined>(undefined);
    const [allTickets, setAllTickets] = useState<Ticket[]>([]);
    const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
    const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(2);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundEvent = events.find(e => e.id === route.params.eventId);
        setEvent(foundEvent);

        const loadTickets = async () => {
            setLoading(true);
            const tickets = await MockDataService.getTicketsByEvent(route.params.eventId);
            setAllTickets(tickets);
            setFilteredTickets(tickets);
            setLoading(false);
        };

        loadTickets();
    }, [route.params.eventId, events]);

    // Handle Section Filtering
    useEffect(() => {
        if (selectedSection) {
            setFilteredTickets(allTickets.filter(t => t.sectionId === selectedSection));
        } else {
            setFilteredTickets(allTickets);
        }
        setSelectedTicketId(null); // Reset selection when filter changes
    }, [selectedSection, allTickets]);

    if (!event) return <View className="flex-1 bg-background" />;

    const handleBuy = () => {
        if (!selectedTicketId) {
            Alert.alert("Select a Ticket", "Please choose your seats to continue.");
            return;
        }
        const ticket = allTickets.find(t => t.id === selectedTicketId);
        Alert.alert("Checkout", `You are buying ${quantity} tickets for ${ticket?.section}.\nTotal: $${(ticket?.price || 0) * quantity}`);
    };

    const selectedTicket = allTickets.find(t => t.id === selectedTicketId);

    return (
        <View className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
                {/* Header Image */}
                <View className="h-[300px] relative">
                    <Image
                        source={{ uri: event.imageUrl }}
                        className="absolute inset-0 w-full h-full"
                        resizeMode="cover"
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                        className="absolute inset-0 w-full h-full"
                    />

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-12 left-4 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full items-center justify-center border border-white/10"
                    >
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>

                    <View className="absolute bottom-6 left-6 right-6">
                        <Text className="text-white/70 font-bold tracking-widest uppercase text-[10px] mb-1">
                            {event.location}
                        </Text>
                        <Text className="text-3xl font-black text-white tracking-tighter leading-8">
                            {event.title}
                        </Text>
                    </View>
                </View>

                {/* Stadium Map Section */}
                <View className="px-5 mt-6">
                    <Text className="text-lg font-black mb-3 ml-1">Interactive Stadium Map</Text>
                    <StadiumMap
                        selectedSection={selectedSection}
                        onSectionSelect={setSelectedSection}
                    />
                </View>

                {/* Quantity Selector */}
                <View className="px-5 mt-8 flex-row justify-between items-center bg-muted/20 mx-5 p-4 rounded-3xl border border-border/40">
                    <View>
                        <Text className="text-sm font-bold">Quantity</Text>
                        <Text className="text-xs text-muted-foreground">{quantity} Seats Together</Text>
                    </View>
                    <View className="flex-row items-center bg-white rounded-full border border-border shadow-sm">
                        <TouchableOpacity
                            onPress={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-10 items-center justify-center"
                        >
                            <Ionicons name="remove" size={20} color={quantity > 1 ? "#000" : "#ccc"} />
                        </TouchableOpacity>
                        <Text className="w-8 text-center font-bold text-lg">{quantity}</Text>
                        <TouchableOpacity
                            onPress={() => setQuantity(Math.min(10, quantity + 1))}
                            className="w-10 h-10 items-center justify-center"
                        >
                            <Ionicons name="add" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Ticket Selection List */}
                <View className="px-5 mt-8">
                    <View className="flex-row justify-between items-end mb-4 px-1">
                        <Text className="text-xl font-black">
                            {selectedSection ? `Tickets in ${selectedSection.replace('_', ' ')}` : 'All Available Tickets'}
                        </Text>
                        <Text className="text-xs font-bold text-primary">{filteredTickets.length} found</Text>
                    </View>

                    {filteredTickets.map((t) => (
                        <TouchableOpacity
                            key={t.id}
                            onPress={() => setSelectedTicketId(t.id)}
                            activeOpacity={0.8}
                            className={`mb-4 rounded-[32px] p-5 border shadow-sm flex-row justify-between items-center ${selectedTicketId === t.id
                                    ? 'bg-primary border-primary shadow-primary/20'
                                    : 'bg-card border-border/50'
                                }`}
                        >
                            <View className="flex-1">
                                <View className="flex-row items-center mb-1">
                                    <Text className={`font-bold text-lg ${selectedTicketId === t.id ? 'text-primary-foreground' : 'text-foreground'}`}>
                                        {t.section}
                                    </Text>
                                    {t.type === 'VIP' && (
                                        <View className="ml-2 bg-amber-400 px-2 py-0.5 rounded-md">
                                            <Text className="text-[8px] font-black text-amber-900">VIP</Text>
                                        </View>
                                    )}
                                </View>
                                <Text className={`text-xs font-medium opacity-70 ${selectedTicketId === t.id ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                                    Row {t.row} • Instant Delivery
                                </Text>
                            </View>
                            <View className="items-end">
                                <Text className={`font-black text-xl ${selectedTicketId === t.id ? 'text-primary-foreground' : 'text-foreground'}`}>
                                    ${t.price}
                                </Text>
                                <Text className={`text-[10px] font-bold uppercase opacity-60 ${selectedTicketId === t.id ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                                    per ticket
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                    {filteredTickets.length === 0 && !loading && (
                        <View className="py-10 items-center">
                            <Ionicons name="search-outline" size={48} color="#cbd5e1" />
                            <Text className="text-muted-foreground font-medium mt-2">No tickets found in this section</Text>
                        </View>
                    )}
                </View>
            </ScrollView>

            {/* Sticky Bottom Bar */}
            <View className="absolute bottom-0 left-0 right-0 p-6 bg-background/80 backdrop-blur-2xl border-t border-border/10">
                <View className="flex-row justify-between items-center mb-4 px-2">
                    <View>
                        <Text className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Total Amount</Text>
                        <Text className="text-2xl font-black text-foreground">
                            ${selectedTicket ? (selectedTicket.price * quantity) : '0'}
                        </Text>
                    </View>
                    {selectedTicket && (
                        <Text className="text-xs font-bold text-muted-foreground">
                            {quantity} x ${selectedTicket.price}
                        </Text>
                    )}
                </View>
                <Button
                    size="lg"
                    className="w-full rounded-full h-14 shadow-xl shadow-primary/30"
                    onPress={handleBuy}
                    disabled={!selectedTicketId}
                >
                    <Text className="font-extrabold text-lg text-primary-foreground">
                        {selectedTicketId ? 'Confirm Selection' : 'Select a Ticket'}
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default EventDetailScreen;
