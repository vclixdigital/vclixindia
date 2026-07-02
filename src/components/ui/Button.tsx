import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  to?: string;
  external?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  to,
  external,
  fullWidth,
  loading,
  disabled,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-soft-md active:scale-[0.98]',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 active:scale-[0.98]',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-soft hover:shadow-soft-md active:scale-[0.98]',
    ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 active:scale-[0.98]',
    white: 'bg-white text-primary-700 hover:bg-primary-50 shadow-soft hover:shadow-soft-md active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const styles = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={cn('w-5 h-5', size === 'sm' && 'w-4 h-4', size === 'lg' && 'w-6 h-6')} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={cn('w-5 h-5', size === 'sm' && 'w-4 h-4', size === 'lg' && 'w-6 h-6')} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={styles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
          Loading...
        </span>
      ) : (
        content
      )}
    </button>
  );
}
