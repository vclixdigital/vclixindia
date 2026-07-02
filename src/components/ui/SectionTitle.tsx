import { cn } from '../../lib/utils';

interface SectionTitleProps {
  tagline?: string;
  title: string;
  description?: string;
  highlight?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  tagline,
  title,
  description,
  highlight,
  alignment = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  const alignmentClasses = alignment === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleParts = title.split(highlight || '');

  return (
    <div className={cn('max-w-3xl mb-12 md:mb-16', alignmentClasses, className)}>
      {tagline && (
        <span
          className={cn(
            'inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4',
            light
              ? 'bg-white/20 text-white'
              : 'bg-primary-100 text-primary-700'
          )}
        >
          {tagline}
        </span>
      )}
      <h2
        className={cn(
          'text-display-md md:text-display-lg lg:text-display-xl font-bold mb-4',
          light ? 'text-white' : 'text-secondary-900'
        )}
      >
        {highlight && titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <span className={light ? 'text-primary-300' : 'gradient-text'}>{highlight}</span>
            {titleParts.slice(1).join(highlight)}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg md:text-xl leading-relaxed',
            light ? 'text-white/80' : 'text-secondary-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
