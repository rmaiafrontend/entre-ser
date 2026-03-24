import { cn } from '@/lib/utils'

interface ListItemProps {
  children: React.ReactNode
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  isClickable?: boolean
  className?: string
}

export function ListItem({
  children,
  startContent,
  endContent,
  isClickable = false,
  className,
}: ListItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 py-3 px-4 border-b border-plum/5',
        isClickable && 'cursor-pointer hover:bg-plum/5 transition-colors',
        className,
      )}
    >
      {startContent && <div className="shrink-0">{startContent}</div>}
      <div className="flex-1 min-w-0">{children}</div>
      {endContent && <div className="shrink-0">{endContent}</div>}
    </div>
  )
}
