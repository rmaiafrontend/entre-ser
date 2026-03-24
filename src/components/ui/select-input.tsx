'use client'

import { cn } from '@/lib/utils'

interface SelectOption {
  key: string
  label: string
}

interface SelectInputProps {
  label: string
  placeholder?: string
  options: SelectOption[]
  selectedKey?: string
  onChange?: (key: string) => void
  errorMessage?: string
  isRequired?: boolean
  isDisabled?: boolean
  className?: string
}

export function SelectInput({
  label,
  placeholder,
  options,
  selectedKey,
  onChange,
  errorMessage,
  isRequired,
  isDisabled,
  className,
}: SelectInputProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="text-sm font-medium text-plum/70">
        {label}
        {isRequired && <span className="ml-0.5 text-red-alert">*</span>}
      </label>
      <select
        value={selectedKey ?? ''}
        onChange={(e) => onChange?.(e.target.value)}
        required={isRequired}
        disabled={isDisabled}
        className={cn(
          'w-full rounded-lg border bg-white/60 backdrop-blur-md px-3 py-2 text-sm text-plum outline-none transition-colors',
          'border-cream-dark focus:border-mauve focus:ring-2 focus:ring-mauve/20',
          errorMessage && 'border-red-alert',
          isDisabled && 'cursor-not-allowed opacity-50',
          !selectedKey && 'text-plum/30',
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <span className="text-xs text-red-alert">{errorMessage}</span>
      )}
    </div>
  )
}
