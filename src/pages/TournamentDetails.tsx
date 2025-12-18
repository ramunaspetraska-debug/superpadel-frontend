import {
  CalendarDaysIcon,
  MapPinIcon,
  UsersIcon,
  TrophyIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { fetchTournamentById } from '../services/api';
import type { Tournament } from '../types/tournament';
import { formatDate, formatStatus } from '../utils/format';

export const TournamentDetails = () => {
  const { id } = useParams();
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchTournamentById(id)
      .then(setTournament)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Card className="space-y-3 border-slate-800/70">
        <div className="h-7 w-1/3 rounded bg-slate-800/70" />
        <div className="h-4 w-1/2 rounded bg-slate-800/60" />
        <div className="h-32 rounded bg-slate-800/50" />
      </Card>
    );
  }

  if (!tournament) {
    return (
      <Card className="space-y-4 border-slate-800/70 text-center">
        <p className="text-lg font-semibold text-white">Tournament not found</p>
        <Button as={Link} to="/tournaments" variant="secondary" className="mx-auto">
          Back to tournaments
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-slate-400">{tournament.surface}</p>
          <h1 className="text-3xl font-bold text-white">{tournament.name}</h1>
          <p className="text-slate-300">{tournament.description}</p>
        </div>
        <Badge
          tone={
            tournament.status === 'completed'
              ? 'success'
              : tournament.status === 'upcoming'
                ? 'info'
                : 'warning'
          }
        >
          {formatStatus(tournament.status)}
        </Badge>
      </div>

      <Card className="grid gap-4 md:grid-cols-4">
        <div className="space-y-2 rounded-xl bg-slate-900/60 p-4">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <CalendarDaysIcon className="h-5 w-5 text-brand.secondary" />
            Date
          </div>
          <p className="text-lg font-semibold text-white">{formatDate(tournament.date)}</p>
        </div>
        <div className="space-y-2 rounded-xl bg-slate-900/60 p-4">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <MapPinIcon className="h-5 w-5 text-brand.secondary" />
            Location
          </div>
          <p className="text-lg font-semibold text-white">{tournament.location}</p>
        </div>
        <div className="space-y-2 rounded-xl bg-slate-900/60 p-4">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <UsersIcon className="h-5 w-5 text-brand.secondary" />
            Slots
          </div>
          <p className="text-lg font-semibold text-white">
            {tournament.slots.filled} / {tournament.slots.total}
          </p>
        </div>
        <div className="space-y-2 rounded-xl bg-slate-900/60 p-4">
          <div className="inline-flex items-center gap-2 text-slate-400">
            <TrophyIcon className="h-5 w-5 text-brand.secondary" />
            Prize
          </div>
          <p className="text-lg font-semibold text-white">{tournament.prizePool ?? 'TBD'}</p>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-4 border-slate-800/70">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-400">Players</p>
              <h2 className="text-xl font-semibold text-white">Roster</h2>
            </div>
            <Badge tone="info">{tournament.players.length} players</Badge>
          </div>
          <div className="space-y-3">
            {tournament.players.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-900/60 px-4 py-3"
              >
                <div>
                  <p className="font-semibold text-white">{player.name}</p>
                  <p className="text-sm text-slate-400">{player.club ?? 'Independent'}</p>
                </div>
                <Badge tone="neutral">{player.level}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 border-slate-800/70">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-400">Matches</p>
              <h2 className="text-xl font-semibold text-white">Schedule & results</h2>
            </div>
            <ShieldCheckIcon className="h-6 w-6 text-brand.secondary" />
          </div>
          <div className="space-y-3">
            {tournament.matches.map((match) => (
              <div
                key={match.id}
                className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{match.players[0]}</p>
                  <Badge tone={match.status === 'completed' ? 'success' : 'info'}>
                    {formatStatus(match.status)}
                  </Badge>
                </div>
                <p className="text-sm text-slate-300">vs {match.players[1]}</p>
                <p className="text-sm text-slate-400">
                  {match.score ?? formatDate(match.scheduledAt ?? tournament.date)}
                </p>
              </div>
            ))}
            {!tournament.matches.length && (
              <p className="text-sm text-slate-400">Matches will appear here once scheduled.</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

