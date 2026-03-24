import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BreadcrumbItemData {
  label: string
  href?: string
}

interface ESBreadcrumbProps {
  items: BreadcrumbItemData[]
  className?: string
}

export function ESBreadcrumb({ items, className }: ESBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2 text-sm', className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="inline-flex items-center gap-2">
            {index > 0 && (
              <span className="text-plum/30" aria-hidden="true">/</span>
            )}
            {isLast || !item.href ? (
              <span className={cn(isLast ? 'font-medium text-plum' : 'text-plum/60')}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-plum/60 transition-colors hover:text-plum"
              >
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
