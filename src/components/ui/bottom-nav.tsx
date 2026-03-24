'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface BottomNavItem {
  key: string
  label: string
  icon: React.ReactNode
  activeIcon: React.ReactNode
  href: string
}

interface BottomNavProps {
  items: BottomNavItem[]
  activeKey: string
  className?: string
}

export function BottomNav({ items, activeKey, className }: BottomNavProps) {
  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 z-50 w-full',
        className,
      )}
    >
      {/* Frosted glass bar */}
      <div className="mx-3 mb-3 rounded-2xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(45,24,64,0.12)]">
        <div className="flex items-center justify-around px-2 py-1.5">
          {items.map((item) => {
            const isActive = item.key === activeKey
            return (
              <Link
                key={item.key}
                href={item.href}
                className="relative flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-colors"
              >
                {/* Active pill indicator */}
                {isActive && (
                  <motion.div
                    layoutId="bottomNavIndicator"
                    className="absolute inset-0 rounded-xl bg-mauve/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <span
                  className={cn(
                    'relative z-10 transition-all duration-200 [&>svg]:h-[22px] [&>svg]:w-[22px]',
                    isActive ? 'text-mauve scale-105' : 'text-plum/35',
                  )}
                >
                  {isActive ? item.activeIcon : item.icon}
                </span>

                <span
                  className={cn(
                    'relative z-10 mt-0.5 text-[10px] leading-tight transition-all duration-200',
                    isActive ? 'text-mauve font-semibold' : 'text-plum/35 font-medium',
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
