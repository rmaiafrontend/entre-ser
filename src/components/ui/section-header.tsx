import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {eyebrow && (
        <span className="text-eyebrow">{eyebrow}</span>
      )}

      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-medium text-plum">
          {title}
        </h2>
        {action && <div className="shrink-0">{action}</div>}
      </div>

      {description && (
        <p className="text-sm text-plum/60">{description}</p>
      )}
    </div>
  )
}
