import { CalendarDaysIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import type { Tournament } from '../types/tournament';
import { formatDate, formatStatus } from '../utils/format';
import { Badge } from './Badge';
import { Button } from './Button';
import { Card } from './Card';

const statusToneMap: Record<Tournament['status'], 'info' | 'warning' | 'success'> = {
  upcoming: 'info',
  'in-progress': 'warning',
  completed: 'success',
};

export const TournamentCard = ({ tournament }: { tournament: Tournament }) => {
  const filledPercent = Math.round((tournament.slots.filled / tournament.slots.total) * 100);

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-slate-400">{tournament.surface}</p>
          <h3 className="text-xl font-semibold text-white">{tournament.name}</h3>
        </div>
        <Badge tone={statusToneMap[tournament.status]}>{formatStatus(tournament.status)}</Badge>
      </div>

      <p className="text-sm text-slate-300">{tournament.description}</p>

      <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
        <div className="inline-flex items-center gap-2">
          <CalendarDaysIcon className="h-5 w-5 text-brand.secondary" />
          {formatDate(tournament.date)}
        </div>
        <div className="inline-flex items-center gap-2">
          <MapPinIcon className="h-5 w-5 text-brand.secondary" />
          {tournament.location}
        </div>
        <div className="inline-flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-brand.secondary" />
          {tournament.slots.filled} / {tournament.slots.total} spots
        </div>
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-full rounded-full bg-slate-800">
            <span
              className="block h-2 rounded-full bg-gradient-to-r from-brand.secondary to-brand.accent"
              style={{ width: `${filledPercent}%` }}
            />
          </span>
          <span className="text-xs text-slate-400">{filledPercent}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">
          Hosted by <span className="text-slate-200">{tournament.organizer}</span>
        </span>
        <Button as={Link} to={`/tournaments/${tournament.id}`} variant="secondary" className="text-sm">
          View details
        </Button>
      </div>
    </Card>
  );
};

