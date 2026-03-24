'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface CalendarSimpleProps {
  availableDays?: number[]
  selectedDay?: number
  selectedMonth?: number
  selectedYear?: number
  onDaySelect?: (day: number) => void
  onMonthChange?: (month: number, year: number) => void
  className?: string
}

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

function IconChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function CalendarSimple({
  availableDays = [],
  selectedDay,
  className,
  onDaySelect,
  onMonthChange,
}: CalendarSimpleProps) {
  const now = new Date()
  const [viewMonth, setViewMonth] = useState(now.getMonth())
  const [viewYear, setViewYear] = useState(now.getFullYear())

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()
  const isCurrentMonth = viewMonth === now.getMonth() && viewYear === now.getFullYear()
  const today = now.getDate()

  const monthName = new Date(viewYear, viewMonth).toLocaleDateString('pt-BR', { month: 'long' })
  const yearLabel = viewYear !== now.getFullYear() ? ` ${viewYear}` : ''

  const cells: (number | null)[] = []
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  function goToPrevMonth() {
    let m = viewMonth - 1
    let y = viewYear
    if (m < 0) { m = 11; y-- }
    setViewMonth(m)
    setViewYear(y)
    onMonthChange?.(m, y)
  }

  function goToNextMonth() {
    let m = viewMonth + 1
    let y = viewYear
    if (m > 11) { m = 0; y++ }
    setViewMonth(m)
    setViewYear(y)
    onMonthChange?.(m, y)
  }

  function goToToday() {
    setViewMonth(now.getMonth())
    setViewYear(now.getFullYear())
    onMonthChange?.(now.getMonth(), now.getFullYear())
  }

  return (
    <div className={cn('', className)}>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goToPrevMonth}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-plum/5 text-plum/50 hover:bg-plum/10 hover:text-plum transition-all active:scale-90"
          aria-label="Mês anterior"
        >
          <IconChevronLeft />
        </button>

        <button
          type="button"
          onClick={goToToday}
          className="flex items-center gap-2 group"
        >
          <span className="font-display text-lg font-medium text-plum capitalize">
            {monthName}{yearLabel}
          </span>
          {!isCurrentMonth && (
            <span className="text-[10px] text-mauve opacity-0 group-hover:opacity-100 transition-opacity">
              Hoje
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={goToNextMonth}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-plum/5 text-plum/50 hover:bg-plum/10 hover:text-plum transition-all active:scale-90"
          aria-label="Próximo mês"
        >
          <IconChevronRight />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="text-center text-[10px] font-semibold uppercase tracking-wider text-plum/30 py-1.5"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />
          const isAvailable = availableDays.includes(day)
          const isSelected = day === selectedDay && isCurrentMonth
          const isToday = day === today && isCurrentMonth

          return (
            <button
              key={day}
              type="button"
              disabled={!isAvailable}
              onClick={() => isAvailable && onDaySelect?.(day)}
              className={cn(
                'relative aspect-square rounded-xl flex items-center justify-center text-sm transition-all duration-200',
                'hover:scale-105 active:scale-95',
                isSelected
                  ? 'bg-gradient-to-br from-mauve to-mauve-dark text-white font-semibold shadow-sm'
                  : isToday && isAvailable
                    ? 'bg-mauve/10 text-mauve font-semibold ring-1 ring-mauve/30'
                    : isToday
                      ? 'text-mauve font-semibold'
                      : isAvailable
                        ? 'text-plum hover:bg-mauve/10 cursor-pointer'
                        : 'text-plum/15 cursor-default'
              )}
            >
              {day}
              {isAvailable && !isSelected && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-mauve/40" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
