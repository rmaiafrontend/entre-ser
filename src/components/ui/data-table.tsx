'use client'

import { cn } from '@/lib/utils'

interface DataTableColumn {
  key: string
  label: string
  align?: 'start' | 'center' | 'end'
}

interface DataTableProps {
  columns: DataTableColumn[]
  rows: Record<string, React.ReactNode>[]
  isStriped?: boolean
  emptyMessage?: string
  className?: string
}

const alignClasses: Record<string, string> = {
  start: 'text-left',
  center: 'text-center',
  end: 'text-right',
}

export function DataTable({
  columns,
  rows,
  isStriped = false,
  emptyMessage = 'Nenhum item encontrado',
  className,
}: DataTableProps) {
  return (
    <table className={cn('w-full', className)} aria-label="Tabela de dados">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className={cn(
                'border-b border-plum/10 px-4 py-3 font-medium text-sm text-plum/70',
                alignClasses[col.align ?? 'start'],
              )}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length}
              className="py-8 text-center text-plum/40"
            >
              {emptyMessage}
            </td>
          </tr>
        ) : (
          rows.map((row, index) => (
            <tr
              key={index}
              className={cn(
                isStriped && index % 2 === 1 && 'bg-plum/[0.03]',
              )}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    'border-b border-plum/5 px-4 py-3 text-sm',
                    alignClasses[col.align ?? 'start'],
                  )}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
