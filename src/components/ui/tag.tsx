'use client'

import { cn } from '@/lib/utils'

interface TagProps {
  label: string
  variant?: 'primary' | 'plum' | 'muted'
  size?: 'sm' | 'md'
  isCloseable?: boolean
  onClose?: () => void
  className?: string
}

const variantStyles: Record<NonNullable<TagProps['variant']>, string> = {
  primary: 'bg-mauve/10 backdrop-blur-sm text-mauve',
  plum: 'bg-plum/10 text-plum',
  muted: 'bg-cream-mid/70 backdrop-blur-sm text-plum/70',
}

const sizeStyles: Record<NonNullable<TagProps['size']>, string> = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export function Tag({
  label,
  variant = 'primary',
  size = 'sm',
  isCloseable = false,
  onClose,
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {label}
      {isCloseable && onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label={`Remover ${label}`}
          className="ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-current opacity-60 transition-opacity hover:opacity-100"
        >
          &times;
        </button>
      )}
    </span>
  )
}
