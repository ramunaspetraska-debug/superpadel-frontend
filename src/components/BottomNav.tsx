import {
  HomeIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const items = [
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'Tournaments', to: '/tournaments', icon: TrophyIcon },
  { name: 'Players', to: '/tournaments', icon: UserGroupIcon },
];

export const BottomNav = () => (
  <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/70 bg-surface/95 backdrop-blur md:hidden">
    <div className="mx-auto flex max-w-3xl justify-around px-4 py-3">
      {items.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className={({ isActive }) =>
            clsx(
              'flex flex-col items-center gap-1 text-xs font-semibold text-slate-400 transition-colors',
              isActive && 'text-white',
            )
          }
        >
          <item.icon className="h-6 w-6" />
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  </nav>
);

