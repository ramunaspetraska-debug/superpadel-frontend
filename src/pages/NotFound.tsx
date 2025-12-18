import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const NotFound = () => (
  <Card className="space-y-4 border-slate-800/70 text-center">
    <p className="text-sm uppercase tracking-wide text-slate-400">404</p>
    <h1 className="text-2xl font-bold text-white">Page not found</h1>
    <p className="text-slate-300">The page you’re looking for doesn’t exist. Back to play?</p>
    <div className="flex justify-center">
      <Button as={Link} to="/" variant="secondary">
        <ArrowLeftIcon className="h-4 w-4" />
        Go home
      </Button>
    </div>
  </Card>
);

