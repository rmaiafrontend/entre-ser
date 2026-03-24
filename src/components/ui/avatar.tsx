'use client'

import { cn } from '@/lib/utils'

interface ESAvatarProps {
  src?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  isBordered?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
}

function getInitials(name?: string): string {
  if (!name) return '?'
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function ESAvatar({
  src,
  name,
  size = 'md',
  isBordered = false,
  className,
}: ESAvatarProps) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-plum-soft text-plum',
        sizeClasses[size],
        isBordered && 'ring-2 ring-mauve-soft',
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name ?? ''}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-medium text-plum">{getInitials(name)}</span>
      )}
    </span>
  )
}
