// Track enum (matching iOS app)
export enum Track {
  MLB = 1,
  NHL,
  NBA,
  NFL,
  NCAA,
  Concerts,
  Theater,
  Comedy,
  Festivals,
  Wrestling,
  MMA,
  UFC,
  Soccer,
  Golf,
  Tennis,
  Racing
}

export interface TrackInfo {
  id: Track;
  name: string;
  color: string;
  icon: string;
}

export const TRACKS: TrackInfo[] = [
  { id: Track.MLB, name: 'MLB', color: '#3862FA', icon: 'baseball' },
  { id: Track.NHL, name: 'NHL', color: '#DD0000', icon: 'hockey-stick' },
  { id: Track.NBA, name: 'NBA', color: '#3862FA', icon: 'basketball' },
  { id: Track.NFL, name: 'NFL', color: '#DD0000', icon: 'football' },
  { id: Track.NCAA, name: 'NCAA', color: '#3862FA', icon: 'graduation-cap' },
  { id: Track.Concerts, name: 'Concerts', color: '#DD0000', icon: 'music' },
  { id: Track.Theater, name: 'Theater', color: '#3862FA', icon: 'theater-masks' },
  { id: Track.Comedy, name: 'Comedy', color: '#DD0000', icon: 'face-laugh' },
  { id: Track.Festivals, name: 'Festivals', color: '#3862FA', icon: 'party-popper' },
  { id: Track.Wrestling, name: 'WWE', color: '#DD0000', icon: 'boxing-glove' },
  { id: Track.MMA, name: 'MMA', color: '#3862FA', icon: 'hand-fist' },
  { id: Track.UFC, name: 'UFC', color: '#DD0000', icon: 'hand-fist' },
  { id: Track.Soccer, name: 'Soccer', color: '#3862FA', icon: 'soccer' },
  { id: Track.Golf, name: 'Golf', color: '#DD0000', icon: 'golf' },
  { id: Track.Tennis, name: 'Tennis', color: '#3862FA', icon: 'tennis' },
  { id: Track.Racing, name: 'Racing', color: '#DD0000', icon: 'car-fast' },
];

export interface Speaker {
  name: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  capacity?: number;
  imageUrl?: string;
}

export interface Event {
  id: string;
  trackCode: Track;
  title: string;
  shortDescription: string;
  speakers: Speaker[];
  location: string;
  startDateTime: string;
  endDateTime: string;
  favorite: boolean;
  // Additional fields for React Native
  price?: number;
  venue?: Venue;
  imageUrl?: string;
  availableSeats?: number;
}

export interface EventFilters {
  trackIds?: number[];
  date?: Date;
  searchQuery?: string;
  venueId?: string;
}

export interface EventsResponse {
  events: Event[];
  totalCount: number;
  page: number;
  pageSize: number;
}
