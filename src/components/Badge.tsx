import clsx from 'clsx';
import type { ReactNode } from 'react';

type BadgeTone = 'success' | 'warning' | 'info' | 'neutral';

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
}

export const Badge = ({ tone = 'neutral', children }: BadgeProps) => {
  const styles: Record<BadgeTone, string> = {
    success: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/40',
    warning: 'bg-amber-500/15 text-amber-200 border-amber-500/40',
    info: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/40',
    neutral: 'bg-slate-700/50 text-slate-200 border-slate-600',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        styles[tone],
      )}
    >
      {children}
    </span>
  );
};

