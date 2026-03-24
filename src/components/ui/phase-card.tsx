import { cn } from '@/lib/utils'
import { ESCard, CardContent } from '@/components/ui/card'
import { type Phase, PHASE_LABELS } from '@/types'

interface PhaseCardProps {
  phase: Phase
  label: string
  description: string
  icon?: React.ReactNode
  isActive?: boolean
  className?: string
}

function PhaseCard({
  phase,
  label,
  description,
  icon,
  isActive = false,
  className,
}: PhaseCardProps) {
  return (
    <ESCard
      className={cn(
        isActive && 'border-l-4 border-l-mauve',
        className,
      )}
    >
      <CardContent className="gap-3 p-5">
        {/* Icon */}
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-plum-soft text-plum">
            {icon}
          </div>
        )}

        {/* Eyebrow label */}
        <span className="text-eyebrow">{label}</span>

        {/* Phase name */}
        <h3 className="font-display text-lg leading-snug text-plum">
          {PHASE_LABELS[phase]}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-plum/60">
          {description}
        </p>
      </CardContent>
    </ESCard>
  )
}

export { PhaseCard }
