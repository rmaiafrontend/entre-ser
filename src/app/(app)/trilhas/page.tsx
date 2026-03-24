'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESProgressBar } from '@/components/ui/progress-bar'
import { ESCard, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { mockTrails } from '@/lib/mock-data'

/* ── Trail icons (stroke 1.5, text-mauve) ── */

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="10" y1="22" x2="14" y2="22" />
    </svg>
  )
}
function IconClipboard() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  )
}
function IconFeather() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  )
}
function IconHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function IconActivity() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function IconSun() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

const TRAIL_ICONS: Record<string, React.ReactNode> = {
  t1: <IconBrain />,
  t2: <IconClipboard />,
  t3: <IconFeather />,
  t4: <IconHeart />,
  t5: <IconActivity />,
  t6: <IconSun />,
}

export default function TrilhasPage() {
  const activeTrail = mockTrails.find((t) => t.progress > 0 && t.progress < 100)
  const totalProgress = Math.round(mockTrails.reduce((sum, t) => sum + t.progress, 0) / mockTrails.length)

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-16 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Sua jornada</p>
          <h1 className="font-display text-3xl font-light text-cream mt-1">Trilhas Terapêuticas</h1>
          <p className="text-cream/50 text-sm mt-2 max-w-xs">
            Escolha uma trilha para começar ou continue de onde parou.
          </p>

          {/* Overall stats */}
          <div className="flex items-center gap-5 mt-5">
            <div>
              <p className="text-2xl font-display font-light text-cream">{mockTrails.filter((t) => t.progress > 0).length}<span className="text-cream/40">/{mockTrails.length}</span></p>
              <p className="text-[11px] text-cream/40 uppercase tracking-wider">Iniciadas</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-display font-light text-cream">{totalProgress}<span className="text-cream/40">%</span></p>
              <p className="text-[11px] text-cream/40 uppercase tracking-wider">Geral</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-display font-light text-cream">{mockTrails.filter((t) => t.progress === 100).length}</p>
              <p className="text-[11px] text-cream/40 uppercase tracking-wider">Completas</p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Continue trail (overlapping hero) ── */}
      {activeTrail && (
        <Container size="sm" className="-mt-8 relative z-20 px-4">
          <Link href={`/trilhas/${activeTrail.id}`}>
            <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-mauve to-mauve-dark text-white">
                    {TRAIL_ICONS[activeTrail.id]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Continue de onde parou</p>
                    <p className="font-display text-base text-plum mt-0.5">{activeTrail.title}</p>
                    <p className="text-xs text-plum/40 mt-0.5">
                      Módulo {activeTrail.currentModule} · Lição {activeTrail.currentLesson}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mauve/10">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-mauve ml-0.5">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <ESProgressBar value={activeTrail.progress} showValueLabel size="sm" />
                </div>
              </CardContent>
            </ESCard>
          </Link>
        </Container>
      )}

      {/* ── Trails grid ── */}
      <Container size="sm" className="px-4 pt-6 space-y-3 pb-8">
        {mockTrails.map((trail) => {
          const isStarted = trail.progress > 0
          const isComplete = trail.progress === 100

          return (
            <Link key={trail.id} href={`/trilhas/${trail.id}`} className="block">
              <div className={cn(
                'flex gap-4 rounded-2xl p-4 transition-all duration-200',
                'hover:scale-[1.01] active:scale-[0.99]',
                trail.isRecommended
                  ? 'bg-mauve-ghost/60 backdrop-blur-sm border border-mauve/20'
                  : 'bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80',
              )}>
                {/* Icon */}
                <span className={cn(
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl',
                  isComplete
                    ? 'bg-success-light/50 text-success-dark'
                    : trail.isRecommended
                      ? 'bg-mauve/10 text-mauve'
                      : 'bg-plum-soft text-mauve'
                )}>
                  {isComplete ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    TRAIL_ICONS[trail.id]
                  )}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-plum truncate">{trail.title}</p>
                    {trail.isRecommended && (
                      <span className="shrink-0 rounded-full bg-mauve/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-mauve">
                        Indicada
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-plum/40 mt-0.5 line-clamp-1">{trail.description}</p>

                  {/* Progress */}
                  <div className="mt-2.5 flex items-center gap-2.5">
                    <div className="flex-1">
                      <ESProgressBar value={trail.progress} size="sm" color={isComplete ? 'success' : 'primary'} />
                    </div>
                    <span className={cn(
                      'text-xs font-semibold shrink-0',
                      isComplete ? 'text-success-dark' : 'text-plum/30'
                    )}>
                      {trail.progress}%
                    </span>
                  </div>

                  {/* Module info */}
                  {isStarted && !isComplete && (
                    <p className="text-[11px] text-plum/30 mt-1.5">
                      Módulo {trail.currentModule} de {trail.modules} · {trail.totalLessons} lições
                    </p>
                  )}
                  {!isStarted && (
                    <p className="text-[11px] text-plum/30 mt-1.5">
                      {trail.modules} módulos · {trail.totalLessons} lições por módulo
                    </p>
                  )}
                </div>

                {/* Chevron */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plum/20 shrink-0 mt-1">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          )
        })}
      </Container>
    </div>
  )
}
