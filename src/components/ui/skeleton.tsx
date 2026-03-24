import { cn } from '@/lib/utils'

interface ESSkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  width?: string | number
  height?: string | number
  className?: string
}

const variantClasses: Record<NonNullable<ESSkeletonProps['variant']>, string> = {
  text: 'rounded-md',
  circular: 'rounded-full',
  rectangular: 'rounded-md',
  card: 'rounded-[22px]',
}

const defaultDimensions: Record<NonNullable<ESSkeletonProps['variant']>, { width?: string; height?: string }> = {
  text: { width: '100%', height: '1rem' },
  circular: { width: '3rem', height: '3rem' },
  rectangular: { width: '100%', height: '6rem' },
  card: { width: '100%', height: '12rem' },
}

export function ESSkeleton({
  variant = 'text',
  width,
  height,
  className,
}: ESSkeletonProps) {
  const defaults = defaultDimensions[variant]

  const resolvedWidth = width ?? defaults.width
  const resolvedHeight = height ?? defaults.height

  return (
    <div
      className={cn(
        'animate-shimmer',
        variantClasses[variant],
        className,
      )}
      style={{
        width: typeof resolvedWidth === 'number' ? `${resolvedWidth}px` : resolvedWidth,
        height: typeof resolvedHeight === 'number' ? `${resolvedHeight}px` : resolvedHeight,
      }}
    />
  )
}
