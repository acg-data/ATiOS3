import { Event, Ticket, TicketStatus, Venue } from '../types';

// Event Categories
export const MLB_EVENTS: Event[] = [
  // Existing events (keeping for reference)
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
  },
  // New 2026 events starting from Jan 10, 2026
  {
    id: 'evt-sox-2026-001',
    trackCode: 1,
    title: 'Boston Red Sox vs New York Yankees',
    shortDescription: 'Historic rivalry renewed! The Red Sox host their arch-rivals at Fenway.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-04-15T19:10:00-0400',
    endDateTime: '2026-04-15T22:30:00-0400',
    favorite: true,
    price: Math.floor(Math.random() * (350 - 250) + 250),
    availableSeats: Math.floor(Math.random() * 10000) + 5000,
    imageUrl: 'https://images.unsplash.com/photo-1587383378797-a9a609d40a36?q=80&w=2861&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-002',
    trackCode: 1,
    title: 'Boston Red Sox vs Toronto Blue Jays',
    shortDescription: 'AL East battle at Fenway. Jays look to avenge last season.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-05-02T19:10:00-0400',
    endDateTime: '2026-05-02T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (150 - 75) + 75),
    availableSeats: Math.floor(Math.random() * 8000) + 3000,
    imageUrl: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-003',
    trackCode: 1,
    title: 'Boston Red Sox @ New York Yankees',
    shortDescription: 'Rivalry on the road. Red Sox travel to the Bronx for a crucial series.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Yankee Stadium, Bronx, NY',
    startDateTime: '2026-05-28T19:05:00-0400',
    endDateTime: '2026-05-28T22:25:00-0400',
    favorite: true,
    price: Math.floor(Math.random() * (200 - 120) + 120),
    availableSeats: Math.floor(Math.random() * 6000) + 2000,
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-004',
    trackCode: 1,
    title: 'Boston Red Sox vs Tampa Bay Rays',
    shortDescription: 'AL East matchup at Fenway. Rays coming off a strong spring training.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-06-14T19:10:00-0400',
    endDateTime: '2026-06-14T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (120 - 65) + 65),
    availableSeats: Math.floor(Math.random() * 7000) + 4000,
    imageUrl: 'https://images.unsplash.com/photo-1587383378797-a9a609d40a36?q=80&w=2861&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-005',
    trackCode: 1,
    title: 'Boston Red Sox vs Baltimore Orioles',
    shortDescription: 'Midseason AL East showdown. O\'rioles defense vs Red Sox lineup.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-07-08T19:10:00-0400',
    endDateTime: '2026-07-08T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (140 - 80) + 80),
    availableSeats: Math.floor(Math.random() * 6000) + 3000,
    imageUrl: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-006',
    trackCode: 1,
    title: 'Boston Red Sox @ Toronto Blue Jays',
    shortDescription: 'Road trip to Toronto. Red Sox look to gain ground in AL East.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Rogers Centre, Toronto, ON',
    startDateTime: '2026-07-22T19:07:00-0400',
    endDateTime: '2026-07-22T22:27:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (180 - 100) + 100),
    availableSeats: Math.floor(Math.random() * 5000) + 1500,
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-007',
    trackCode: 1,
    title: 'Boston Red Sox vs Los Angeles Dodgers',
    shortDescription: 'Interleague showdown. Dodgers bring their NL West magic to Fenway.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-08-05T19:10:00-0400',
    endDateTime: '2026-08-05T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (220 - 140) + 140),
    availableSeats: Math.floor(Math.random() * 3000) + 1000,
    imageUrl: 'https://images.unsplash.com/photo-1587383378797-a9a609d40a36?q=80&w=2861&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-008',
    trackCode: 1,
    title: 'Boston Red Sox @ Tampa Bay Rays',
    shortDescription: 'Tropicana Field showdown. Rays home field advantage vs Red Sox power.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Tropicana Field, St. Petersburg, FL',
    startDateTime: '2026-08-19T19:10:00-0400',
    endDateTime: '2026-08-19T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (160 - 90) + 90),
    availableSeats: Math.floor(Math.random() * 8000) + 4000,
    imageUrl: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-009',
    trackCode: 1,
    title: 'Boston Red Sox vs Houston Astros',
    shortDescription: 'Late season matchup. Astros contenders vs Red Sox playoff push.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-09-02T19:10:00-0400',
    endDateTime: '2026-09-02T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (180 - 110) + 110),
    availableSeats: Math.floor(Math.random() * 5000) + 2000,
    imageUrl: 'https://images.unsplash.com/photo-1587383378797-a9a609d40a36?q=80&w=2861&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-010',
    trackCode: 1,
    title: 'Boston Red Sox vs New York Yankees',
    shortDescription: 'Season finale rivalry! Winner takes AL East momentum into playoffs.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-09-28T19:10:00-0400',
    endDateTime: '2026-09-28T22:30:00-0400',
    favorite: true,
    price: Math.floor(Math.random() * (350 - 280) + 280),
    availableSeats: Math.floor(Math.random() * 2000) + 500,
    imageUrl: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-011',
    trackCode: 1,
    title: 'Boston Red Sox @ Baltimore Orioles',
    shortDescription: 'Penultimate series. Orioles defending home field vs Red Sox magic number.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Oriole Park, Baltimore, MD',
    startDateTime: '2026-10-12T19:05:00-0400',
    endDateTime: '2026-10-12T22:25:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (140 - 85) + 85),
    availableSeats: Math.floor(Math.random() * 4000) + 1500,
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-012',
    trackCode: 1,
    title: 'Boston Red Sox vs Cleveland Guardians',
    shortDescription: 'AL Central visitors bring their winning formula to Fenway.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-06-28T19:10:00-0400',
    endDateTime: '2026-06-28T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (130 - 70) + 70),
    availableSeats: Math.floor(Math.random() * 6500) + 3500,
    imageUrl: 'https://images.unsplash.com/photo-1587383378797-a9a609d40a36?q=80&w=2861&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-013',
    trackCode: 1,
    title: 'Boston Red Sox @ Kansas City Royals',
    shortDescription: 'Road trip to the Midwest. Royals young talent vs veteran Red Sox.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Kauffman Stadium, Kansas City, MO',
    startDateTime: '2026-08-12T19:10:00-0500',
    endDateTime: '2026-08-12T22:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (100 - 55) + 55),
    availableSeats: Math.floor(Math.random() * 9000) + 5000,
    imageUrl: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-014',
    trackCode: 1,
    title: 'Boston Red Sox vs Seattle Mariners',
    shortDescription: 'West Coast visitors. Mariners pitching staff vs Red Sox offense.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-07-15T19:10:00-0400',
    endDateTime: '2026-07-15T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (160 - 95) + 95),
    availableSeats: Math.floor(Math.random() * 5500) + 2500,
    imageUrl: 'https://images.unsplash.com/photo-1587383378797-a9a609d40a36?q=80&w=2861&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-015',
    trackCode: 1,
    title: 'Boston Red Sox @ New York Yankees',
    shortDescription: 'Final rivalry game of the season. Bronx finale with playoff implications.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Yankee Stadium, Bronx, NY',
    startDateTime: '2026-09-15T19:05:00-0400',
    endDateTime: '2026-09-15T22:25:00-0400',
    favorite: true,
    price: Math.floor(Math.random() * (320 - 240) + 240),
    availableSeats: Math.floor(Math.random() * 1500) + 300,
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop'
  },
  {
    id: 'evt-sox-2026-016',
    trackCode: 1,
    title: 'Boston Red Sox vs Minnesota Twins',
    shortDescription: 'AL Central showdown. Twins powerhouse lineup visits Fenway.',
    speakers: [{ name: 'Boston Red Sox' }],
    location: 'Fenway Park, Boston, MA',
    startDateTime: '2026-05-15T19:10:00-0400',
    endDateTime: '2026-05-15T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (140 - 80) + 80),
    availableSeats: Math.floor(Math.random() * 6000) + 3000,
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
  },
  // New 2026 NHL events starting from Jan 10, 2026
  {
    id: 'evt-bruins-2026-001',
    trackCode: 2,
    title: 'Boston Bruins vs Montreal Canadiens',
    shortDescription: 'Historic rivalry returns! Canadiens visit TD Garden for first matchup of 2026.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-15T19:00:00-0500',
    endDateTime: '2026-01-15T21:30:00-0500',
    favorite: true,
    price: Math.floor(Math.random() * (350 - 250) + 250),
    availableSeats: Math.floor(Math.random() * 1000) + 200,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-002',
    trackCode: 2,
    title: 'Boston Bruins vs Toronto Maple Leafs',
    shortDescription: 'Battle of Ontario! Leafs bring their high-powered offense to Boston.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-01T19:00:00-0500',
    endDateTime: '2026-02-01T21:30:00-0500',
    favorite: true,
    price: Math.floor(Math.random() * (280 - 180) + 180),
    availableSeats: Math.floor(Math.random() * 1500) + 300,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-003',
    trackCode: 2,
    title: 'Boston Bruins @ Montreal Canadiens',
    shortDescription: 'Rivalry on the road. Bruins travel to Bell Centre for a heated matchup.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'Bell Centre, Montreal, QC',
    startDateTime: '2026-03-15T19:00:00-0500',
    endDateTime: '2026-03-15T21:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (220 - 140) + 140),
    availableSeats: Math.floor(Math.random() * 2000) + 500,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-004',
    trackCode: 2,
    title: 'Boston Bruins vs New York Rangers',
    shortDescription: 'Manhattan rivals meet in Boston. Rangers defense vs Bruins firepower.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-28T19:00:00-0500',
    endDateTime: '2026-01-28T21:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (180 - 120) + 120),
    availableSeats: Math.floor(Math.random() * 2500) + 800,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-005',
    trackCode: 2,
    title: 'Boston Bruins @ Toronto Maple Leafs',
    shortDescription: 'Scotiabank Arena showdown. Leafs scoring vs Bruins defense.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'Scotiabank Arena, Toronto, ON',
    startDateTime: '2026-02-18T19:00:00-0500',
    endDateTime: '2026-02-18T21:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (240 - 160) + 160),
    availableSeats: Math.floor(Math.random() * 1800) + 400,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-006',
    trackCode: 2,
    title: 'Boston Bruins vs Buffalo Sabres',
    shortDescription: 'Divisional rivals clash. Sabres young talent vs veteran Bruins.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-03-08T15:00:00-0500',
    endDateTime: '2026-03-08T17:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (140 - 95) + 95),
    availableSeats: Math.floor(Math.random() * 3000) + 1000,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-007',
    trackCode: 2,
    title: 'Boston Bruins @ New York Islanders',
    shortDescription: 'Long Island trip. Islanders physical style vs Bruins skill.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'UBS Arena, Elmont, NY',
    startDateTime: '2026-04-05T19:00:00-0400',
    endDateTime: '2026-04-05T21:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (120 - 80) + 80),
    availableSeats: Math.floor(Math.random() * 4000) + 1200,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-008',
    trackCode: 2,
    title: 'Boston Bruins vs Carolina Hurricanes',
    shortDescription: 'Carolina brings their Stanley Cup pedigree to TD Garden.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-25T19:00:00-0500',
    endDateTime: '2026-02-25T21:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (160 - 110) + 110),
    availableSeats: Math.floor(Math.random() * 2200) + 600,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-009',
    trackCode: 2,
    title: 'Boston Bruins @ Pittsburgh Penguins',
    shortDescription: 'Steel City showdown. Penguins resurgence vs Bruins dynasty.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'PPG Paints Arena, Pittsburgh, PA',
    startDateTime: '2026-03-22T19:00:00-0400',
    endDateTime: '2026-03-22T21:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (190 - 130) + 130),
    availableSeats: Math.floor(Math.random() * 2800) + 900,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-010',
    trackCode: 2,
    title: 'Boston Bruins vs Florida Panthers',
    shortDescription: 'Florida visits Boston. Panthers speed vs Bruins defense.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-22T19:00:00-0500',
    endDateTime: '2026-01-22T21:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (170 - 115) + 115),
    availableSeats: Math.floor(Math.random() * 2600) + 700,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-011',
    trackCode: 2,
    title: 'Boston Bruins @ Buffalo Sabres',
    shortDescription: 'Snowy road game. Sabres home ice advantage.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'KeyBank Center, Buffalo, NY',
    startDateTime: '2026-04-12T19:00:00-0400',
    endDateTime: '2026-04-12T21:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (130 - 85) + 85),
    availableSeats: Math.floor(Math.random() * 3500) + 1100,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-012',
    trackCode: 2,
    title: 'Boston Bruins vs Philadelphia Flyers',
    shortDescription: 'Battle of Pennsylvania. Flyers grit vs Bruins skill.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-08T14:00:00-0500',
    endDateTime: '2026-02-08T16:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (150 - 100) + 100),
    availableSeats: Math.floor(Math.random() * 3200) + 1000,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-013',
    trackCode: 2,
    title: 'Boston Bruins @ Carolina Hurricanes',
    shortDescription: 'Carolina road trip. Hurricanes strong home record vs Bruins.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'PNC Arena, Raleigh, NC',
    startDateTime: '2026-03-29T19:00:00-0400',
    endDateTime: '2026-03-29T21:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (175 - 120) + 120),
    availableSeats: Math.floor(Math.random() * 2400) + 800,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-014',
    trackCode: 2,
    title: 'Boston Bruins vs New Jersey Devils',
    shortDescription: 'Garden State rivals. Devils defensive structure vs Bruins offense.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-04-19T19:00:00-0400',
    endDateTime: '2026-04-19T21:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (135 - 90) + 90),
    availableSeats: Math.floor(Math.random() * 3800) + 1200,
    imageUrl: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'evt-bruins-2026-015',
    trackCode: 2,
    title: 'Boston Bruins @ Florida Panthers',
    shortDescription: 'Sunshine State showdown. Panthers vs Bruins in regular season finale.',
    speakers: [{ name: 'Boston Bruins' }],
    location: 'Amerant Bank Arena, Sunrise, FL',
    startDateTime: '2026-04-26T19:00:00-0400',
    endDateTime: '2026-04-26T21:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (155 - 105) + 105),
    availableSeats: Math.floor(Math.random() * 2900) + 900,
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
  },
  // New 2026 NBA events starting from Jan 10, 2026
  {
    id: 'evt-cs-2026-001',
    trackCode: 3,
    title: 'Boston Celtics vs New York Knicks',
    shortDescription: 'Historic rivalry renewed! Knicks bring their star power to TD Garden.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-15T19:30:00-0500',
    endDateTime: '2026-01-15T22:00:00-0500',
    favorite: true,
    price: Math.floor(Math.random() * (350 - 280) + 280),
    availableSeats: Math.floor(Math.random() * 500) + 100,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-002',
    trackCode: 3,
    title: 'Boston Celtics vs Philadelphia 76ers',
    shortDescription: 'Liberty Bell rivals clash. Sixers stars vs Celtics defense.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-08T19:30:00-0500',
    endDateTime: '2026-02-08T22:00:00-0500',
    favorite: true,
    price: Math.floor(Math.random() * (320 - 240) + 240),
    availableSeats: Math.floor(Math.random() * 700) + 200,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-003',
    trackCode: 3,
    title: 'Boston Celtics @ New York Knicks',
    shortDescription: 'Madison Square Garden showdown. Knicks home court advantage.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'Madison Square Garden, New York, NY',
    startDateTime: '2026-03-01T19:30:00-0500',
    endDateTime: '2026-03-01T22:00:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (280 - 200) + 200),
    availableSeats: Math.floor(Math.random() * 800) + 300,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-004',
    trackCode: 3,
    title: 'Boston Celtics vs Brooklyn Nets',
    shortDescription: 'Borough rivals. Nets emerging stars vs Celtics championship experience.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-28T19:30:00-0500',
    endDateTime: '2026-01-28T22:00:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (180 - 140) + 140),
    availableSeats: Math.floor(Math.random() * 1200) + 400,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-005',
    trackCode: 3,
    title: 'Boston Celtics @ Philadelphia 76ers',
    shortDescription: 'Wells Fargo Center battle. Sixers big three vs Celtics defense.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'Wells Fargo Center, Philadelphia, PA',
    startDateTime: '2026-03-15T19:30:00-0400',
    endDateTime: '2026-03-15T22:00:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (260 - 180) + 180),
    availableSeats: Math.floor(Math.random() * 900) + 300,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-006',
    trackCode: 3,
    title: 'Boston Celtics vs Milwaukee Bucks',
    shortDescription: 'Giannis and the Bucks visit Boston. Defensive battle royale.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-22T19:30:00-0500',
    endDateTime: '2026-02-22T22:00:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (240 - 170) + 170),
    availableSeats: Math.floor(Math.random() * 1000) + 300,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-007',
    trackCode: 3,
    title: 'Boston Celtics @ Brooklyn Nets',
    shortDescription: 'Barclays Center matchup. Nets young core vs Celtics veterans.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'Barclays Center, Brooklyn, NY',
    startDateTime: '2026-04-05T19:30:00-0400',
    endDateTime: '2026-04-05T22:00:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (160 - 120) + 120),
    availableSeats: Math.floor(Math.random() * 1400) + 500,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-008',
    trackCode: 3,
    title: 'Boston Celtics vs Chicago Bulls',
    shortDescription: 'Windy City visitors. Bulls rebuilding project vs Celtics contenders.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-03-08T15:00:00-0500',
    endDateTime: '2026-03-08T17:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (140 - 100) + 100),
    availableSeats: Math.floor(Math.random() * 1600) + 600,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-009',
    trackCode: 3,
    title: 'Boston Celtics @ Milwaukee Bucks',
    shortDescription: 'Fiserv Forum showdown. Giannis home court vs Celtics road warriors.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'Fiserv Forum, Milwaukee, WI',
    startDateTime: '2026-04-12T19:30:00-0400',
    endDateTime: '2026-04-12T22:00:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (220 - 150) + 150),
    availableSeats: Math.floor(Math.random() * 1100) + 400,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-010',
    trackCode: 3,
    title: 'Boston Celtics vs Cleveland Cavaliers',
    shortDescription: 'Ohio rivals. Cavs young talent vs Celtics championship pedigree.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-01-22T19:30:00-0500',
    endDateTime: '2026-01-22T22:00:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (155 - 115) + 115),
    availableSeats: Math.floor(Math.random() * 1300) + 500,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-011',
    trackCode: 3,
    title: 'Boston Celtics @ Chicago Bulls',
    shortDescription: 'United Center matchup. Bulls rebuilding vs Celtics contenders.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'United Center, Chicago, IL',
    startDateTime: '2026-04-19T19:30:00-0400',
    endDateTime: '2026-04-19T22:00:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (135 - 95) + 95),
    availableSeats: Math.floor(Math.random() * 1500) + 600,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-012',
    trackCode: 3,
    title: 'Boston Celtics vs Toronto Raptors',
    shortDescription: 'Maple Leaf matchup. Raptors international flair vs Celtics fundamentals.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-02-15T19:30:00-0500',
    endDateTime: '2026-02-15T22:00:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (165 - 125) + 125),
    availableSeats: Math.floor(Math.random() * 1250) + 450,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-013',
    trackCode: 3,
    title: 'Boston Celtics @ Cleveland Cavaliers',
    shortDescription: 'Rocket Mortgage FieldHouse. Cavs home crowd vs Celtics road test.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'Rocket Mortgage FieldHouse, Cleveland, OH',
    startDateTime: '2026-03-22T19:30:00-0400',
    endDateTime: '2026-03-22T22:00:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (145 - 105) + 105),
    availableSeats: Math.floor(Math.random() * 1350) + 550,
    imageUrl: 'https://images.unsplash.com/photo-1533446051752-9bc50d2764f6?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-014',
    trackCode: 3,
    title: 'Boston Celtics vs Detroit Pistons',
    shortDescription: 'Motor City visitors. Pistons rebuilding vs Celtics contenders.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'TD Garden, Boston, MA',
    startDateTime: '2026-03-29T19:30:00-0400',
    endDateTime: '2026-03-29T22:00:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (130 - 90) + 90),
    availableSeats: Math.floor(Math.random() * 1700) + 700,
    imageUrl: 'https://images.unsplash.com/photo-1504450304029-d886de913809?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'evt-cs-2026-015',
    trackCode: 3,
    title: 'Boston Celtics @ Toronto Raptors',
    shortDescription: 'Scotiabank Arena finale. Raptors vs Celtics in regular season closer.',
    speakers: [{ name: 'Boston Celtics' }],
    location: 'Scotiabank Arena, Toronto, ON',
    startDateTime: '2026-04-26T19:30:00-0400',
    endDateTime: '2026-04-26T22:00:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (175 - 135) + 135),
    availableSeats: Math.floor(Math.random() * 1150) + 350,
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
  },
  // New 2026 NFL events starting from Jan 10, 2026
  {
    id: 'evt-nfl-2026-001',
    trackCode: 4,
    title: 'New England Patriots vs Buffalo Bills',
    shortDescription: 'AFC East rivalry intensifies! Bills offense vs Patriots defense at home.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-01-18T16:25:00-0500',
    endDateTime: '2026-01-18T19:30:00-0500',
    favorite: true,
    price: Math.floor(Math.random() * (350 - 280) + 280),
    availableSeats: Math.floor(Math.random() * 2000) + 500,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-002',
    trackCode: 4,
    title: 'New England Patriots vs Miami Dolphins',
    shortDescription: 'Sunshine State rivals. Dolphins speed vs Patriots physicality.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-02-01T13:00:00-0500',
    endDateTime: '2026-02-01T16:30:00-0500',
    favorite: true,
    price: Math.floor(Math.random() * (240 - 180) + 180),
    availableSeats: Math.floor(Math.random() * 3000) + 1000,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-003',
    trackCode: 4,
    title: 'New England Patriots @ Buffalo Bills',
    shortDescription: 'Highmark Stadium battle. Bills home field advantage.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Highmark Stadium, Orchard Park, NY',
    startDateTime: '2026-03-01T13:00:00-0500',
    endDateTime: '2026-03-01T16:30:00-0500',
    favorite: false,
    price: Math.floor(Math.random() * (280 - 200) + 200),
    availableSeats: Math.floor(Math.random() * 2500) + 800,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-004',
    trackCode: 4,
    title: 'New England Patriots vs New York Jets',
    shortDescription: 'MetLife Stadium rivals. Jets vs Patriots in Big Apple showdown.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'MetLife Stadium, East Rutherford, NJ',
    startDateTime: '2026-03-15T16:25:00-0400',
    endDateTime: '2026-03-15T19:30:00-0400',
    favorite: true,
    price: Math.floor(Math.random() * (260 - 190) + 190),
    availableSeats: Math.floor(Math.random() * 2800) + 900,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-005',
    trackCode: 4,
    title: 'New England Patriots @ Miami Dolphins',
    shortDescription: 'Hard Rock Stadium. Dolphins home crowd vs Patriots road warriors.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Hard Rock Stadium, Miami Gardens, FL',
    startDateTime: '2026-04-05T13:00:00-0400',
    endDateTime: '2026-04-05T16:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (230 - 160) + 160),
    availableSeats: Math.floor(Math.random() * 3200) + 1200,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-006',
    trackCode: 4,
    title: 'New England Patriots vs Cincinnati Bengals',
    shortDescription: 'Bengals visit Foxborough. AFC North powerhouse vs AFC East contenders.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-04-19T16:25:00-0400',
    endDateTime: '2026-04-19T19:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (210 - 150) + 150),
    availableSeats: Math.floor(Math.random() * 3500) + 1500,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-007',
    trackCode: 4,
    title: 'New England Patriots @ Baltimore Ravens',
    shortDescription: 'M&T Bank Stadium. Ravens defense vs Patriots offense.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'M&T Bank Stadium, Baltimore, MD',
    startDateTime: '2026-05-03T13:00:00-0400',
    endDateTime: '2026-05-03T16:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (190 - 130) + 130),
    availableSeats: Math.floor(Math.random() * 4000) + 1800,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-008',
    trackCode: 4,
    title: 'New England Patriots vs Cleveland Browns',
    shortDescription: 'Browns bring their playoff experience to Gillette Stadium.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-05-17T16:25:00-0400',
    endDateTime: '2026-05-17T19:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (175 - 120) + 120),
    availableSeats: Math.floor(Math.random() * 4200) + 2000,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-009',
    trackCode: 4,
    title: 'New England Patriots @ Pittsburgh Steelers',
    shortDescription: 'Heinz Field showdown. Steelers tradition vs Patriots innovation.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Heinz Field, Pittsburgh, PA',
    startDateTime: '2026-05-31T16:25:00-0400',
    endDateTime: '2026-05-31T19:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (200 - 140) + 140),
    availableSeats: Math.floor(Math.random() * 3800) + 1600,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-010',
    trackCode: 4,
    title: 'New England Patriots vs Washington Commanders',
    shortDescription: 'Commanders visit Foxborough. NFC East vs AFC East.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-06-14T19:15:00-0400',
    endDateTime: '2026-06-14T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (165 - 110) + 110),
    availableSeats: Math.floor(Math.random() * 4500) + 2200,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-011',
    trackCode: 4,
    title: 'New England Patriots @ New York Jets',
    shortDescription: 'MetLife Stadium night game. Jets home crowd vs Patriots.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'MetLife Stadium, East Rutherford, NJ',
    startDateTime: '2026-06-28T19:15:00-0400',
    endDateTime: '2026-06-28T22:30:00-0400',
    favorite: true,
    price: Math.floor(Math.random() * (250 - 180) + 180),
    availableSeats: Math.floor(Math.random() * 3000) + 1000,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-012',
    trackCode: 4,
    title: 'New England Patriots vs Kansas City Chiefs',
    shortDescription: 'Chiefs bring Super Bowl pedigree to Gillette Stadium.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-07-12T19:15:00-0400',
    endDateTime: '2026-07-12T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (320 - 250) + 250),
    availableSeats: Math.floor(Math.random() * 1500) + 300,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-013',
    trackCode: 4,
    title: 'New England Patriots @ Denver Broncos',
    shortDescription: 'Empower Field at Mile High. Broncos altitude vs Patriots.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Empower Field at Mile High, Denver, CO',
    startDateTime: '2026-07-26T16:05:00-0600',
    endDateTime: '2026-07-26T19:30:00-0600',
    favorite: false,
    price: Math.floor(Math.random() * (185 - 125) + 125),
    availableSeats: Math.floor(Math.random() * 3600) + 1400,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-014',
    trackCode: 4,
    title: 'New England Patriots vs Las Vegas Raiders',
    shortDescription: 'Raiders return to Foxborough. AFC West vs AFC East.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'Gillette Stadium, Foxborough, MA',
    startDateTime: '2026-08-09T19:15:00-0400',
    endDateTime: '2026-08-09T22:30:00-0400',
    favorite: false,
    price: Math.floor(Math.random() * (155 - 100) + 100),
    availableSeats: Math.floor(Math.random() * 4800) + 2400,
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=2626&auto=format&fit=crop'
  },
  {
    id: 'evt-nfl-2026-015',
    trackCode: 4,
    title: 'New England Patriots @ Los Angeles Chargers',
    shortDescription: 'SoFi Stadium finale. Chargers vs Patriots in regular season closer.',
    speakers: [{ name: 'New England Patriots' }],
    location: 'SoFi Stadium, Inglewood, CA',
    startDateTime: '2026-08-23T16:05:00-0700',
    endDateTime: '2026-08-23T19:30:00-0700',
    favorite: false,
    price: Math.floor(Math.random() * (170 - 115) + 115),
    availableSeats: Math.floor(Math.random() * 4200) + 1800,
    imageUrl: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2671&auto=format&fit=crop'
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

// Map Sections to internal IDs for simpler logic
export enum StadiumSection {
  Floor = 'floor',
  LogeLower = 'loge_lower',
  LogeUpper = 'loge_upper',
  Balcony = 'balcony'
}

// Helper to generate tickets for an event
const generateTicketsForEvent = (eventId: string, basePrice: number): Ticket[] => {
  const categories = [
    { sectionId: StadiumSection.Floor, name: 'Floor/Parquet', multiplier: 2.5, type: 'VIP' },
    { sectionId: StadiumSection.LogeLower, name: 'Loge Lower', multiplier: 1.5, type: 'Premium' },
    { sectionId: StadiumSection.LogeUpper, name: 'Loge Upper', multiplier: 1.0, type: 'Standard' },
    { sectionId: StadiumSection.Balcony, name: 'Balcony', multiplier: 0.7, type: 'Economy' },
  ];

  const tickets: Ticket[] = [];
  categories.forEach((cat, index) => {
    // Generate 3-5 rows per section
    for (let r = 1; r <= 3; r++) {
      const row = String.fromCharCode(64 + r); // A, B, C
      tickets.push({
        id: `tkt-${eventId}-${cat.sectionId}-${r}`,
        eventId,
        eventTitle: 'Dynamic Event', // Overridden by UI usually
        venue: 'Venue',
        date: '2026-01-01',
        section: cat.name,
        sectionId: cat.sectionId as any, // Adding internal ID for filtering
        row,
        seat: '12',
        qrCode: `QR-${eventId}-${index}-${r}`,
        status: TicketStatus.Purchased,
        price: Math.round(basePrice * cat.multiplier),
        type: cat.type
      });
    }
  });
  return tickets;
};

// Expanded tickets
export const SAMPLE_TICKETS: Ticket[] = [
  ...generateTicketsForEvent('evt-cs-006', 110),
  ...generateTicketsForEvent('evt-bruins-003', 130),
  ...generateTicketsForEvent('evt-sox-001', 45),
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

  static async getTicketsByEvent(eventId: string): Promise<Ticket[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const event = ALL_EVENTS.find(e => e.id === eventId);
    if (!event) return [];

    // Return filtered sample tickets or generate them if they don't exist
    const filtered = SAMPLE_TICKETS.filter(t => t.eventId === eventId);
    return filtered.length > 0 ? filtered : generateTicketsForEvent(eventId, event.price || 100);
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
