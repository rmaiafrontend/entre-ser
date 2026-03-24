import { cn } from '@/lib/utils'

interface FormFieldProps {
  label?: string
  description?: string
  errorMessage?: string
  isRequired?: boolean
  children: React.ReactNode
  className?: string
}

export function FormField({
  label,
  description,
  errorMessage,
  isRequired,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label className="font-body text-[11px] font-medium uppercase tracking-[0.14em] text-mauve">
          {label}
          {isRequired && <span className="ml-0.5 text-red-alert">*</span>}
        </label>
      )}

      {children}

      {description && !errorMessage && (
        <p className="mt-1 text-sm text-plum/50">{description}</p>
      )}

      {errorMessage && (
        <p className="mt-1 text-sm text-red-alert">{errorMessage}</p>
      )}
    </div>
  )
}
