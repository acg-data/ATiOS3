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
    1: '#3862FA', // MLB
    2: '#DD0000', // NHL
    3: '#3862FA', // NBA
    4: '#DD0000', // NFL
    5: '#3862FA', // NCAA
    6: '#DD0000', // Concerts
    7: '#3862FA', // Theater
    8: '#DD0000', // Comedy
    9: '#3862FA', // Festivals
    10: '#DD0000', // Wrestling
    11: '#3862FA', // MMA
    12: '#DD0000', // UFC
    13: '#3862FA', // Soccer
    14: '#DD0000', // Golf
    15: '#3862FA', // Tennis
    16: '#DD0000', // Racing
  };
  
  return colors[trackCode] || '#757575';
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
