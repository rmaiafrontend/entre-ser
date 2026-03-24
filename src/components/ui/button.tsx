'use client'

import { cn } from '@/lib/utils'

interface ESButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  isDisabled?: boolean
  fullWidth?: boolean
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  onPress?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const variantStyles: Record<NonNullable<ESButtonProps['variant']>, string> = {
  primary: 'bg-mauve text-white hover:bg-gradient-to-r hover:from-mauve hover:to-mauve-dark active:bg-mauve-dark active:scale-[0.97]',
  secondary: 'border border-plum text-plum bg-transparent hover:bg-plum/5 active:bg-plum/10 active:scale-[0.97]',
  ghost: 'text-mauve bg-transparent hover:bg-mauve/10 active:bg-mauve/15 active:scale-[0.97]',
  destructive: 'bg-red-alert text-white hover:bg-red-alert/90 active:bg-red-alert/80 active:scale-[0.97]',
}

const sizeStyles: Record<NonNullable<ESButtonProps['size']>, string> = {
  sm: 'h-8 px-4 text-sm gap-1.5',
  md: 'h-10 px-5 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
}

export function ESButton({
  variant = 'primary',
  size = 'md',
  isLoading,
  isDisabled,
  fullWidth,
  startContent,
  endContent,
  onPress,
  children,
  className,
  type = 'button',
}: ESButtonProps) {
  return (
    <button
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onPress}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className,
      )}
    >
      {isLoading ? (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {startContent}
          {children}
          {endContent}
        </>
      )}
    </button>
  )
}
