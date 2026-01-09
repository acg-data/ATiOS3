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
    startDateTime: '2026-04-04T19:10:00-0400',
    endDateTime: '2026-04-04T22:30:00-0400',
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
    startDateTime: '2026-04-18T19:10:00-0400',
    endDateTime: '2026-04-18T22:30:00-0400',
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
    startDateTime: '2026-05-19T19:10:00-0400',
    endDateTime: '2026-05-19T22:30:00-0400',
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
    startDateTime: '2026-04-01T19:00:00-0400',
    endDateTime: '2026-04-01T21:30:00-0400',
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
    startDateTime: '2026-04-15T19:00:00-0400',
    endDateTime: '2026-04-15T21:30:00-0400',
    favorite: false,
    price: 140,
    availableSeats: 500,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-003',
    trackCode: 2,
    title: 'Boston Bruins vs Pittsburgh Penguins',
    shortDescription: 'Crosby vs Pasternak. A classic rivalry at the Garden.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-11T17:00:00-0400',
    endDateTime: '2026-01-11T19:30:00-0400',
    favorite: true,
    price: 130,
    availableSeats: 800,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-004',
    trackCode: 2,
    title: 'Boston Bruins vs Montreal Canadiens',
    shortDescription: 'The oldest rivalry in hockey. Always a sellout.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-24T19:00:00-0400',
    endDateTime: '2026-01-24T21:30:00-0400',
    favorite: false,
    price: 150,
    availableSeats: 300,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-005',
    trackCode: 2,
    title: 'Boston Bruins vs Columbus Blue Jackets',
    shortDescription: 'The Bruins return from the break to host Columbus.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-26T19:00:00-0400',
    endDateTime: '2026-02-26T21:30:00-0400',
    favorite: false,
    price: 95,
    availableSeats: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-006',
    trackCode: 2,
    title: 'Boston Bruins vs Washington Capitals',
    shortDescription: 'Matinee matchup at the Garden.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-03-07T12:30:00-0400',
    endDateTime: '2026-03-07T15:00:00-0400',
    favorite: false,
    price: 115,
    availableSeats: 1200,
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
    startDateTime: '2026-04-02T19:30:00-0400',
    endDateTime: '2026-04-02T22:00:00-0400',
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
    startDateTime: '2026-04-04T19:30:00-0400',
    endDateTime: '2026-04-04T22:00:00-0400',
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
    startDateTime: '2026-04-20T15:30:00-0400',
    endDateTime: '2026-04-20T18:00:00-0400',
    favorite: false,
    price: 350,
    availableSeats: 200,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-004',
    trackCode: 3,
    title: 'Boston Celtics vs New Orleans Pelicans',
    shortDescription: 'Late season matchup as the Celtics look to secure the top seed.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-04-10T19:30:00-0400',
    endDateTime: '2026-04-10T22:00:00-0400',
    favorite: false,
    price: 140,
    availableSeats: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-005',
    trackCode: 3,
    title: 'Boston Celtics vs Orlando Magic',
    shortDescription: 'Regular Season Finale. Fan Appreciation Night at the Garden.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-04-12T18:00:00-0400',
    endDateTime: '2026-04-12T20:30:00-0400',
    favorite: true,
    price: 160,
    availableSeats: 500,
    imageUrl: 'https://images.unsplash.com/photo-1519861531473-920026393112?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-006',
    trackCode: 3,
    title: 'Boston Celtics vs Toronto Raptors',
    shortDescription: 'Make-A-Wish Night at TD Garden as the Celts host Toronto.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-09T19:00:00-0400',
    endDateTime: '2026-01-09T21:30:00-0400',
    favorite: false,
    price: 110,
    availableSeats: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-007',
    trackCode: 3,
    title: 'Boston Celtics vs Milwaukee Bucks',
    shortDescription: 'Giannis meets Tatum in a potential ECF preview.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-01T15:30:00-0400',
    endDateTime: '2026-02-01T18:00:00-0400',
    favorite: true,
    price: 240,
    availableSeats: 500,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-008',
    trackCode: 3,
    title: 'Boston Celtics vs Golden State Warriors',
    shortDescription: 'Finals rematch! Stephen Curry returns to Boston.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-03-18T19:00:00-0400',
    endDateTime: '2026-03-18T21:30:00-0400',
    favorite: true,
    price: 350,
    availableSeats: 200,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  }
];

export const NFL_EVENTS: Event[] = [
  {
    id: 'evt-nfl-001',
    trackCode: 4,
    title: 'NFL Draft Party 2026',
    shortDescription: 'Watch the draft live from Gillette Stadium with Patriots alumni.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-04-24T19:00:00-0400',
    endDateTime: '2026-04-24T23:00:00-0400',
    favorite: false,
    price: 25,
    availableSeats: 2000,
    imageUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=2831&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-002',
    trackCode: 4,
    title: 'New England Patriots vs Buffalo Bills',
    shortDescription: '2026 Home Opener! AFC East rivalry renews at Gillette Stadium.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-09-13T13:00:00-0400',
    endDateTime: '2026-09-13T16:30:00-0400',
    favorite: true,
    price: 250,
    availableSeats: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-003',
    trackCode: 4,
    title: 'New England Patriots vs Green Bay Packers',
    shortDescription: 'The Packers come to Foxborough for a rare interconference showdown.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-10-04T16:25:00-0400',
    endDateTime: '2026-10-04T19:30:00-0400',
    favorite: false,
    price: 350,
    availableSeats: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-004',
    trackCode: 4,
    title: 'New England Patriots vs Pittsburgh Steelers',
    shortDescription: 'Classic AFC battle. Two historic franchises meet again.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-10-25T13:00:00-0400',
    endDateTime: '2026-10-25T16:30:00-0400',
    favorite: false,
    price: 220,
    availableSeats: 8000,
    imageUrl: 'https://images.unsplash.com/photo-1599583726712-8e100cb362f6?q=80&w=2670&auto=format&fit=crop'
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
    startDateTime: '2026-04-08T19:00:00-0400',
    endDateTime: '2026-04-08T23:00:00-0400',
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
    startDateTime: '2026-08-09T19:30:00-0400',
    endDateTime: '2026-08-09T23:00:00-0400',
    favorite: false,
    price: 120,
    availableSeats: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-003',
    trackCode: 6,
    title: 'Lady Gaga Live',
    shortDescription: "Lady Gaga returns to TD Garden for her highly anticipated 2026 tour.",
    speakers: [{ name: 'Lady Gaga' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-03-29T20:00:00-0400',
    endDateTime: '2026-03-29T23:00:00-0400',
    favorite: true,
    price: 250,
    availableSeats: 1000,
    imageUrl: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-007',
    trackCode: 6,
    title: 'PBR - Unleash The Beast',
    shortDescription: 'The worlds top bull riders descend on TD Garden.',
    speakers: [{ name: 'PBR' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-03T19:00:00-0400',
    endDateTime: '2026-01-03T22:00:00-0400',
    favorite: false,
    price: 45,
    availableSeats: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-008',
    trackCode: 6,
    title: 'Brandi Carlile & The Head and The Heart',
    shortDescription: 'An evening of folk-rock excellence at the Garden.',
    speakers: [{ name: 'Brandi Carlile' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-12T19:30:00-0400',
    endDateTime: '2026-02-12T23:00:00-0400',
    favorite: false,
    price: 90,
    availableSeats: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1459749411177-287ce371a392?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-009',
    trackCode: 6,
    title: 'Nine Inch Nails',
    shortDescription: 'Industrial rock icons Nine Inch Nails bring their intense show to Boston.',
    speakers: [{ name: 'Nine Inch Nails' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-13T20:00:00-0400',
    endDateTime: '2026-02-13T23:00:00-0400',
    favorite: true,
    price: 110,
    availableSeats: 1000,
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0d2dbbafd3?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-004',
    trackCode: 6,
    title: 'Ariana Grande: 2026 World Tour',
    shortDescription: 'Ariana Grande takes over TD Garden for a three-night residency.',
    speakers: [{ name: 'Ariana Grande' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-07-22T19:30:00-0400',
    endDateTime: '2026-07-22T23:00:00-0400',
    favorite: false,
    price: 200,
    availableSeats: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1509335224055-685c1f01c779?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-005',
    trackCode: 6,
    title: 'Chris Stapleton at Fenway',
    shortDescription: 'Country superstar Chris Stapleton headlines the Nucar Fenway Concert Series.',
    speakers: [{ name: 'Chris Stapleton' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-08-14T18:30:00-0400',
    endDateTime: '2026-08-14T23:00:00-0400',
    favorite: false,
    price: 130,
    availableSeats: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd8?q=80&w=2676&auto=format&fit=crop'
  },
  {
    id: 'evt-concert-006',
    trackCode: 6,
    title: 'Ed Sheeran at Gillette',
    shortDescription: 'Ed Sheeran brings his massive stadium tour to Gillette Stadium for two nights.',
    speakers: [{ name: 'Ed Sheeran' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-09-25T19:00:00-0400',
    endDateTime: '2026-09-25T23:00:00-0400',
    favorite: false,
    price: 150,
    availableSeats: 40000,
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2670&auto=format&fit=crop'
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
    startDateTime: '2026-05-23T12:00:00-0400',
    endDateTime: '2026-05-25T23:00:00-0400',
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
    startDateTime: '2026-05-10T19:30:00-0400',
    endDateTime: '2026-05-10T22:00:00-0400',
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
    date: '2026-04-04T19:10:00-0400',
    section: 'Grandstand 12',
    row: 'A',
    seat: '5',
    qrCode: 'ACETICKET-TKT001-REDSOX-20260404',
    status: TicketStatus.Purchased,
    price: 45
  },
  {
    id: 'tkt-002',
    eventId: 'evt-cs-001',
    eventTitle: 'Boston Celtics vs Miami Heat',
    venue: 'TD Garden',
    date: '2026-04-02T19:30:00-0400',
    section: 'Loge 4',
    row: 'B',
    seat: '12',
    qrCode: 'ACETICKET-TKT002-CELTICS-20260402',
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
