import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { TournamentCard } from '../components/TournamentCard';
import { fetchTournaments } from '../services/api';
import type { Tournament } from '../types/tournament';

export const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTournaments()
      .then(setTournaments)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400">Events</p>
          <h1 className="text-3xl font-bold text-white">Tournaments</h1>
          <p className="text-slate-300">Explore active, upcoming, and past Superpadel events.</p>
        </div>
        <Button>Host a tournament</Button>
      </div>

      {loading ? (
        <Card className="animate-pulse border-slate-800/70">
          <div className="h-6 w-1/3 rounded bg-slate-800" />
          <div className="mt-4 h-4 w-2/3 rounded bg-slate-800" />
          <div className="mt-2 h-4 w-1/2 rounded bg-slate-800" />
        </Card>
      ) : tournaments.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      ) : (
        <Card className="border-slate-800/70 text-center text-slate-300">
          No tournaments available yet. Create the first one!
        </Card>
      )}
    </div>
  );
};

