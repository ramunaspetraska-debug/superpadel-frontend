import type { Tournament } from '../types/tournament';

export const mockTournaments: Tournament[] = [
  {
    id: 'sp-sunrise-open',
    name: 'Superpadel Sunrise Open',
    location: 'Barcelona, Spain',
    date: '2025-01-18T09:00:00Z',
    status: 'upcoming',
    surface: 'Outdoor',
    description:
      'Premier coastal padel tournament featuring fast-paced doubles and curated networking for players and sponsors.',
    prizePool: '€10,000',
    organizer: 'Superpadel Events',
    slots: { total: 32, filled: 24 },
    players: [
      { id: 'p1', name: 'Lucia Romero', level: 'Advanced', club: 'Barça Padel' },
      { id: 'p2', name: 'Mateo Sánchez', level: 'Pro', club: 'Madrid Central' },
      { id: 'p3', name: 'Sofie Larsen', level: 'Advanced', club: 'Nordic Court' },
      { id: 'p4', name: 'Leo Martins', level: 'Intermediate', club: 'Lisbon Smash' },
    ],
    matches: [
      {
        id: 'm1',
        players: ['Lucia Romero / Sofie Larsen', 'Mateo Sánchez / Leo Martins'],
        status: 'scheduled',
        scheduledAt: '2025-01-18T10:30:00Z',
      },
    ],
  },
  {
    id: 'sp-night-series',
    name: 'Superpadel Night Series',
    location: 'Austin, USA',
    date: '2024-12-27T18:00:00Z',
    status: 'in-progress',
    surface: 'Indoor',
    description:
      'Electric evening matches with music, premium hospitality, and a fast-paced knockout format.',
    prizePool: '$7,500',
    organizer: 'Superpadel Events',
    slots: { total: 24, filled: 24 },
    players: [
      { id: 'p5', name: 'Chloe Nguyen', level: 'Advanced', club: 'ATX Padel Lab' },
      { id: 'p6', name: 'Diego Pérez', level: 'Advanced', club: 'Monterrey 360' },
      { id: 'p7', name: 'Mia Thompson', level: 'Intermediate', club: 'Barton Creek' },
      { id: 'p8', name: 'Marco Silva', level: 'Pro', club: 'Sao Padel' },
    ],
    matches: [
      {
        id: 'm2',
        players: ['Chloe Nguyen / Diego Pérez', 'Mia Thompson / Marco Silva'],
        score: '6-4, 3-6, 7-6',
        status: 'completed',
      },
      {
        id: 'm3',
        players: ['Chloe Nguyen / Marco Silva', 'Diego Pérez / Mia Thompson'],
        status: 'scheduled',
        scheduledAt: '2024-12-27T20:00:00Z',
      },
    ],
  },
  {
    id: 'sp-championship-finals',
    name: 'Superpadel Championship Finals',
    location: 'Stockholm, Sweden',
    date: '2024-11-09T11:00:00Z',
    status: 'completed',
    surface: 'Indoor',
    description:
      'Season finale featuring the top-ranked pairs, broadcast-ready experience, and player analytics.',
    prizePool: '€20,000',
    organizer: 'Superpadel Pro Circuit',
    slots: { total: 16, filled: 16 },
    players: [
      { id: 'p9', name: 'Elin Berg', level: 'Pro', club: 'Stockholm Elite' },
      { id: 'p10', name: 'Oscar Nilsson', level: 'Pro', club: 'Göteborg Central' },
      { id: 'p11', name: 'Nina Duarte', level: 'Advanced', club: 'Porto Arena' },
      { id: 'p12', name: 'Aron Klein', level: 'Advanced', club: 'Munich Court' },
    ],
    matches: [
      {
        id: 'm4',
        players: ['Elin Berg / Oscar Nilsson', 'Nina Duarte / Aron Klein'],
        score: '6-2, 6-3',
        status: 'completed',
      },
    ],
  },
];

