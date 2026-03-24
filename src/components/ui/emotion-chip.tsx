'use client'

import { cn } from '@/lib/utils'
import type { EmotionType } from '@/types'
import { EMOTION_LABELS, EMOTION_EMOJIS } from '@/types'

interface EmotionChipProps {
  emotion: EmotionType
  isSelected?: boolean
  onSelect?: (emotion: EmotionType) => void
  size?: 'sm' | 'md'
  className?: string
}

export function EmotionChip({
  emotion,
  isSelected = false,
  onSelect,
  size = 'md',
  className,
}: EmotionChipProps) {
  const emoji = EMOTION_EMOJIS[emotion]
  const label = EMOTION_LABELS[emotion]

  return (
    <button
      type="button"
      onClick={() => onSelect?.(emotion)}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full transition-colors duration-200',
        size === 'sm' && 'px-3 py-1 text-xs',
        size === 'md' && 'px-4 py-2 text-sm',
        isSelected
          ? 'bg-mauve text-white'
          : 'bg-white/50 backdrop-blur-sm border border-white/40 text-plum hover:bg-mauve-soft',
        className,
      )}
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </button>
  )
}
