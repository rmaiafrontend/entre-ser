'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'
import { ContentCard } from '@/components/ui/content-card'
import { ESProgressBar } from '@/components/ui/progress-bar'
import { ESButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { mockUser, mockContent, mockTrails } from '@/lib/mock-data'
import { PHASE_LABELS } from '@/types'

function IconActivity() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function IconBook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}
function IconThermometer() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  )
}
function IconEdit() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IconRefresh() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
}

const TIPS = [
  { icon: <IconThermometer />, text: 'Use o Termômetro Emocional diariamente', href: '/termometro' },
  { icon: <IconEdit />, text: 'Registre seus sentimentos no Diário', href: '/diario' },
  { icon: <IconUsers />, text: 'Compartilhe no Grupo Terapêutico', href: '/grupo' },
]

export default function FasePage() {
  const phaseName = PHASE_LABELS[mockUser.phase]
  const betaContent = mockContent.filter(
    (c) => c.phase === 'Beta' || c.phase === 'Todas as fases'
  ).slice(0, 3)
  const betaTrail = mockTrails.find((t) => t.id === 't5')!

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-24 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-16 h-24 w-24 rounded-full bg-mauve/20 blur-2xl" />

        <Container size="sm" className="relative z-10">
          <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Sua fase atual</p>
          <h1 className="font-display text-4xl font-light text-cream mt-2">{phaseName}</h1>
          <p className="text-cream/60 text-sm mt-3 max-w-xs leading-relaxed">
            Aguardando o resultado do beta-hCG. Um dos momentos mais intensos — e estamos com você.
          </p>

          {/* Phase icon */}
          <div className="absolute right-0 top-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-cream/40">
              <IconActivity />
            </span>
          </div>
        </Container>
      </div>

      {/* ── What to expect (overlapping hero) ── */}
      <Container size="sm" className="-mt-14 relative z-20 px-4">
        <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-mauve to-plum-light" />
          <CardContent className="p-5 space-y-4">
            <p className="text-eyebrow">O que esperar</p>

            <p className="text-[15px] leading-relaxed text-plum/70">
              A fase Beta é marcada pela espera entre a transferência embrionária e o
              exame de sangue que confirma a gravidez. É completamente normal sentir
              uma mistura de esperança e medo.
            </p>

            <div className="border-l-2 border-mauve/30 pl-4 py-1">
              <p className="font-display text-base italic text-plum/60 leading-relaxed">
                &ldquo;Tente manter uma rotina leve: caminhadas curtas, descanso, e atividades que tragam prazer.&rdquo;
              </p>
            </div>

            <p className="text-[15px] leading-relaxed text-plum/70">
              Evite pesquisar excessivamente sobre sintomas — cada corpo reage de forma
              diferente, e os sinais precoces nem sempre são confiáveis.
            </p>
          </CardContent>
        </ESCard>
      </Container>

      <Container size="sm" className="px-4 pt-6 space-y-6 pb-8">
        {/* ── Quick tips ── */}
        <section>
          <p className="text-eyebrow mb-3">Dicas para esta fase</p>
          <div className="space-y-2">
            {TIPS.map((tip) => (
              <Link key={tip.text} href={tip.href} className="block">
                <div className="flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-3.5 transition-all hover:bg-white/80 hover:scale-[1.01] active:scale-[0.99]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mauve/10">
                    {tip.icon}
                  </span>
                  <p className="text-sm text-plum flex-1">{tip.text}</p>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plum/20">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Recommended trail ── */}
        <section>
          <p className="text-eyebrow mb-3">Trilha indicada</p>
          <Link href="/trilhas/t5" className="block">
            <ESCard className="border-mauve/20 bg-mauve-ghost/40 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-mauve to-mauve-dark text-white">
                    <IconActivity />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm text-plum">{betaTrail.title}</p>
                      <span className="shrink-0 rounded-full bg-mauve/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-mauve">
                        Indicada
                      </span>
                    </div>
                    <p className="text-xs text-plum/40 mt-0.5 line-clamp-1">{betaTrail.description}</p>
                    <div className="mt-2 flex items-center gap-2.5">
                      <div className="flex-1">
                        <ESProgressBar value={betaTrail.progress} size="sm" />
                      </div>
                      <span className="text-xs font-semibold text-plum/30">{betaTrail.progress}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </ESCard>
          </Link>
        </section>

        {/* ── Recommended content ── */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <p className="text-eyebrow">Conteúdos para a fase Beta</p>
            <Link href="/feed" className="text-sm text-mauve hover:text-mauve-dark transition-colors">
              Ver tudo →
            </Link>
          </div>
          <div className="space-y-2">
            {betaContent.map((content) => (
              <ContentCard
                key={content.title}
                title={content.title}
                type={content.type}
                duration={content.duration}
                phase={content.phase}
                isFavorited={content.isFavorited}
                variant="compact"
              />
            ))}
          </div>
        </section>

        {/* ── Update phase ── */}
        <section>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-plum bg-white/60 backdrop-blur-sm border border-white/40 transition-all hover:bg-white/80 active:scale-[0.97]"
          >
            <IconRefresh />
            Atualizar minha fase
          </button>
        </section>
      </Container>
    </div>
  )
}
