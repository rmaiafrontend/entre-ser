'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleLogin() {
    const e: Record<string, string> = {}
    if (!email.trim()) e.email = 'Informe seu e-mail'
    if (!senha.trim()) e.senha = 'Informe sua senha'
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
        <Link href="/cadastro" className="text-sm text-cream/60 hover:text-cream transition-colors">
          Criar conta
        </Link>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Logo */}
        <img src="/logo-entreser.png" alt="entre ser" className="h-10 mb-3" />
        <p className="text-cream/40 text-sm mb-10">Bem-vinda de volta</p>

        {/* Form */}
        <div className="w-full max-w-sm space-y-4">
          {/* Email field */}
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-cream/40 mb-2">E-mail</label>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3.5 focus-within:border-cream/30 focus-within:bg-white/15 transition-all">
              <IconMail />
              <input
                type="email"
                placeholder="maria@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off" className="flex-1 bg-transparent text-sm text-cream placeholder:text-cream/25 focus:outline-none"
              />
            </div>
            {errors.email && <p className="text-xs text-mauve-soft mt-1.5">{errors.email}</p>}
          </div>

          {/* Password field */}
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-cream/40 mb-2">Senha</label>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3.5 focus-within:border-cream/30 focus-within:bg-white/15 transition-all">
              <IconLock />
              <input
                type="password"
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="off" className="flex-1 bg-transparent text-sm text-cream placeholder:text-cream/25 focus:outline-none"
              />
            </div>
            {errors.senha && <p className="text-xs text-mauve-soft mt-1.5">{errors.senha}</p>}
            <div className="flex justify-end mt-2">
              <button type="button" className="text-xs text-cream/40 hover:text-cream/70 transition-colors">
                Esqueci minha senha
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-2 rounded-full py-4 text-base font-medium text-plum bg-cream shadow-lg transition-all hover:bg-cream-mid active:scale-[0.97] mt-2"
          >
            Entrar
            <IconArrowRight />
          </button>
        </div>
      </div>

      {/* Bottom link */}
      <div className="relative z-10 pb-8 text-center">
        <p className="text-sm text-cream/30">
          Não tem conta?{' '}
          <Link href="/cadastro" className="font-medium text-cream/60 hover:text-cream transition-colors">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  )
}
