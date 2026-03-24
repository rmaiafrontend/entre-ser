'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CheckboxInput } from '@/components/ui/checkbox-input'
import { cn } from '@/lib/utils'
import { type Phase, PHASE_LABELS } from '@/types'

function IconArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  )
}
function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/30">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/30">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22 7 12 13 2 7" />
    </svg>
  )
}
function IconLock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/30">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream/30">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

const PHASES: Phase[] = [
  'preparacao',
  'estimulacao',
  'coleta-transferencia',
  'beta',
  'pos-resultado',
  'aguardando-proximo-ciclo',
]

interface FieldProps {
  label: string
  icon: React.ReactNode
  type?: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  error?: string
}

function Field({ label, icon, type = 'text', placeholder, value, onChange, error }: FieldProps) {
  return (
    <div>
      <label className="block text-[11px] font-medium uppercase tracking-wider text-cream/40 mb-2">{label}</label>
      <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3.5 focus-within:border-cream/30 focus-within:bg-white/15 transition-all">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off" className="flex-1 bg-transparent text-sm text-cream placeholder:text-cream/25 focus:outline-none"
        />
      </div>
      {error && <p className="text-xs text-mauve-soft mt-1.5">{error}</p>}
    </div>
  )
}

export default function CadastroPage() {
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [fase, setFase] = useState<Phase | undefined>(undefined)
  const [aceitaTermos, setAceitaTermos] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit() {
    const e: Record<string, string> = {}
    if (!nome.trim()) e.nome = 'Informe seu nome'
    if (!email.trim()) e.email = 'Informe seu e-mail'
    if (!senha.trim()) e.senha = 'Crie uma senha'
    if (!confirmarSenha.trim()) e.confirmarSenha = 'Confirme sua senha'
    else if (senha !== confirmarSenha) e.confirmarSenha = 'As senhas não coincidem'
    if (!aceitaTermos) e.termos = 'Aceite os termos para continuar'
    setErrors(e)
    if (Object.keys(e).length === 0) router.push('/home')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-plum via-plum-mid to-mauve-dark flex flex-col relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-20 h-48 w-48 rounded-full bg-white/8 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-40 h-24 w-24 rounded-full bg-mauve/20 blur-2xl" />

      {/* Top bar */}
      <div className="relative z-10 px-5 pt-6 flex items-center justify-between">
        <Link
          href="/landing"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 text-cream"
        >
          <IconArrowLeft />
        </Link>
        <Link href="/login" className="text-sm text-cream/60 hover:text-cream transition-colors">
          Já tenho conta
        </Link>
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-sm mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <img src="/logo-entreser.png" alt="entre ser" className="h-10 mx-auto mb-3" />
            <p className="text-cream/40 text-sm">Comece sua jornada de acolhimento</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <Field label="Nome" icon={<IconUser />} placeholder="Maria da Silva" value={nome} onChange={setNome} error={errors.nome} />
            <Field label="E-mail" icon={<IconMail />} type="email" placeholder="maria@email.com" value={email} onChange={setEmail} error={errors.email} />
            <Field label="Senha" icon={<IconLock />} type="password" placeholder="Mínimo 8 caracteres" value={senha} onChange={setSenha} error={errors.senha} />
            <Field label="Confirmar senha" icon={<IconLock />} type="password" placeholder="Repita sua senha" value={confirmarSenha} onChange={setConfirmarSenha} error={errors.confirmarSenha} />

            {/* Phase selector */}
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-cream/40 mb-2">Sua fase (opcional)</label>
              <div className="grid grid-cols-2 gap-2">
                {PHASES.map((p) => {
                  const isSelected = fase === p
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setFase(isSelected ? undefined : p)}
                      className={cn(
                        'rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 min-h-[44px]',
                        isSelected
                          ? 'bg-cream/15 text-cream font-medium border border-cream/30'
                          : 'bg-white/8 text-cream/50 border border-white/8 hover:bg-white/12'
                      )}
                    >
                      {PHASE_LABELS[p]}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-1 pt-1">
              <div className="[&_label]:text-cream/50 [&_span]:text-cream/50">
                <CheckboxInput
                  label="Aceito os Termos de Uso e Política de Privacidade"
                  isSelected={aceitaTermos}
                  onChange={setAceitaTermos}
                />
              </div>
              {errors.termos && <p className="text-xs text-mauve-soft">{errors.termos}</p>}
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 rounded-full py-4 text-base font-medium text-plum bg-cream shadow-lg transition-all hover:bg-cream-mid active:scale-[0.97] mt-2"
            >
              Criar minha conta
              <IconArrowRight />
            </button>

            {/* Privacy note */}
            <div className="flex items-center justify-center gap-1.5 pt-2 pb-4">
              <IconShield />
              <span className="text-[11px] text-cream/25">Seus dados estão protegidos pela LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
