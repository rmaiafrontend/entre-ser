import { cn } from '@/lib/utils'

interface ContentCardProps {
  title: string
  type: 'artigo' | 'video' | 'audio'
  duration?: string
  phase?: string
  imageUrl?: string
  isFavorited?: boolean
  variant?: 'default' | 'compact'
  className?: string
}

const TYPE_CONFIG: Record<ContentCardProps['type'], { label: string; gradient: string }> = {
  artigo: { label: 'Artigo', gradient: 'from-plum-soft to-mauve-ghost' },
  video: { label: 'Vídeo', gradient: 'from-mauve-ghost to-plum-soft' },
  audio: { label: 'Áudio', gradient: 'from-cream-mid to-plum-soft' },
}

function TypeIcon({ type }: { type: ContentCardProps['type'] }) {
  const cls = 'text-plum/30'
  if (type === 'video') {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className={cls}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
        <path d="M10 8.5v7l5.5-3.5-5.5-3.5z" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'audio') {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className={cls}>
        <path d="M12 3v18m-4-13v8m-4-4v0m8-7v14m4-10v6m4-3v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className={cls}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1" />
      <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={filled ? 'text-mauve' : 'text-white/70'}>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function ContentCard({
  title,
  type,
  duration,
  phase,
  imageUrl,
  isFavorited = false,
  variant = 'default',
  className,
}: ContentCardProps) {
  const config = TYPE_CONFIG[type]

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'flex items-center gap-3 rounded-2xl p-3',
          'bg-white/80 backdrop-blur-xl border border-white/40',
          'shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]',
          'hover:scale-[1.01] active:scale-[0.99] transition-all duration-300',
          className,
        )}
      >
        <div className={cn(
          'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br',
          config.gradient,
        )}>
          <TypeIcon type={type} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">{config.label}</p>
          <p className="font-display text-[15px] leading-snug text-plum mt-0.5 line-clamp-2">{title}</p>
          {duration && <p className="text-xs text-plum/40 mt-1">{duration}</p>}
        </div>
        {isFavorited && (
          <HeartIcon filled />
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[22px]',
        'bg-white/80 backdrop-blur-xl border border-white/40',
        'hover:scale-[1.01] transition-all duration-300',
        className,
      )}
    >
      {/* Image / Gradient placeholder */}
      <div className={cn(
        'relative aspect-[2/1] w-full overflow-hidden',
        imageUrl ? '' : `bg-gradient-to-br ${config.gradient}`,
      )}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <TypeIcon type={type} />
          </div>
        )}

        {/* Top overlay with type badge + heart */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <span className="rounded-full bg-white/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-plum">
            {config.label}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 backdrop-blur-sm">
            <HeartIcon filled={isFavorited} />
          </span>
        </div>

        {/* Duration badge bottom-right */}
        {duration && (
          <div className="absolute bottom-3 right-3">
            <span className="rounded-full bg-black/20 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white">
              {duration}
            </span>
          </div>
        )}
      </div>

      {/* Text content — fixed height for uniform cards */}
      <div className="px-3.5 pb-3.5 pt-3 h-[80px] flex flex-col justify-between overflow-hidden">
        <h3 className="font-display text-base leading-tight text-plum line-clamp-2">
          {title}
        </h3>
        <p className="text-[11px] text-plum/40">{phase || '\u00A0'}</p>
      </div>
    </div>
  )
}

export { ContentCard }
