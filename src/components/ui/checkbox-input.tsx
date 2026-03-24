'use client'

import { cn } from '@/lib/utils'

interface CheckboxInputProps {
  label: string
  isSelected?: boolean
  onChange?: (isSelected: boolean) => void
  isDisabled?: boolean
  className?: string
}

export function CheckboxInput({
  label,
  isSelected,
  onChange,
  isDisabled,
  className,
}: CheckboxInputProps) {
  return (
    <label
      className={cn(
        'inline-flex cursor-pointer items-center gap-2 backdrop-blur-sm',
        isDisabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={isDisabled}
        className="h-4 w-4 rounded border-plum/30 text-mauve accent-mauve focus:ring-mauve"
      />
      <span className="text-sm text-plum/80">{label}</span>
    </label>
  )
}
