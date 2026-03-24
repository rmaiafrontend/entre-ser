import { cn } from '@/lib/utils'

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'full'
  children: React.ReactNode
  className?: string
}

const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
  sm: 'max-w-lg mx-auto px-4',
  md: 'max-w-2xl mx-auto px-4',
  lg: 'max-w-5xl mx-auto px-6',
  full: 'w-full px-4',
}

export function Container({ size = 'lg', children, className }: ContainerProps) {
  return (
    <div className={cn(sizeClasses[size], className)}>
      {children}
    </div>
  )
}
