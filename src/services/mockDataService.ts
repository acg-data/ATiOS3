import { Event, Ticket, TicketStatus, Venue } from '../types';

// Event Categories
export const MLB_EVENTS: Event[] = [
  {
    id: 'evt-sox-001',
    trackCode: 1,
    title: 'Boston Red Sox vs St. Louis Cardinals',
    shortDescription: "Opening homestand series at Fenway Park. The Red Sox host the Cardinals.",
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-04-04T19:10:00-0400',
    endDateTime: '2025-04-04T22:30:00-0400',
    favorite: false,
    price: 45,
    availableSeats: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-002',
    trackCode: 1,
    title: 'Boston Red Sox vs Chicago White Sox',
    shortDescription: "Patriots' Day Weekend series at Fenway. A Boston tradition.",
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-04-18T19:10:00-0400',
    endDateTime: '2025-04-18T22:30:00-0400',
    favorite: false,
    price: 65,
    availableSeats: 8000,
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-003',
    trackCode: 1,
    title: 'Boston Red Sox vs New York Mets',
    shortDescription: 'Interleague play brings the Mets to Fenway Park for a midweek series.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-05-19T19:10:00-0400',
    endDateTime: '2025-05-19T22:30:00-0400',
    favorite: false,
    price: 85,
    availableSeats: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1587383378797-a9a609d40a36?q=80&w=2861&auto=format&fit=crop'
  }
];

export const NHL_EVENTS: Event[] = [
  {
    id: 'evt-bruins-001',
    trackCode: 2,
    title: 'Boston Bruins vs Washington Capitals',
    shortDescription: 'Late season Eastern Conference clash at the Garden.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-01T19:00:00-0400',
    endDateTime: '2025-04-01T21:30:00-0400',
    favorite: false,
    price: 110,
    availableSeats: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-002',
    trackCode: 2,
    title: 'Boston Bruins vs New Jersey Devils',
    shortDescription: 'Regular Season Finale. Catch the last scheduled home game before the playoffs.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-15T19:00:00-0400',
    endDateTime: '2025-04-15T21:30:00-0400',
    favorite: false,
    price: 140,
    availableSeats: 500,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  }
];

export const NBA_EVENTS: Event[] = [
  {
    id: 'evt-cs-001',
    trackCode: 3,
    title: 'Boston Celtics vs Miami Heat',
    shortDescription: "Rivalry night at TD Garden. Playoff implications are on the line.",
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-02T19:30:00-0400',
    endDateTime: '2025-04-02T22:00:00-0400',
    favorite: true,
    price: 180,
    availableSeats: 800,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-002',
    trackCode: 3,
    title: 'Boston Celtics vs Phoenix Suns',
    shortDescription: 'Kevin Durant and the Suns visit Boston for a marquee matchup.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-04T19:30:00-0400',
    endDateTime: '2025-04-04T22:00:00-0400',
    favorite: false,
    price: 220,
    availableSeats: 400,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-003',
    trackCode: 3,
    title: 'NBA Playoffs: Round 1, Game 1',
    shortDescription: 'The quest for Banner 19 continues. Opponent TBD (Likely Magic/Pacers).',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-20T15:30:00-0400',
    endDateTime: '2025-04-20T18:00:00-0400',
    favorite: false,
    price: 350,
    availableSeats: 200,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  }
];

export const NFL_EVENTS: Event[] = [
  {
    id: 'evt-nfl-001',
    trackCode: 4,
    title: 'NFL Draft Party 2025',
    shortDescription: 'Watch the draft live from Gillette Stadium with Patriots alumni.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2025-04-24T19:00:00-0400',
    endDateTime: '2025-04-24T23:00:00-0400',
    favorite: false,
    price: 25,
    availableSeats: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=2831&auto=format&fit=crop'
  }
];

export const NCAA_EVENTS: Event[] = [];

export const CONCERT_EVENTS: Event[] = [
  {
    id: 'evt-concert-001',
    trackCode: 6,
    title: 'Deftones with The Mars Volta',
    shortDescription: "Alternative metal legends Deftones bring their heavy sound to the Garden.",
    speakers: [{ name: 'Deftones' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-08T19:00:00-0400',
    endDateTime: '2025-04-08T23:00:00-0400',
    favorite: false,
    price: 85,
    availableSeats: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1501612766622-2717fdb1dfe7?q=80&w=2669&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-002',
    trackCode: 6,
    title: 'Tate McRae: Miss Possessive Tour',
    shortDescription: 'Rising pop star Tate McRae performs her biggest hits live.',
    speakers: [{ name: 'Tate McRae' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-08-09T19:30:00-0400',
    endDateTime: '2025-08-09T23:00:00-0400',
    favorite: false,
    price: 120,
    availableSeats: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2000&auto=format&fit=crop'
  }
];

export const THEATER_EVENTS: Event[] = [];
export const COMEDY_EVENTS: Event[] = [];
export const FESTIVAL_EVENTS: Event[] = [
  {
    id: 'evt-fest-001',
    trackCode: 9,
    title: 'Boston Calling Music Festival',
    shortDescription: "3 Days of Music at the Harvard Athletic Complex. Lineup TBA.",
    speakers: [{ name: 'Boston Calling' }],
    location: 'Harvard Athletic Complex, Boston, MA',
    startDateTime: '2025-05-23T12:00:00-0400',
    endDateTime: '2025-05-25T23:00:00-0400',
    favorite: false,
    price: 360,
    availableSeats: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2670&auto=format&fit=crop'
  }
];
export const WRESTLING_EVENTS: Event[] = [];
export const MMA_UFC_EVENTS: Event[] = [];
export const SOCCER_EVENTS: Event[] = [
  {
    id: 'evt-revs-001',
    trackCode: 13,
    title: 'New England Revolution vs New York City FC',
    shortDescription: 'MLS Eastern Conference rivalry at Gillette.',
    speakers: [{ name: 'NE Revolution' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2025-05-10T19:30:00-0400',
    endDateTime: '2025-05-10T22:00:00-0400',
    favorite: false,
    price: 45,
    availableSeats: 8000,
    imageUrl: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2823&auto=format&fit=crop'
  }
];
export const GOLF_EVENTS: Event[] = [];
export const TENNIS_EVENTS: Event[] = [];
export const RACING_EVENTS: Event[] = [];

// All events combined
export const ALL_EVENTS: Event[] = [
  ...MLB_EVENTS,
  ...NHL_EVENTS,
  ...NBA_EVENTS,
  ...NFL_EVENTS,
  ...NCAA_EVENTS,
  ...CONCERT_EVENTS,
  ...THEATER_EVENTS,
  ...COMEDY_EVENTS,
  ...FESTIVAL_EVENTS,
  ...WRESTLING_EVENTS,
  ...MMA_UFC_EVENTS,
  ...SOCCER_EVENTS,
  ...GOLF_EVENTS,
  ...TENNIS_EVENTS,
  ...RACING_EVENTS
];

// Sample tickets (Updated to match new event IDs)
export const SAMPLE_TICKETS: Ticket[] = [
  {
    id: 'tkt-001',
    eventId: 'evt-sox-001',
    eventTitle: 'Boston Red Sox vs St. Louis Cardinals',
    venue: 'Fenway Park',
    date: '2025-04-04T19:10:00-0400',
    section: 'Grandstand 12',
    row: 'A',
    seat: '5',
    qrCode: 'ACETICKET-TKT001-REDSOX-20250404',
    status: TicketStatus.Purchased,
    price: 45
  },
  {
    id: 'tkt-002',
    eventId: 'evt-cs-001',
    eventTitle: 'Boston Celtics vs Miami Heat',
    venue: 'TD Garden',
    date: '2025-04-02T19:30:00-0400',
    section: 'Loge 4',
    row: 'B',
    seat: '12',
    qrCode: 'ACETICKET-TKT002-CELTICS-20250402',
    status: TicketStatus.Purchased,
    price: 180
  }
];

// Sample venues remain the same as they are static data
export const VENUES: Venue[] = [
  {
    id: 'venue-001',
    name: 'Fenway Park',
    address: '4 Yawkey Way',
    city: 'Boston',
    state: 'MA',
    zipCode: '02215',
    latitude: 42.3467,
    longitude: -71.0972,
    capacity: 37755,
    parkingInfo: 'Limited street parking available. Recommend T access.',
    transitInfo: 'Kenmore Station (Green Line C/D)'
  },
  {
    id: 'venue-002',
    name: 'TD Garden',
    address: '100 Legends Way',
    city: 'Boston',
    state: 'MA',
    zipCode: '02114',
    latitude: 42.3662,
    longitude: -71.0621,
    capacity: 19156,
    parkingInfo: 'North Station Garage available. Express shuttle from downtown.',
    transitInfo: 'North Station (Green/Orange Lines, Commuter Rail)'
  },
  {
    id: 'venue-003',
    name: 'Gillette Stadium',
    address: '1 Patriot Pl',
    city: 'Foxborough',
    state: 'MA',
    zipCode: '02035',
    latitude: 42.0909,
    longitude: -71.2643,
    capacity: 65878,
    parkingInfo: 'Large lots available. Shuttle from Patriots Place.',
    transitInfo: 'Patriot Station (Commuter Rail from South Station)'
  },
  {
    id: 'venue-004',
    name: 'Boston Opera House',
    address: '539 Washington St',
    city: 'Boston',
    state: 'MA',
    zipCode: '02111',
    latitude: 42.3512,
    longitude: -71.0631,
    capacity: 2599,
    parkingInfo: 'Parking garage at 550 Washington St.',
    transitInfo: 'Boylston Station (Green Line)'
  },
  {
    id: 'venue-005',
    name: 'Harvard Stadium',
    address: 'N Harvard St',
    city: 'Cambridge',
    state: 'MA',
    zipCode: '02134',
    latitude: 42.3667,
    longitude: -71.1167,
    capacity: 30323,
    parkingInfo: 'Harvard Square garages available.',
    transitInfo: 'Harvard Square (Red Line)'
  }
];

// Mock Data Service
export class MockDataService {
  static async getEvents(): Promise<Event[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return ALL_EVENTS;
  }

  static async getEventById(id: string): Promise<Event | undefined> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return ALL_EVENTS.find(event => event.id === id);
  }

  static async getEventsByCategory(trackCode: number): Promise<Event[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return ALL_EVENTS.filter(event => event.trackCode === trackCode);
  }

  static async getTickets(): Promise<Ticket[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return SAMPLE_TICKETS;
  }

  static async getTicketById(id: string): Promise<Ticket | undefined> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return SAMPLE_TICKETS.find(ticket => ticket.id === id);
  }

  static async getVenues(): Promise<Venue[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return VENUES;
  }

  static async getVenueById(id: string): Promise<Venue | undefined> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return VENUES.find(venue => venue.id === id);
  }

  static async searchEvents(query: string): Promise<Event[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const lowercaseQuery = query.toLowerCase();
    return ALL_EVENTS.filter(event =>
      event.title.toLowerCase().includes(lowercaseQuery) ||
      event.shortDescription.toLowerCase().includes(lowercaseQuery) ||
      event.location.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export default MockDataService;
