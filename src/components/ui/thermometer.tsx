'use client'

import { cn } from '@/lib/utils'

interface ThermometerProps {
  value: number
  onChange?: (value: number) => void
  isReadOnly?: boolean
  showLabels?: boolean
  className?: string
}

function getSegmentColor(segment: number): string {
  if (segment <= 3) return 'bg-plum-soft'
  if (segment <= 5) return 'bg-mauve-soft'
  if (segment <= 6) return 'bg-mauve'
  if (segment <= 8) return 'bg-mauve-dark'
  return 'bg-red-alert'
}

export function Thermometer({
  value,
  onChange,
  isReadOnly = false,
  showLabels = false,
  className,
}: ThermometerProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex gap-1">
        {Array.from({ length: 10 }, (_, i) => {
          const segment = i + 1
          const isActive = segment <= value

          const segmentClasses = cn(
            'h-3 flex-1 transition-colors duration-200',
            i === 0 && 'rounded-l-full',
            i === 9 && 'rounded-r-full',
            isActive ? getSegmentColor(segment) : 'bg-plum/5',
            !isReadOnly && 'cursor-pointer hover:opacity-80',
          )

          return isReadOnly ? (
            <div key={segment} className={segmentClasses} />
          ) : (
            <button
              key={segment}
              type="button"
              aria-label={`Nível ${segment}`}
              onClick={() => onChange?.(segment)}
              className={segmentClasses}
            />
          )
        })}
      </div>

      {showLabels && (
        <div className="mt-1 flex">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i + 1}
              className={cn(
                'flex-1 text-center text-[10px]',
                i + 1 <= value ? 'text-plum/70' : 'text-plum/30',
              )}
            >
              {i + 1}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
