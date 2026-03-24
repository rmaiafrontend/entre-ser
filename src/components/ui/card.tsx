import { cn } from '@/lib/utils'

interface ESCardProps {
  variant?: 'default' | 'dark' | 'ghost'
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<NonNullable<ESCardProps['variant']>, string> = {
  default: 'bg-white/80 backdrop-blur-xl border border-white/40 shadow-[var(--shadow-card)] rounded-[22px] hover:scale-[1.01] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300',
  dark: 'bg-plum text-cream rounded-[22px]',
  ghost: 'bg-transparent border-none shadow-none rounded-[22px]',
}

function ESCard({ variant = 'default', children, className }: ESCardProps) {
  return (
    <div className={cn(variantStyles[variant], className)}>
      {children}
    </div>
  )
}

interface CardSectionProps {
  children: React.ReactNode
  className?: string
}

function CardHeader({ children, className }: CardSectionProps) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)}>{children}</div>
}

function CardContent({ children, className }: CardSectionProps) {
  return <div className={cn('flex flex-col p-6 pt-0', className)}>{children}</div>
}

function CardFooter({ children, className }: CardSectionProps) {
  return <div className={cn('flex items-center p-6 pt-0', className)}>{children}</div>
}

export { ESCard, CardHeader, CardContent, CardFooter }
