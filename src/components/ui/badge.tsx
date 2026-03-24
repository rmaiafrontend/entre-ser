import { cn } from '@/lib/utils'

interface ESBadgeProps {
  content?: string | number
  color?: 'primary' | 'danger' | 'success' | 'warning'
  variant?: 'solid' | 'flat'
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  children: React.ReactNode
  className?: string
}

const colorStyles: Record<NonNullable<ESBadgeProps['color']>, Record<NonNullable<ESBadgeProps['variant']>, string>> = {
  primary: {
    solid: 'bg-mauve text-white',
    flat: 'bg-mauve/15 text-mauve',
  },
  danger: {
    solid: 'bg-red-alert text-white',
    flat: 'bg-red-alert/15 text-red-alert',
  },
  success: {
    solid: 'bg-success-dark text-white',
    flat: 'bg-success-dark/15 text-success-dark',
  },
  warning: {
    solid: 'bg-amber-500 text-white',
    flat: 'bg-amber-500/15 text-amber-700',
  },
}

const placementClasses: Record<NonNullable<ESBadgeProps['placement']>, string> = {
  'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
}

export function ESBadge({
  content,
  color = 'primary',
  variant = 'solid',
  placement = 'top-right',
  children,
  className,
}: ESBadgeProps) {
  return (
    <span className={cn('relative inline-flex', className)}>
      {children}
      {content !== undefined && (
        <span
          className={cn(
            'absolute z-10 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold leading-none',
            colorStyles[color][variant],
            placementClasses[placement],
          )}
        >
          {content}
        </span>
      )}
    </span>
  )
}
