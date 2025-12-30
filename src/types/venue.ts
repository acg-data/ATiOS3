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
  facilities?: string[];
  parkingInfo?: string;
  transitInfo?: string;
}

export interface VenueWithEvents extends Venue {
  upcomingEvents: number;
}
