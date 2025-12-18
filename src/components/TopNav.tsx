import { BoltIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Button } from './Button';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Tournaments', to: '/tournaments' },
];

export const TopNav = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand.primary via-brand.secondary to-brand.accent text-slate-900 shadow-glow">
            <BoltIcon className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <span className="block text-sm text-slate-400">Superpadel</span>
            <span className="block text-base font-bold text-white">Tournament Hub</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:text-white',
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="hidden md:inline-flex" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </Button>
          <Button as={Link} to="/tournaments">
            Create Tournament
          </Button>
        </div>
      </div>
    </header>
  );
};

