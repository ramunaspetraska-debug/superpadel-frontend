import {
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { mockTournaments } from '../data/mockTournaments';
import { formatDate } from '../utils/format';

const steps = [
  {
    title: 'Create your event',
    description: 'Set rules, schedule, draw formats, and brand your tournament in minutes.',
    icon: SparklesIcon,
  },
  {
    title: 'Invite & verify players',
    description: 'Share a link, manage signups, seed brackets, and collect confirmations.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Publish live',
    description: 'Share live scores, courts, and results instantly with players and fans.',
    icon: PlayCircleIcon,
  },
];

export const Home = () => {
  const highlight = mockTournaments[0];

  return (
    <div className="space-y-10 md:space-y-16">
      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            Superpadel Platform
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Run premium padel tournaments with zero friction.
          </h1>
          <p className="text-lg text-slate-300">
            Design brackets, track scores, and host immersive experiences with beautiful, mobile-first
            experiences built for players, clubs, and sponsors.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as={Link} to="/tournaments">
              Create Tournament
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/tournaments" variant="secondary">
              Join Tournament
            </Button>
          </div>
          <div className="flex gap-6 text-sm text-slate-300">
            <div>
              <p className="text-2xl font-semibold text-white">24</p>
              <p className="text-slate-400">Active players in highlight</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">3</p>
              <p className="text-slate-400">Live tournaments this week</p>
            </div>
          </div>
        </div>

        <Card className="relative overflow-hidden border-slate-700/80">
          <div className="absolute inset-0 bg-gradient-to-br from-brand.primary/10 via-brand.accent/5 to-transparent" />
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-wide text-slate-400">Upcoming spotlight</p>
            <h3 className="text-2xl font-semibold text-white">{highlight.name}</h3>
            <p className="text-slate-300">{highlight.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-slate-900/60 p-4">
                <p className="text-slate-400">Location</p>
                <p className="font-semibold text-white">{highlight.location}</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 p-4">
                <p className="text-slate-400">Date</p>
                <p className="font-semibold text-white">{formatDate(highlight.date)}</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 p-4">
                <p className="text-slate-400">Surface</p>
                <p className="font-semibold text-white">{highlight.surface}</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 p-4">
                <p className="text-slate-400">Prize pool</p>
                <p className="font-semibold text-white">{highlight.prizePool}</p>
              </div>
            </div>
            <Button as={Link} to={`/tournaments/${highlight.id}`} variant="secondary" className="w-full">
              View Tournament
            </Button>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-400">How it works</p>
            <h2 className="text-2xl font-semibold text-white">A seamless player-first flow</h2>
          </div>
          <Link to="/tournaments" className="hidden text-sm font-semibold text-brand.secondary md:inline">
            Explore tournaments
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="space-y-3 border-slate-800/70">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/70">
                  <step.icon className="h-5 w-5 text-brand.secondary" />
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-slate-300">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

