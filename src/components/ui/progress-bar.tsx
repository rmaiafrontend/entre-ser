import { cn } from '@/lib/utils'

interface ESProgressBarProps {
  value: number
  label?: string
  showValueLabel?: boolean
  size?: 'sm' | 'md'
  color?: 'primary' | 'success'
  className?: string
}

const sizeClasses = {
  sm: 'h-1.5',
  md: 'h-2.5',
}

const colorClasses = {
  primary: 'bg-mauve',
  success: 'bg-success-dark',
}

export function ESProgressBar({
  value,
  label,
  showValueLabel = false,
  size = 'md',
  color = 'primary',
  className,
}: ESProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <div className={cn('w-full', className)}>
      {(label || showValueLabel) && (
        <div className="mb-1.5 flex items-center justify-between">
          {label && (
            <span className="text-sm font-medium text-plum/70">{label}</span>
          )}
          {showValueLabel && (
            <span className="text-sm text-plum/70">{Math.round(clampedValue)}%</span>
          )}
        </div>
      )}
      <div
        className={cn('w-full overflow-hidden rounded-full bg-cream-mid', sizeClasses[size])}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn('h-full rounded-full transition-all duration-300', colorClasses[color])}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  )
}
