'use client'

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  variant?: 'info' | 'success' | 'warning' | 'error'
  isVisible: boolean
  onClose?: () => void
  className?: string
}

const variantStyles: Record<NonNullable<ToastProps['variant']>, string> = {
  info: 'bg-plum/90 backdrop-blur-lg text-cream',
  success: 'bg-success-dark/90 backdrop-blur-lg text-white',
  warning: 'bg-[var(--warning)] text-white',
  error: 'bg-red-alert/90 backdrop-blur-lg text-white',
}

export function Toast({
  message,
  variant = 'info',
  isVisible,
  onClose,
  className,
}: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
          className={cn(
            'fixed bottom-8 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-3 rounded-full px-6 py-3 shadow-modal',
            variantStyles[variant],
            className,
          )}
        >
          <span className="text-sm font-medium">{message}</span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar notificacao"
              className="ml-1 shrink-0 text-lg leading-none opacity-70 transition-opacity hover:opacity-100"
            >
              &times;
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Context + Provider + Hook ─────────────────────────────────── */

interface ToastContextValue {
  showToast: (message: string, variant?: ToastProps['variant']) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<{
    message: string
    variant: NonNullable<ToastProps['variant']>
    isVisible: boolean
  }>({
    message: '',
    variant: 'info',
    isVisible: false,
  })

  const showToast = useCallback(
    (message: string, variant: ToastProps['variant'] = 'info') => {
      setToast({ message, variant, isVisible: true })

      setTimeout(() => {
        setToast((prev) => ({ ...prev, isVisible: false }))
      }, 4000)
    },
    [],
  )

  const handleClose = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }))
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toast.message}
        variant={toast.variant}
        isVisible={toast.isVisible}
        onClose={handleClose}
      />
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider')
  }
  return context
}
