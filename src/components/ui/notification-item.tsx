import { cn } from '@/lib/utils'

interface NotificationItemProps {
  title: string
  description?: string
  timestamp: string
  icon?: React.ReactNode
  isUnread?: boolean
  className?: string
}

export function NotificationItem({
  title,
  description,
  timestamp,
  icon,
  isUnread = false,
  className,
}: NotificationItemProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 py-3 px-4 transition-colors hover:bg-plum/5',
        className,
      )}
    >
      {isUnread && (
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mauve" />
      )}

      {icon && <div className="mt-0.5 shrink-0">{icon}</div>}

      <div className="min-w-0 flex-1">
        <p className="font-medium text-plum">{title}</p>
        {description && (
          <p className="mt-0.5 text-sm text-plum/60">{description}</p>
        )}
        <span className="mt-1 block text-xs text-plum/40">{timestamp}</span>
      </div>
    </div>
  )
}
