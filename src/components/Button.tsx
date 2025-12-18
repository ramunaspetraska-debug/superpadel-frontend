import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
} & PropsWithChildren &
  ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = as ?? 'button';

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-brand.primary via-brand.secondary to-brand.accent text-slate-900 shadow-glow hover:brightness-110 focus-visible:outline-brand.secondary',
    secondary:
      'bg-surface.light text-slate-100 border border-slate-700 hover:border-brand.secondary focus-visible:outline-brand.secondary',
    ghost:
      'bg-transparent text-slate-200 hover:bg-slate-800/60 border border-slate-800 focus-visible:outline-brand.secondary',
  };

  return (
    <Component
      className={clsx(base, variants[variant], fullWidth && 'w-full', 'px-5 py-3', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

