import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEventStore } from '../../stores';
import { Event, Ticket } from '../../types';
import MockDataService from '../../services/mockDataService';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import StadiumMap from '../../components/tickets/StadiumMap';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS, BORDER_RADIUS } from '../../utils/constants';

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

    if (!event) return <View style={styles.errorContainer} />;

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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header Image */}
                <View style={styles.heroContainer}>
                    <Image
                        source={{ uri: event.imageUrl }}
                        style={styles.heroImage}
                        resizeMode="cover"
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                        style={styles.heroGradient}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Ionicons name="arrow-back" size={24} color={COLORS.white} />
                    </TouchableOpacity>

                    <View style={styles.heroOverlay}>
                        <Text style={styles.heroMeta}>
                            {event.location}
                        </Text>
                        <Text style={styles.heroTitle}>
                            {event.title}
                        </Text>
                    </View>
                </View>

                {/* Stadium Map Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Interactive Stadium Map</Text>
                    <StadiumMap
                        selectedSection={selectedSection}
                        onSectionSelect={setSelectedSection}
                    />
                </View>

                {/* Quantity Selector */}
                <View style={styles.quantityContainer}>
                    <View style={styles.quantityInfo}>
                        <Text style={styles.quantityLabel}>Quantity</Text>
                        <Text style={styles.quantitySubtitle}>{quantity} Seats Together</Text>
                    </View>
                    <View style={styles.quantityControls}>
                        <TouchableOpacity
                            onPress={() => setQuantity(Math.max(1, quantity - 1))}
                            style={styles.quantityButton}
                        >
                            <Ionicons name="remove" size={20} color={quantity > 1 ? COLORS.white : COLORS.textDisabled} />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity
                            onPress={() => setQuantity(Math.min(10, quantity + 1))}
                            style={styles.quantityButton}
                        >
                            <Ionicons name="add" size={20} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Ticket Selection List */}
                <View style={styles.section}>
                    <View style={styles.ticketHeader}>
                        <Text style={styles.ticketTitle}>
                            {selectedSection ? `Tickets in ${selectedSection.replace('_', ' ')}` : 'All Available Tickets'}
                        </Text>
                        <Text style={styles.ticketCount}>{filteredTickets.length} found</Text>
                    </View>

                    {filteredTickets.map((t) => (
                        <TouchableOpacity
                            key={t.id}
                            onPress={() => setSelectedTicketId(t.id)}
                            activeOpacity={0.8}
                            style={[
                                styles.ticketCard,
                                selectedTicketId === t.id && styles.ticketCardSelected
                            ]}
                        >
                            <View style={styles.ticketCardLeft}>
                                <View style={styles.ticketCardRow}>
                                    <Text style={[
                                        styles.ticketSection,
                                        selectedTicketId === t.id && styles.ticketTextSelected
                                    ]}>
                                        {t.section}
                                    </Text>
                                    {t.type === 'VIP' && (
                                        <View style={styles.vipBadge}>
                                            <Text style={styles.vipText}>VIP</Text>
                                        </View>
                                    )}
                                </View>
                                <Text style={[
                                    styles.ticketDetails,
                                    selectedTicketId === t.id && styles.ticketTextSelected
                                ]}>
                                    Row {t.row} • Instant Delivery
                                </Text>
                            </View>
                            <View style={styles.ticketCardRight}>
                                <Text style={[
                                    styles.ticketPrice,
                                    selectedTicketId === t.id && styles.ticketTextSelected
                                ]}>
                                    ${t.price}
                                </Text>
                                <Text style={[
                                    styles.ticketPerTicket,
                                    selectedTicketId === t.id && styles.ticketTextSelected
                                ]}>
                                    per ticket
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                    {filteredTickets.length === 0 && !loading && (
                        <View style={styles.emptyState}>
                            <Ionicons name="search-outline" size={48} color={COLORS.textSecondary} />
                            <Text style={styles.emptyText}>No tickets found in this section</Text>
                        </View>
                    )}
                </View>
            </ScrollView>

            {/* Sticky Bottom Bar */}
            <View style={styles.bottomBar}>
                <View style={styles.bottomBarContent}>
                    <View>
                        <Text style={styles.bottomBarLabel}>Total Amount</Text>
                        <Text style={styles.bottomBarTotal}>
                            ${selectedTicket ? (selectedTicket.price * quantity) : '0'}
                        </Text>
                    </View>
                    {selectedTicket && (
                        <Text style={styles.bottomBarBreakdown}>
                            {quantity} x ${selectedTicket.price}
                        </Text>
                    )}
                </View>
                <Button
                    size="lg"
                    label={selectedTicketId ? 'Confirm Selection' : 'Select a Ticket'}
                    style={styles.purchaseButton}
                    onPress={handleBuy}
                    disabled={!selectedTicketId}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    errorContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        paddingBottom: 140,
    },
    heroContainer: {
        height: 300,
        position: 'relative',
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
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: SPACING.md,
        width: 40,
        height: 40,
        backgroundColor: 'rgba(43, 40, 41, 0.9)',
        borderRadius: BORDER_RADIUS.round,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.divider,
    },
    heroOverlay: {
        position: 'absolute',
        bottom: SPACING.lg,
        left: SPACING.lg,
        right: SPACING.lg,
    },
    heroMeta: {
        fontSize: 10,
        fontWeight: FONT_WEIGHTS.bold,
        color: 'rgba(255, 255, 255, 0.7)',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: SPACING.xs,
    },
    heroTitle: {
        fontSize: 30,
        fontWeight: '900',
        color: COLORS.white,
        lineHeight: 32,
    },
    section: {
        paddingHorizontal: SPACING.lg,
        marginTop: SPACING.xl,
    },
    sectionTitle: {
        fontSize: FONT_SIZES.lg,
        fontWeight: '900',
        marginBottom: SPACING.sm,
        marginLeft: SPACING.xs,
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(155, 154, 154, 0.2)',
        marginHorizontal: SPACING.lg,
        marginTop: SPACING.xl,
        padding: SPACING.lg,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: COLORS.divider,
    },
    quantityInfo: {
        flex: 1,
    },
    quantityLabel: {
        fontSize: FONT_SIZES.md,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.text,
    },
    quantitySubtitle: {
        fontSize: FONT_SIZES.xs,
        color: COLORS.textSecondary,
        marginTop: 2,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.round,
        borderWidth: 1,
        borderColor: COLORS.divider,
    },
    quantityButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityText: {
        width: 32,
        textAlign: 'center',
        fontSize: FONT_SIZES.lg,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.text,
    },
    ticketHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: SPACING.lg,
        paddingLeft: SPACING.xs,
    },
    ticketTitle: {
        fontSize: FONT_SIZES.xl,
        fontWeight: '900',
        color: COLORS.text,
    },
    ticketCount: {
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.primary,
    },
    ticketCard: {
        marginBottom: SPACING.lg,
        borderRadius: 32,
        padding: SPACING.lg,
        borderWidth: 1,
        borderColor: COLORS.divider,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        ...{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3,
        },
    },
    ticketCardSelected: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        shadowColor: COLORS.primary,
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },
    ticketCardLeft: {
        flex: 1,
    },
    ticketCardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    ticketSection: {
        fontSize: FONT_SIZES.lg,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.text,
    },
    ticketTextSelected: {
        color: COLORS.white,
    },
    vipBadge: {
        marginLeft: SPACING.sm,
        backgroundColor: '#fbbf24',
        paddingHorizontal: SPACING.sm,
        paddingVertical: 2,
        borderRadius: 6,
    },
    vipText: {
        fontSize: 8,
        fontWeight: '900',
        color: '#92400e',
    },
    ticketDetails: {
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.medium,
        color: COLORS.textSecondary,
        opacity: 0.7,
    },
    ticketCardRight: {
        alignItems: 'flex-end',
    },
    ticketPrice: {
        fontSize: FONT_SIZES.xl,
        fontWeight: '900',
        color: COLORS.text,
    },
    ticketPerTicket: {
        fontSize: 10,
        fontWeight: FONT_WEIGHTS.bold,
        textTransform: 'uppercase',
        color: COLORS.textSecondary,
        opacity: 0.6,
    },
    emptyState: {
        paddingVertical: SPACING.xl,
        alignItems: 'center',
    },
    emptyText: {
        color: COLORS.textSecondary,
        fontWeight: FONT_WEIGHTS.medium,
        marginTop: SPACING.sm,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: SPACING.lg,
        backgroundColor: 'rgba(43, 40, 41, 0.95)',
        borderTopWidth: 1,
        borderTopColor: COLORS.divider,
    },
    bottomBarContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.lg,
        paddingHorizontal: SPACING.xs,
    },
    bottomBarLabel: {
        fontSize: FONT_SIZES.xs,
        color: COLORS.textSecondary,
        fontWeight: FONT_WEIGHTS.bold,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    bottomBarTotal: {
        fontSize: FONT_SIZES.xl,
        fontWeight: '900',
        color: COLORS.text,
    },
    bottomBarBreakdown: {
        fontSize: FONT_SIZES.xs,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.textSecondary,
    },
    purchaseButton: {
        width: '100%',
        height: 56,
        borderRadius: BORDER_RADIUS.round,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8,
    },
});

export default EventDetailScreen;
