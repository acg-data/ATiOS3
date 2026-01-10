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
  { id: Track.MLB, name: 'MLB', color: '#d12026', icon: 'baseball' },
  { id: Track.NHL, name: 'NHL', color: '#b21e23', icon: 'hockey-stick' },
  { id: Track.NBA, name: 'NBA', color: '#d12026', icon: 'basketball' },
  { id: Track.NFL, name: 'NFL', color: '#b21e23', icon: 'football' },
  { id: Track.NCAA, name: 'NCAA', color: '#d12026', icon: 'graduation-cap' },
  { id: Track.Concerts, name: 'Concerts', color: '#b21e23', icon: 'music' },
  { id: Track.Theater, name: 'Theater', color: '#d12026', icon: 'theater-masks' },
  { id: Track.Comedy, name: 'Comedy', color: '#b21e23', icon: 'face-laugh' },
  { id: Track.Festivals, name: 'Festivals', color: '#d12026', icon: 'party-popper' },
  { id: Track.Wrestling, name: 'WWE', color: '#b21e23', icon: 'boxing-glove' },
  { id: Track.MMA, name: 'MMA', color: '#d12026', icon: 'hand-fist' },
  { id: Track.UFC, name: 'UFC', color: '#b21e23', icon: 'hand-fist' },
  { id: Track.Soccer, name: 'Soccer', color: '#d12026', icon: 'soccer' },
  { id: Track.Golf, name: 'Golf', color: '#b21e23', icon: 'golf' },
  { id: Track.Tennis, name: 'Tennis', color: '#d12026', icon: 'tennis' },
  { id: Track.Racing, name: 'Racing', color: '#b21e23', icon: 'car-fast' },
];

export interface Speaker {
  name: string;
}

import { Venue } from './venue';

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
