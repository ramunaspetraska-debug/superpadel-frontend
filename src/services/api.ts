import axios from 'axios';
import { mockTournaments } from '../data/mockTournaments';
import type { Tournament } from '../types/tournament';

const baseURL = import.meta.env.VITE_API_URL || '';
const shouldUseApi = Boolean(baseURL);

export const api = axios.create({
  baseURL: baseURL || 'https://api.superpadel.local',
  headers: {
    'Content-Type': 'application/json',
  },
});

const withMockDelay = async <T>(value: T, delay = 250): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), delay));

export const fetchTournaments = async (): Promise<Tournament[]> => {
  if (shouldUseApi) {
    try {
      const { data } = await api.get<Tournament[]>('/tournaments');
      return data;
    } catch (error) {
      console.warn('Falling back to mock tournaments', error);
    }
  }

  return withMockDelay(mockTournaments);
};

export const fetchTournamentById = async (id: string): Promise<Tournament | null> => {
  const tournaments = await fetchTournaments();
  return tournaments.find((tournament) => tournament.id === id) ?? null;
};

