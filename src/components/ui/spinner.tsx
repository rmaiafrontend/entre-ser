import { cn } from '@/lib/utils'

interface ESSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
}

export function ESSpinner({ size = 'md', label, className }: ESSpinnerProps) {
  return (
    <div className={cn('inline-flex flex-col items-center gap-2', className)}>
      <svg
        className={cn('animate-spin text-mauve', sizeClasses[size])}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {label && <span className="text-sm text-plum/70">{label}</span>}
    </div>
  )
}
