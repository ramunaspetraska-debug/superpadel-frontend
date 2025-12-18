export type TournamentStatus = 'upcoming' | 'in-progress' | 'completed';

export type MatchStatus = 'scheduled' | 'completed';

export interface Player {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';
  club?: string;
}

export interface Match {
  id: string;
  players: string[];
  score?: string;
  status: MatchStatus;
  scheduledAt?: string;
}

export interface Tournament {
  id: string;
  name: string;
  location: string;
  date: string;
  status: TournamentStatus;
  surface: 'Indoor' | 'Outdoor';
  description: string;
  prizePool?: string;
  organizer?: string;
  slots: {
    total: number;
    filled: number;
  };
  players: Player[];
  matches: Match[];
}

