import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESAvatar } from '@/components/ui/avatar'
import { ESCard, CardContent } from '@/components/ui/card'
import { ESProgressBar } from '@/components/ui/progress-bar'
import { mockUser, mockTrails } from '@/lib/mock-data'
import { PHASE_LABELS } from '@/types'

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  )
}
function IconActivity() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}
function IconCreditCard() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  )
}
function IconHelpCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
function IconFile() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
function IconLogOut() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-alert">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}
function IconChevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plum/20">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

const ACCOUNT_ITEMS = [
  { icon: <IconUser />, label: 'Dados pessoais' },
  { icon: <IconActivity />, label: 'Fase do tratamento' },
  { icon: <IconBell />, label: 'Notificações' },
  { icon: <IconCreditCard />, label: 'Plano e assinatura' },
]

const SUPPORT_ITEMS = [
  { icon: <IconHelpCircle />, label: 'Central de ajuda' },
  { icon: <IconShield />, label: 'Política de privacidade' },
  { icon: <IconFile />, label: 'Termos de uso' },
]

export default function PerfilPage() {
  const totalProgress = Math.round(mockTrails.reduce((sum, t) => sum + t.progress, 0) / mockTrails.length)
  const trailsStarted = mockTrails.filter((t) => t.progress > 0).length

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-20 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <div className="flex items-center gap-4">
            <ESAvatar name={mockUser.fullName} size="lg" isBordered />
            <div className="flex-1">
              <h1 className="font-display text-2xl font-light text-cream">{mockUser.fullName}</h1>
              <p className="text-cream/50 text-sm mt-0.5">{mockUser.email}</p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Stats card (overlapping hero) ── */}
      <Container size="sm" className="-mt-10 relative z-20 px-4">
        <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mauve to-mauve-dark">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] text-plum/40 uppercase tracking-wider">Fase atual</p>
                  <p className="text-sm font-medium text-plum">{PHASE_LABELS[mockUser.phase]}</p>
                </div>
              </div>
              <Link href="/fase" className="text-xs text-mauve hover:text-mauve-dark transition-colors">
                Alterar →
              </Link>
            </div>

            <div className="flex items-center gap-5 pt-3 border-t border-plum/5">
              <div className="flex-1">
                <p className="text-xs text-plum/40">Trilhas</p>
                <p className="text-sm font-medium text-plum">{trailsStarted}/{mockTrails.length}</p>
              </div>
              <div className="h-6 w-px bg-plum/5" />
              <div className="flex-1">
                <p className="text-xs text-plum/40">Progresso</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex-1">
                    <ESProgressBar value={totalProgress} size="sm" />
                  </div>
                  <span className="text-xs font-semibold text-plum/40">{totalProgress}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </ESCard>
      </Container>

      <Container size="sm" className="px-4 pt-6 space-y-5 pb-8">
        {/* ── Plan badge ── */}
        <section>
          <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-plum-soft to-mauve-ghost border border-plum/5 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mauve/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-plum">Plano Premium</p>
                <p className="text-xs text-plum/40">Renovação em 15 de abril</p>
              </div>
            </div>
            <span className="rounded-full bg-mauve/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-mauve">
              Ativo
            </span>
          </div>
        </section>

        {/* ── Account ── */}
        <section>
          <p className="text-eyebrow mb-3">Minha conta</p>
          <div className="space-y-1.5">
            {ACCOUNT_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                className="w-full flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-3.5 transition-all hover:bg-white/80 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mauve/10">
                  {item.icon}
                </span>
                <span className="text-sm text-plum flex-1 text-left">{item.label}</span>
                <IconChevron />
              </button>
            ))}
          </div>
        </section>

        {/* ── Support ── */}
        <section>
          <p className="text-eyebrow mb-3">Suporte</p>
          <div className="space-y-1.5">
            {SUPPORT_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                className="w-full flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-3.5 transition-all hover:bg-white/80 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mauve/10">
                  {item.icon}
                </span>
                <span className="text-sm text-plum flex-1 text-left">{item.label}</span>
                <IconChevron />
              </button>
            ))}
          </div>
        </section>

        {/* ── Logout ── */}
        <section>
          <Link href="/landing">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-red-alert bg-red-alert/5 border border-red-alert/10 transition-all hover:bg-red-alert/10 active:scale-[0.97]"
            >
              <IconLogOut />
              Sair da conta
            </button>
          </Link>
        </section>
      </Container>
    </div>
  )
}
