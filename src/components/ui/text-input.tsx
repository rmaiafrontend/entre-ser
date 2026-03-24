'use client'

import { cn } from '@/lib/utils'

interface TextInputProps {
  label: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  value?: string
  onChange?: (value: string) => void
  errorMessage?: string
  isRequired?: boolean
  isDisabled?: boolean
  startContent?: React.ReactNode
  className?: string
}

export function TextInput({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  errorMessage,
  isRequired,
  isDisabled,
  startContent,
  className,
}: TextInputProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="text-sm font-medium text-plum/70">
        {label}
        {isRequired && <span className="ml-0.5 text-red-alert">*</span>}
      </label>
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg border px-3 py-2 bg-white/60 backdrop-blur-md transition-colors',
          'border-cream-dark focus-within:border-mauve focus-within:ring-2 focus-within:ring-mauve/20',
          errorMessage && 'border-red-alert',
          isDisabled && 'cursor-not-allowed opacity-50',
        )}
      >
        {startContent && <span className="shrink-0 text-plum/40">{startContent}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={isRequired}
          disabled={isDisabled}
          className="w-full bg-transparent text-sm text-plum outline-none placeholder:text-plum/30"
        />
      </div>
      {errorMessage && (
        <span className="text-xs text-red-alert">{errorMessage}</span>
      )}
    </div>
  )
}
