'use client'

import { cn } from '@/lib/utils'
import { type Phase, PHASE_LABELS } from '@/types'

interface PhaseSelectorProps {
  value?: Phase
  onChange?: (phase: Phase) => void
  className?: string
}

const PHASES = Object.keys(PHASE_LABELS) as Phase[]

export function PhaseSelector({ value, onChange, className }: PhaseSelectorProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {PHASES.map((phase) => {
        const isSelected = value === phase

        return (
          <button
            key={phase}
            type="button"
            onClick={() => onChange?.(phase)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
              isSelected
                ? 'bg-mauve text-white'
                : 'border border-plum/10 bg-mauve-ghost text-plum hover:border-mauve/30',
            )}
          >
            {PHASE_LABELS[phase]}
          </button>
        )
      })}
    </div>
  )
}
