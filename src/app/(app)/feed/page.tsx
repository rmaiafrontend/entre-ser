'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ContentCard } from '@/components/ui/content-card'
import { ESCard, CardContent } from '@/components/ui/card'
import { ESProgressBar } from '@/components/ui/progress-bar'
import { cn } from '@/lib/utils'
import { mockContent, mockTrails } from '@/lib/mock-data'

type Tab = 'para-voce' | 'trilhas' | 'explorar'

const TABS: { key: Tab; label: string }[] = [
  { key: 'para-voce', label: 'Para você' },
  { key: 'trilhas', label: 'Trilhas' },
  { key: 'explorar', label: 'Explorar' },
]

const TYPE_FILTERS = [
  { key: 'Todos', icon: null },
  { key: 'Artigos', type: 'artigo' },
  { key: 'Vídeos', type: 'video' },
  { key: 'Áudios', type: 'audio' },
]

function IconCompass() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

// t1 Regulação Emocional
function IconBrain() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="10" y1="22" x2="14" y2="22" />
    </svg>
  )
}

// t2 Preparação para FIV
function IconClipboard() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  )
}

// t3 Luto Reprodutivo
function IconFeather() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" /><line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  )
}

// t4 Fortalecimento do Casal
function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

// t5 Apoio no Beta
function IconActivity() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

// t6 Autocuidado
function IconSun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
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

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState<Tab>('para-voce')
  const [typeFilter, setTypeFilter] = useState('Todos')

  const filteredExplore = typeFilter === 'Todos'
    ? mockContent
    : mockContent.filter((item) => item.type === TYPE_FILTERS.find((f) => f.key === typeFilter)?.type)

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-14 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Aprender e crescer</p>
              <h1 className="font-display text-3xl font-light text-cream mt-1">Feed</h1>
            </div>
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {/* Tab toggle in hero */}
          <div className="mt-5 flex rounded-xl bg-white/10 backdrop-blur-sm p-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200',
                  activeTab === tab.key
                    ? 'bg-white/20 text-cream shadow-sm'
                    : 'text-cream/50 hover:text-cream/70'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Tab content ── */}
      <Container size="sm" className="px-4 pt-6 space-y-5">

        {/* ═══ Para você ═══ */}
        {activeTab === 'para-voce' && (
          <>
            {/* Featured card */}
            <section>
              <ContentCard
                title={mockContent[0].title}
                type={mockContent[0].type}
                duration={mockContent[0].duration}
                phase={mockContent[0].phase}
                isFavorited={mockContent[0].isFavorited}
              />
            </section>

            {/* Remaining as compact list */}
            <section>
              <p className="text-eyebrow mb-3">Recomendados para você</p>
              <div className="space-y-2">
                {mockContent.slice(1, 5).map((item) => (
                  <ContentCard
                    key={item.title}
                    title={item.title}
                    type={item.type}
                    duration={item.duration}
                    phase={item.phase}
                    isFavorited={item.isFavorited}
                    variant="compact"
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {/* ═══ Trilhas ═══ */}
        {activeTab === 'trilhas' && (
          <>
            {/* Active trail highlight */}
            {(() => {
              const active = mockTrails.find((t) => t.progress > 0 && t.progress < 100)
              if (!active) return null
              return (
                <section>
                  <p className="text-eyebrow mb-3">Continue de onde parou</p>
                  <Link href={`/trilhas/${active.id}`}>
                    <ESCard className="border-none shadow-[var(--shadow-card)] bg-white/90 backdrop-blur-xl">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-plum-soft">
                            <IconCompass />
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-plum">{active.title}</p>
                            <p className="text-xs text-plum/40 mt-0.5">
                              Módulo {active.currentModule} de {active.modules} · Lição {active.currentLesson}
                            </p>
                            <div className="mt-2">
                              <ESProgressBar value={active.progress} showValueLabel size="sm" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </ESCard>
                  </Link>
                </section>
              )
            })()}

            {/* All trails */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <p className="text-eyebrow">Todas as trilhas</p>
                <Link href="/trilhas" className="text-sm text-mauve hover:text-mauve-dark transition-colors">
                  Ver mapa →
                </Link>
              </div>
              <div className="space-y-3">
                {mockTrails.map((trail) => (
                  <Link key={trail.id} href={`/trilhas/${trail.id}`} className="block">
                    <div className={cn(
                      'flex items-center gap-4 rounded-2xl p-4 transition-all duration-200',
                      'bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 hover:scale-[1.01] active:scale-[0.99]',
                      trail.isRecommended && 'border-mauve/30 bg-mauve-ghost/40'
                    )}>
                      <span className={cn(
                        'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                        trail.isRecommended ? 'bg-mauve/10' : 'bg-plum-soft'
                      )}>
                        {TRAIL_ICONS[trail.id] || <IconCompass />}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-plum truncate">{trail.title}</p>
                          {trail.isRecommended && (
                            <span className="shrink-0 rounded-full bg-mauve/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-mauve">
                              Indicada
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-plum/40 mt-0.5 truncate">{trail.description}</p>
                        <div className="mt-2">
                          <ESProgressBar value={trail.progress} size="sm" />
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-plum/30 shrink-0">{trail.progress}%</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ═══ Explorar ═══ */}
        {activeTab === 'explorar' && (
          <>
            {/* Type filters */}
            <div className="flex gap-2" style={{ scrollbarWidth: 'none' }}>
              {TYPE_FILTERS.map((filter) => {
                const isActive = filter.key === typeFilter
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setTypeFilter(filter.key)}
                    className={cn(
                      'shrink-0 rounded-full px-4 py-2 text-sm transition-all duration-200 min-h-[40px]',
                      isActive
                        ? 'bg-plum text-cream font-medium shadow-sm'
                        : 'bg-white/60 backdrop-blur-sm border border-white/40 text-plum/70 hover:bg-white/80'
                    )}
                  >
                    {filter.key}
                  </button>
                )
              })}
            </div>

            {/* Content grid */}
            <div className="space-y-3">
              {filteredExplore.map((item) => (
                <ContentCard
                  key={item.title}
                  title={item.title}
                  type={item.type}
                  duration={item.duration}
                  phase={item.phase}
                  isFavorited={item.isFavorited}
                  variant="compact"
                />
              ))}
            </div>

            {filteredExplore.length === 0 && (
              <div className="py-16 text-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-plum/15 mx-auto mb-3">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <p className="text-sm text-plum/40">Nenhum conteúdo nesta categoria.</p>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  )
}
