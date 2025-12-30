import { Event, Ticket, TicketStatus, Venue } from '../types';

// Event Categories
export const MLB_EVENTS: Event[] = [
  {
    id: 'evt-001',
    trackCode: 1,
    title: 'Boston Red Sox vs New York Yankees',
    shortDescription: "America's greatest rivalry returns to Fenway Park. Gates open at 5:30 PM. Don't miss this historic matchup between the Red Sox and Yankees.",
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-04-15T19:10:00-0400',
    endDateTime: '2025-04-15T22:30:00-0400',
    favorite: false,
    price: 75,
    availableSeats: 5000
  },
  {
    id: 'evt-002',
    trackCode: 1,
    title: 'Boston Red Sox vs Tampa Bay Rays',
    shortDescription: 'AL East showdown at Fenway Park. Watch the Red Sox take on the Rays in this exciting division matchup.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-04-20T19:10:00-0400',
    endDateTime: '2025-04-20T22:30:00-0400',
    favorite: false,
    price: 65,
    availableSeats: 8000
  },
  {
    id: 'evt-034',
    trackCode: 1,
    title: 'Boston Red Sox vs Baltimore Orioles',
    shortDescription: 'AL East action at Fenway Park as the Red Sox take on the Orioles.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-05-05T19:10:00-0400',
    endDateTime: '2025-05-05T22:30:00-0400',
    favorite: false,
    price: 55,
    availableSeats: 12000
  },
  {
    id: 'evt-035',
    trackCode: 1,
    title: 'World Series Game 7',
    shortDescription: 'The biggest stage in baseball comes to Fenway Park for Game 7 of the World Series.',
    speakers: [{ name: 'World Series' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-10-30T19:08:00-0400',
    endDateTime: '2025-10-30T23:30:00-0400',
    favorite: false,
    price: 500,
    availableSeats: 500
  }
];

export const NHL_EVENTS: Event[] = [
  {
    id: 'evt-003',
    trackCode: 2,
    title: 'Boston Bruins vs Montreal Canadiens',
    shortDescription: 'Original Six matchup at TD Garden. The Bruins take on their historic rivals, the Montreal Canadiens.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-03-20T19:00:00-0400',
    endDateTime: '2025-03-20T22:00:00-0400',
    favorite: false,
    price: 85,
    availableSeats: 3000
  },
  {
    id: 'evt-004',
    trackCode: 2,
    title: 'Boston Bruins vs Boston College',
    shortDescription: 'NHL takes on NCAA in the annual Frozen Fenway outdoor game at Fenway Park.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2025-01-15T16:00:00-0500',
    endDateTime: '2025-01-15T19:00:00-0500',
    favorite: false,
    price: 95,
    availableSeats: 4000
  }
];

export const NBA_EVENTS: Event[] = [
  {
    id: 'evt-005',
    trackCode: 3,
    title: 'Boston Celtics vs Los Angeles Lakers',
    shortDescription: "NBA's greatest rivalry comes to TD Garden. The Celtics host the Lakers in this marquee matchup.",
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-03-10T19:30:00-0500',
    endDateTime: '2025-03-10T22:30:00-0500',
    favorite: false,
    price: 150,
    availableSeats: 2000
  },
  {
    id: 'evt-006',
    trackCode: 3,
    title: 'Boston Celtics vs Brooklyn Nets',
    shortDescription: 'Eastern Conference battle at TD Garden. The Celtics take on the Nets in this exciting NBA matchup.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-05T19:30:00-0400',
    endDateTime: '2025-04-05T22:30:00-0400',
    favorite: false,
    price: 120,
    availableSeats: 3500
  }
];

export const NFL_EVENTS: Event[] = [
  {
    id: 'evt-007',
    trackCode: 4,
    title: 'New England Patriots vs New York Jets',
    shortDescription: 'AFC East rivalry at Gillette Stadium. The Patriots host the Jets in this divisional showdown.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2025-10-12T13:00:00-0400',
    endDateTime: '2025-10-12T16:30:00-0400',
    favorite: false,
    price: 200,
    availableSeats: 15000
  },
  {
    id: 'evt-008',
    trackCode: 4,
    title: 'New England Patriots vs Buffalo Bills',
    shortDescription: 'Another AFC East battle at Gillette Stadium. The Patriots take on the Bills in this crucial division game.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2025-11-23T13:00:00-0500',
    endDateTime: '2025-11-23T16:30:00-0500',
    favorite: false,
    price: 180,
    availableSeats: 20000
  }
];

export const NCAA_EVENTS: Event[] = [
  {
    id: 'evt-009',
    trackCode: 5,
    title: 'Boston College vs Notre Dame',
    shortDescription: 'ACC Football showdown at Alumni Stadium. Boston College hosts Notre Dame in this exciting college matchup.',
    speakers: [{ name: 'Boston College Football' }],
    location: 'Alumni Stadium, Boston, MA',
    startDateTime: '2025-10-05T12:00:00-0400',
    endDateTime: '2025-10-05T15:30:00-0400',
    favorite: false,
    price: 45,
    availableSeats: 10000
  },
  {
    id: 'evt-010',
    trackCode: 5,
    title: 'Harvard vs Yale',
    shortDescription: 'The Game: Harvard vs Yale at Harvard Stadium. The oldest rivalry in college football returns.',
    speakers: [{ name: 'Harvard Crimson' }],
    location: 'Harvard Stadium, Cambridge, MA',
    startDateTime: '2025-11-22T12:00:00-0500',
    endDateTime: '2025-11-22T15:30:00-0500',
    favorite: false,
    price: 60,
    availableSeats: 8000
  }
];

export const CONCERT_EVENTS: Event[] = [
  {
    id: 'evt-011',
    trackCode: 6,
    title: 'Taylor Swift - Eras Tour',
    shortDescription: "Taylor Swift brings her record-breaking Eras Tour to Gillette Stadium for two unforgettable nights.",
    speakers: [{ name: 'Taylor Swift' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2025-06-15T19:00:00-0400',
    endDateTime: '2025-06-15T23:00:00-0400',
    favorite: false,
    price: 250,
    availableSeats: 25000
  },
  {
    id: 'evt-012',
    trackCode: 6,
    title: 'Ed Sheeran - Mathematics Tour',
    shortDescription: 'Ed Sheeran performs at TD Garden as part of his Mathematics World Tour.',
    speakers: [{ name: 'Ed Sheeran' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-05-20T19:00:00-0400',
    endDateTime: '2025-05-20T22:00:00-0400',
    favorite: false,
    price: 180,
    availableSeats: 5000
  },
  {
    id: 'evt-013',
    trackCode: 6,
    title: 'Billie Eilish - Hit Me Hard and Soft Tour',
    shortDescription: 'Billie Eilish brings her latest tour to TD Garden for an intimate performance.',
    speakers: [{ name: 'Billie Eilish' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-07-10T20:00:00-0400',
    endDateTime: '2025-07-10T23:00:00-0400',
    favorite: false,
    price: 200,
    availableSeats: 4500
  }
];

export const THEATER_EVENTS: Event[] = [
  {
    id: 'evt-014',
    trackCode: 7,
    title: 'Hamilton - Broadway in Boston',
    shortDescription: "Lin-Manuel Miranda's revolutionary musical comes to the Boston Opera House for a limited engagement.",
    speakers: [{ name: 'Hamilton' }],
    location: 'Boston Opera House, Boston, MA',
    startDateTime: '2025-03-01T19:30:00-0500',
    endDateTime: '2025-03-01T22:30:00-0500',
    favorite: false,
    price: 180,
    availableSeats: 2500
  },
  {
    id: 'evt-015',
    trackCode: 7,
    title: 'The Book of Mormon',
    shortDescription: 'The outrageous musical comedy from the creators of South Park comes to Boston for a hilarious run.',
    speakers: [{ name: 'The Book of Mormon' }],
    location: 'Boston Opera House, Boston, MA',
    startDateTime: '2025-04-15T19:30:00-0400',
    endDateTime: '2025-04-15T22:30:00-0400',
    favorite: false,
    price: 150,
    availableSeats: 2800
  },
  {
    id: 'evt-016',
    trackCode: 7,
    title: 'Wicked',
    shortDescription: "The untold story of the witches of Oz comes to the Citizens Bank Opera House.",
    speakers: [{ name: 'Wicked' }],
    location: 'Citizens Bank Opera House, Boston, MA',
    startDateTime: '2025-05-20T19:30:00-0400',
    endDateTime: '2025-05-20T22:30:00-0400',
    favorite: false,
    price: 160,
    availableSeats: 3000
  }
];

export const COMEDY_EVENTS: Event[] = [
  {
    id: 'evt-017',
    trackCode: 8,
    title: 'John Mulaney Live',
    shortDescription: 'Comedy superstar John Mulaney brings his latest stand-up tour to the Wang Theatre.',
    speakers: [{ name: 'John Mulaney' }],
    location: 'Wang Theatre, Boston, MA',
    startDateTime: '2025-03-25T20:00:00-0400',
    endDateTime: '2025-03-25T22:00:00-0400',
    favorite: false,
    price: 85,
    availableSeats: 1500
  },
  {
    id: 'evt-018',
    trackCode: 8,
    title: 'Hannah Gadsby Live',
    shortDescription: 'Award-winning comedian Hannah Gadsby performs at the Wilbur Theatre.',
    speakers: [{ name: 'Hannah Gadsby' }],
    location: 'Wilbur Theatre, Boston, MA',
    startDateTime: '2025-04-30T20:00:00-0400',
    endDateTime: '2025-04-30T22:00:00-0400',
    favorite: false,
    price: 75,
    availableSeats: 1200
  }
];

export const FESTIVAL_EVENTS: Event[] = [
  {
    id: 'evt-019',
    trackCode: 9,
    title: 'Boston Calling Music Festival',
    shortDescription: "Boston's premier music festival returns to the Harvard Athletic Complex featuring top artists across multiple genres.",
    speakers: [{ name: 'Boston Calling Festival' }],
    location: 'Harvard Athletic Complex, Boston, MA',
    startDateTime: '2025-05-23T12:00:00-0400',
    endDateTime: '2025-05-25T23:00:00-0400',
    favorite: false,
    price: 350,
    availableSeats: 15000
  },
  {
    id: 'evt-020',
    trackCode: 9,
    title: 'Hot Summer Nights Festival',
    shortDescription: 'Summer concert series at the Hatch Shell featuring local and national acts.',
    speakers: [{ name: 'Hot Summer Nights' }],
    location: 'Hatch Memorial Shell, Boston, MA',
    startDateTime: '2025-07-15T18:00:00-0400',
    endDateTime: '2025-07-15T22:00:00-0400',
    favorite: false,
    price: 45,
    availableSeats: 5000
  }
];

export const WRESTLING_EVENTS: Event[] = [
  {
    id: 'evt-021',
    trackCode: 10,
    title: 'WWE SummerSlam',
    shortDescription: "WWE's biggest event of the summer comes to TD Garden. Don't miss the biggest matches of the year.",
    speakers: [{ name: 'WWE' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-08-23T19:00:00-0400',
    endDateTime: '2025-08-23T23:00:00-0400',
    favorite: false,
    price: 175,
    availableSeats: 6000
  },
  {
    id: 'evt-022',
    trackCode: 10,
    title: 'WWE Royal Rumble',
    shortDescription: 'The Royal Rumble match determines who will headline WrestleMania. Live from TD Garden!',
    speakers: [{ name: 'WWE' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-01-31T19:00:00-0500',
    endDateTime: '2025-01-31T23:00:00-0500',
    favorite: false,
    price: 150,
    availableSeats: 7000
  }
];

export const MMA_UFC_EVENTS: Event[] = [
  {
    id: 'evt-023',
    trackCode: 11,
    title: 'UFC Fight Night',
    shortDescription: 'UFC brings live mixed martial arts action to TD Garden. Featuring top contenders in multiple weight classes.',
    speakers: [{ name: 'UFC' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-06-12T20:00:00-0400',
    endDateTime: '2025-06-12T23:00:00-0400',
    favorite: false,
    price: 200,
    availableSeats: 5500
  },
  {
    id: 'evt-025',
    trackCode: 12,
    title: 'UFC 300: Championship Night',
    shortDescription: "UFC's milestone 300th event comes to TD Garden with multiple title fights and the biggest names in MMA.",
    speakers: [{ name: 'UFC' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2025-04-12T20:00:00-0400',
    endDateTime: '2025-04-12T23:30:00-0400',
    favorite: false,
    price: 300,
    availableSeats: 4500
  }
];

export const SOCCER_EVENTS: Event[] = [
  {
    id: 'evt-026',
    trackCode: 13,
    title: 'New England Revolution vs New York City FC',
    shortDescription: 'MLS Eastern Conference matchup at Gillette Stadium. The Revolution take on NYCFC in this exciting soccer match.',
    speakers: [{ name: 'New England Revolution' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2025-05-10T19:30:00-0400',
    endDateTime: '2025-05-10T22:00:00-0400',
    favorite: false,
    price: 55,
    availableSeats: 10000
  }
];

export const GOLF_EVENTS: Event[] = [
  {
    id: 'evt-028',
    trackCode: 14,
    title: 'Travelers Championship Golf Tournament',
    shortDescription: 'Professional golf comes to TPC River Highlands for this PGA Tour event. Watch the world\'s best golfers compete.',
    speakers: [{ name: 'PGA Tour' }],
    location: 'TPC River Highlands, Cromwell, CT',
    startDateTime: '2025-06-20T08:00:00-0400',
    endDateTime: '2025-06-20T17:00:00-0400',
    favorite: false,
    price: 150,
    availableSeats: 20000
  }
];

export const TENNIS_EVENTS: Event[] = [
  {
    id: 'evt-031',
    trackCode: 15,
    title: 'Boston Open Tennis Tournament',
    shortDescription: 'Professional tennis returns to Boston with the Boston Open at the Revere Tennis Center.',
    speakers: [{ name: 'ATP Tour' }],
    location: 'Revere Tennis Center, Revere, MA',
    startDateTime: '2025-07-01T10:00:00-0400',
    endDateTime: '2025-07-01T18:00:00-0400',
    favorite: false,
    price: 75,
    availableSeats: 3000
  }
];

export const RACING_EVENTS: Event[] = [
  {
    id: 'evt-032',
    trackCode: 16,
    title: 'NASCAR Cup Series at New Hampshire',
    shortDescription: 'NASCAR comes to New Hampshire Motor Speedway for an exciting day of stock car racing.',
    speakers: [{ name: 'NASCAR' }],
    location: 'New Hampshire Motor Speedway, Loudon, NH',
    startDateTime: '2025-07-19T14:30:00-0400',
    endDateTime: '2025-07-19T18:30:00-0400',
    favorite: false,
    price: 125,
    availableSeats: 50000
  }
];

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

// Sample tickets
export const SAMPLE_TICKETS: Ticket[] = [
  {
    id: 'tkt-001',
    eventId: 'evt-001',
    eventTitle: 'Boston Red Sox vs New York Yankees',
    venue: 'Fenway Park',
    date: '2025-04-15T19:10:00-0400',
    section: 'Grandstand 12',
    row: 'A',
    seat: '5',
    qrCode: 'ACETICKET-TKT001-REDSOX-20250415',
    status: TicketStatus.Purchased,
    price: 75
  },
  {
    id: 'tkt-002',
    eventId: 'evt-003',
    eventTitle: 'Boston Bruins vs Montreal Canadiens',
    venue: 'TD Garden',
    date: '2025-03-20T19:00:00-0400',
    section: 'Lower Bowl 5',
    row: 'B',
    seat: '12',
    qrCode: 'ACETICKET-TKT002-BRUINS-20250320',
    status: TicketStatus.Purchased,
    price: 85
  },
  {
    id: 'tkt-003',
    eventId: 'evt-005',
    eventTitle: 'Boston Celtics vs Los Angeles Lakers',
    venue: 'TD Garden',
    date: '2025-03-10T19:30:00-0500',
    section: 'Courtside',
    row: 'VIP',
    seat: '1',
    qrCode: 'ACETICKET-TKT003-CELTICS-20250310',
    status: TicketStatus.Purchased,
    price: 250
  },
  {
    id: 'tkt-004',
    eventId: 'evt-011',
    eventTitle: 'Taylor Swift - Eras Tour',
    venue: 'Gillette Stadium',
    date: '2025-06-15T19:00:00-0400',
    section: 'Field General Admission',
    row: 'GA',
    seat: '12345',
    qrCode: 'ACETICKET-TKT004-TAYLORSWIFT-20250615',
    status: TicketStatus.Purchased,
    price: 120
  },
  {
    id: 'tkt-005',
    eventId: 'evt-014',
    eventTitle: 'Hamilton - Broadway in Boston',
    venue: 'Boston Opera House',
    date: '2025-03-01T19:30:00-0500',
    section: 'Orchestra Center',
    row: 'H',
    seat: '10',
    qrCode: 'ACETICKET-TKT005-HAMILTON-20250301',
    status: TicketStatus.Purchased,
    price: 180
  }
];

// Sample venues
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
