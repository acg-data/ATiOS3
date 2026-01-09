export enum TicketStatus {
  Purchased = 'purchased',
  Used = 'used',
  Expired = 'expired',
  Refunded = 'refunded'
}

export interface Ticket {
  id: string;
  eventId: string;
  eventTitle: string;
  venue: string;
  date: string;
  section: string;
  row: string;
  seat: string;
  qrCode: string;
  status: TicketStatus;
  price: number;
  type?: string;
}

export interface TicketFilters {
  status?: TicketStatus;
  searchQuery?: string;
}

export interface TicketCollection {
  tickets: Ticket[];
  totalCount: number;
  totalValue: number;
}
