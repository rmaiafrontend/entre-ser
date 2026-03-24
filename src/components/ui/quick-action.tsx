import Link from 'next/link'
import { cn } from '@/lib/utils'

interface QuickActionProps {
  icon: React.ReactNode
  label: string
  href: string
  className?: string
}

export function QuickAction({ icon, label, href, className }: QuickActionProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center justify-center gap-2 p-4 rounded-[22px]',
        'bg-white/80 backdrop-blur-xl border border-white/40',
        'shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]',
        'hover:scale-[1.02] active:scale-[0.97] transition-all duration-300',
        'min-h-[88px]',
        className
      )}
    >
      <span className="text-mauve">{icon}</span>
      <span className="text-xs font-medium text-plum">{label}</span>
    </Link>
  )
}
