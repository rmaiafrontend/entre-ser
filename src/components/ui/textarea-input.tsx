'use client'

import { cn } from '@/lib/utils'

interface TextareaInputProps {
  label: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  errorMessage?: string
  isRequired?: boolean
  isDisabled?: boolean
  minRows?: number
  maxRows?: number
  className?: string
}

export function TextareaInput({
  label,
  placeholder,
  value,
  onChange,
  errorMessage,
  isRequired,
  isDisabled,
  minRows = 3,
  className,
}: TextareaInputProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="text-sm font-medium text-plum/70">
        {label}
        {isRequired && <span className="ml-0.5 text-red-alert">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={isRequired}
        disabled={isDisabled}
        rows={minRows}
        className={cn(
          'w-full resize-y rounded-lg border bg-white/60 backdrop-blur-md px-3 py-2 text-sm text-plum outline-none transition-colors',
          'border-cream-dark focus:border-mauve focus:ring-2 focus:ring-mauve/20',
          'placeholder:text-plum/30',
          errorMessage && 'border-red-alert',
          isDisabled && 'cursor-not-allowed opacity-50',
        )}
      />
      {errorMessage && (
        <span className="text-xs text-red-alert">{errorMessage}</span>
      )}
    </div>
  )
}
