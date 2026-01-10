import { format, parseISO, isSameDay, isToday, isTomorrow, isThisWeek } from 'date-fns';

export const formatEventDate = (dateString: string): string => {
  const date = parseISO(dateString);

  if (isToday(date)) {
    return `Today at ${format(date, 'h:mm a')}`;
  }

  if (isTomorrow(date)) {
    return `Tomorrow at ${format(date, 'h:mm a')}`;
  }

  return format(date, 'MMM d, yyyy \'at\' h:mm a');
};

export const formatEventDateShort = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'MMM d');
};

export const formatEventTime = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'h:mm a');
};

export const formatEventDay = (dateString: string): string => {
  const date = parseISO(dateString);

  if (isToday(date)) {
    return 'Today';
  }

  if (isTomorrow(date)) {
    return 'Tomorrow';
  }

  return format(date, 'EEEE');
};

export const formatTicketDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'EEEE, MMM d, yyyy \'at\' h:mm a');
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const getTrackColor = (trackCode: number): string => {
  const colors: { [key: number]: string } = {
    1: '#d12026', // MLB
    2: '#b21e23', // NHL
    3: '#d12026', // NBA
    4: '#b21e23', // NFL
    5: '#d12026', // NCAA
    6: '#b21e23', // Concerts
    7: '#d12026', // Theater
    8: '#b21e23', // Comedy
    9: '#d12026', // Festivals
    10: '#b21e23', // Wrestling
    11: '#d12026', // MMA
    12: '#b21e23', // UFC
    13: '#d12026', // Soccer
    14: '#b21e23', // Golf
    15: '#d12026', // Tennis
    16: '#b21e23', // Racing
  };

  return colors[trackCode] || '#9b9a9a';
};

export const getTrackName = (trackCode: number): string => {
  const names: { [key: number]: string } = {
    1: 'MLB',
    2: 'NHL',
    3: 'NBA',
    4: 'NFL',
    5: 'NCAA',
    6: 'Concerts',
    7: 'Theater',
    8: 'Comedy',
    9: 'Festivals',
    10: 'WWE',
    11: 'MMA',
    12: 'UFC',
    13: 'Soccer',
    14: 'Golf',
    15: 'Tennis',
    16: 'Racing',
  };

  return names[trackCode] || 'Event';
};

export const generateQRCodeData = (ticketId: string, eventId: string): string => {
  return `ACETICKET-${ticketId}-${eventId}-${Date.now()}`;
};

export const getSeatDisplay = (section: string, row: string, seat: string): string => {
  return `${section}, Row ${row}, Seat ${seat}`;
};

export const isEventUpcoming = (dateString: string): boolean => {
  const date = parseISO(dateString);
  return date > new Date();
};

export const getEventStatus = (dateString: string): 'upcoming' | 'live' | 'past' => {
  const date = parseISO(dateString);
  const now = new Date();

  if (date > now) {
    return 'upcoming';
  }

  // For simplicity, consider events within 3 hours as 'live'
  if (date.getTime() + 3 * 60 * 60 * 1000 > now.getTime()) {
    return 'live';
  }

  return 'past';
};
