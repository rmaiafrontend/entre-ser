import { cn } from '@/lib/utils'
import { ESCard, CardContent } from '@/components/ui/card'
import { Tag } from '@/components/ui/tag'
import { ESProgressBar } from '@/components/ui/progress-bar'

interface ProgressCardProps {
  title: string
  description?: string
  progress: number
  icon?: React.ReactNode
  isRecommended?: boolean
  className?: string
}

function ProgressCard({
  title,
  description,
  progress,
  icon,
  isRecommended = false,
  className,
}: ProgressCardProps) {
  return (
    <ESCard className={cn('p-0', className)}>
      <CardContent className="gap-3 p-5">
        {/* Top row: icon + recommended tag */}
        <div className="flex items-start justify-between">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-plum-soft text-plum">
              {icon}
            </div>
          )}
          {isRecommended && (
            <Tag label="Recomendada" variant="primary" size="sm" />
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl leading-snug text-plum">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm leading-relaxed text-plum/60">
            {description}
          </p>
        )}

        {/* Progress bar */}
        <ESProgressBar value={progress} showValueLabel />
      </CardContent>
    </ESCard>
  )
}

export { ProgressCard }
