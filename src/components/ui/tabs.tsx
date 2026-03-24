'use client'

import { cn } from '@/lib/utils'

interface ESTabItem {
  key: string
  label: string
  content?: React.ReactNode
}

interface ESTabsProps {
  items: ESTabItem[]
  selectedKey?: string
  onSelectionChange?: (key: string) => void
  variant?: 'underlined' | 'solid'
  className?: string
}

export function ESTabs({
  items,
  selectedKey,
  onSelectionChange,
  variant = 'underlined',
  className,
}: ESTabsProps) {
  const activeKey = selectedKey ?? items[0]?.key

  return (
    <div className={cn(className)}>
      <div
        role="tablist"
        aria-label="Navegação por abas"
        className={cn(
          'flex',
          variant === 'underlined' && 'gap-6 border-b border-plum/10',
          variant === 'solid' && 'gap-1 rounded-xl bg-plum/5 p-1',
        )}
      >
        {items.map((item) => {
          const isActive = item.key === activeKey
          return (
            <button
              key={item.key}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => onSelectionChange?.(item.key)}
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                variant === 'underlined' && [
                  'border-b-2 px-1 pb-3 pt-1',
                  isActive
                    ? 'border-mauve text-mauve'
                    : 'border-transparent text-plum/50 hover:text-plum/70',
                ],
                variant === 'solid' && [
                  'rounded-lg px-4 py-2',
                  isActive
                    ? 'bg-white text-plum shadow-sm'
                    : 'text-plum/50 hover:text-plum/70',
                ],
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {items.map((item) => {
        if (item.key !== activeKey || !item.content) return null
        return (
          <div key={item.key} role="tabpanel" className="pt-4">
            {item.content}
          </div>
        )
      })}
    </div>
  )
}
