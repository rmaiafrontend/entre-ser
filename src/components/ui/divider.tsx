import { cn } from '@/lib/utils'

interface ESDividerProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function ESDivider({ orientation = 'horizontal', className }: ESDividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'bg-plum/10',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
    />
  )
}
