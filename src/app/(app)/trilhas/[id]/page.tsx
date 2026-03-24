'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESProgressBar } from '@/components/ui/progress-bar'
import { ESCard, CardContent } from '@/components/ui/card'
import { TextareaInput } from '@/components/ui/textarea-input'
import { ESButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { mockTrails } from '@/lib/mock-data'

interface TrailModulePageProps {
  params: Promise<{ id: string }>
}

const LESSON_STEPS = [
  { label: 'Introdução', done: true },
  { label: 'Prática guiada', done: true },
  { label: 'Reflexão', done: false, current: true },
  { label: 'Encerramento', done: false },
]

function IconArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function IconBookmark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function IconPlay() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-0.5">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  )
}

function IconEdit() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
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

function IconChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

export default function TrailModulePage({ params }: TrailModulePageProps) {
  const { id } = use(params)
  const trail = mockTrails.find((t) => t.id === id) ?? mockTrails[0]
  const [reflection, setReflection] = useState('')

  const progressValue = Math.round(
    ((trail.currentModule - 1) * trail.totalLessons + trail.currentLesson) /
      (trail.modules * trail.totalLessons) *
      100
  )

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-20 pt-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/trilhas"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 text-cream"
            >
              <IconArrowLeft />
            </Link>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 text-cream">
              <IconBookmark />
            </button>
          </div>

          {/* Trail info */}
          <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">{trail.title}</p>
          <h1 className="font-display text-2xl font-light text-cream mt-1">
            Reconhecendo suas emoções
          </h1>
          <p className="text-cream/50 text-sm mt-2">
            Módulo {trail.currentModule} de {trail.modules} · Lição {trail.currentLesson} de {trail.totalLessons}
          </p>

          {/* Progress */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-cream/40">Progresso geral</span>
              <span className="text-[11px] font-medium text-cream/60">{progressValue}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-cream/80 transition-all duration-500"
                style={{ width: `${progressValue}%` }}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* ── Lesson steps (overlapping hero) ── */}
      <Container size="sm" className="-mt-10 relative z-20 px-4">
        <div className="flex items-center gap-1 rounded-2xl bg-white/90 backdrop-blur-xl border-none shadow-[var(--shadow-modal)] p-3">
          {LESSON_STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center flex-1 last:flex-initial">
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold transition-all',
                  step.done
                    ? 'bg-mauve text-white'
                    : step.current
                      ? 'bg-mauve/15 text-mauve ring-2 ring-mauve/30'
                      : 'bg-plum/5 text-plum/30'
                )}>
                  {step.done ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={cn(
                  'text-[9px] font-medium text-center leading-tight',
                  step.done || step.current ? 'text-plum/70' : 'text-plum/30'
                )}>
                  {step.label}
                </span>
              </div>
              {i < LESSON_STEPS.length - 1 && (
                <div className={cn(
                  'h-[1px] flex-1 mx-1 mt-[-14px]',
                  step.done ? 'bg-mauve/40' : 'bg-plum/10'
                )} />
              )}
            </div>
          ))}
        </div>
      </Container>

      <Container size="sm" className="px-4 pt-6 space-y-5">
        {/* ── Audio player ── */}
        <section>
          <div className="relative rounded-2xl bg-gradient-to-br from-plum-soft to-mauve-ghost overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <div className="flex items-center gap-4 p-5 relative z-10">
              <button className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-mauve shadow-lg transition-all hover:scale-105 active:scale-95">
                <IconPlay />
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-plum">Áudio guiado</p>
                <p className="text-xs text-plum/40 mt-0.5">8 min · Meditação</p>
                {/* Waveform placeholder */}
                <div className="flex items-end gap-[3px] mt-2 h-5">
                  {[3, 5, 8, 12, 7, 10, 14, 6, 9, 11, 4, 8, 13, 7, 5, 9, 12, 6, 10, 8, 4, 7, 11, 5, 3].map((h, i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-[3px] rounded-full transition-all',
                        i < 10 ? 'bg-mauve' : 'bg-plum/15'
                      )}
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-plum/40 shrink-0">3:24 / 8:00</span>
            </div>
          </div>
        </section>

        {/* ── Lesson content ── */}
        <section className="space-y-4">
          <p className="text-[15px] leading-relaxed text-plum/80">
            Durante o tratamento de fertilidade, nossas emoções podem parecer uma
            montanha-russa. Em um momento sentimos esperança, no outro, uma
            ansiedade profunda. Isso acontece porque estamos vivendo algo que
            envolve nossos maiores desejos e vulnerabilidades.
          </p>

          {/* Highlight quote */}
          <div className="border-l-2 border-mauve/30 pl-4 py-1">
            <p className="font-display text-lg italic text-plum/70 leading-relaxed">
              &ldquo;Reconhecer o que sentimos, sem julgamento, é o primeiro passo para encontrar equilíbrio.&rdquo;
            </p>
          </div>

          <p className="text-[15px] leading-relaxed text-plum/80">
            Nesta lição, vamos praticar a arte de nomear nossas emoções. Quando
            conseguimos dizer &quot;estou sentindo ansiedade&quot; em vez de
            &quot;estou péssima&quot;, criamos um espaço entre nós e o sentimento.
            Esse espaço nos dá a liberdade de escolher como responder, em vez de
            apenas reagir.
          </p>

          {/* Key takeaway card */}
          <div className="rounded-2xl bg-plum-soft/50 border border-plum/5 p-4">
            <p className="text-eyebrow mb-1">Ponto-chave</p>
            <p className="text-sm text-plum/70 leading-relaxed">
              Toda emoção é válida e temporária. Nomear o que sentimos nos dá poder de escolha sobre como agir.
            </p>
          </div>
        </section>

        {/* ── Reflective exercise ── */}
        <section>
          <ESCard className="border-none shadow-[var(--shadow-card)] bg-white/90 backdrop-blur-xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-mauve to-plum-light" />
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mauve/10 mt-0.5">
                  <IconEdit />
                </span>
                <div>
                  <p className="text-eyebrow">Exercício reflexivo</p>
                  <p className="font-display text-base italic text-plum/70 mt-1 leading-relaxed">
                    Como você se sentiu durante essa lição? O que chamou mais a sua atenção?
                  </p>
                </div>
              </div>

              <TextareaInput
                label="Sua reflexão"
                placeholder="Escreva o que está no seu coração..."
                value={reflection}
                onChange={setReflection}
                minRows={3}
              />

              <div className="flex items-center justify-between">
                <Link
                  href="/diario"
                  className="flex items-center gap-1.5 text-sm text-mauve hover:text-mauve-dark transition-colors"
                >
                  <IconEdit />
                  Salvar no Diário
                </Link>
                <ESButton variant="ghost" size="sm">Pular</ESButton>
              </div>
            </CardContent>
          </ESCard>
        </section>

        {/* ── Navigation ── */}
        <section className="pb-4">
          <div className="flex gap-3">
            <Link href="/trilhas" className="flex-1">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-plum bg-white/60 backdrop-blur-sm border border-white/40 transition-all hover:bg-white/80 active:scale-[0.97]"
              >
                <IconChevronLeft />
                Voltar
              </button>
            </Link>
            <button
              type="button"
              className="flex-[2] flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-cream bg-gradient-to-r from-mauve to-mauve-dark shadow-sm transition-all hover:opacity-90 active:scale-[0.97]"
            >
              Próxima lição
              <IconChevronRight />
            </button>
          </div>
        </section>
      </Container>
    </div>
  )
}
