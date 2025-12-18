import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div
    className={clsx(
      'rounded-2xl border border-slate-800/80 bg-surface.light/70 p-5 shadow-xl shadow-black/10 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5',
      className,
    )}
  >
    {children}
  </div>
);

