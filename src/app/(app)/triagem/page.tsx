'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'
import { ESButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { mockTriageMessages, mockTriageResults } from '@/lib/mock-data'

function IconActivity() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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
function IconThermometer() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function IconSend() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

const RESULT_ICONS: Record<string, React.ReactNode> = {
  '/trilhas/t5': <IconActivity />,
  '/diario': <IconEdit />,
  '/termometro': <IconThermometer />,
  '/agendamento': <IconCalendar />,
}

const QUICK_REPLIES = [
  'Estou ansiosa',
  'Preciso conversar',
  'Quero relaxar',
]

export default function TriagemPage() {
  const [inputValue, setInputValue] = useState('')
  const [showResults, setShowResults] = useState(true)

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-6 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </span>
            <div>
              <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Apoio inteligente</p>
              <h1 className="font-display text-xl font-light text-cream">Triagem Emocional</h1>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Chat area ── */}
      <div className="flex-1 bg-background">
        <Container size="sm" className="px-4 py-5">
          <div className="space-y-4">
            {/* Messages */}
            {mockTriageMessages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  'flex',
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {msg.sender === 'ai' && (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mauve to-mauve-dark mr-2 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                )}
                <div
                  className={cn(
                    'max-w-[80%] rounded-2xl px-4 py-3',
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-mauve to-mauve-dark text-cream rounded-br-md'
                      : 'bg-white/80 backdrop-blur-xl border border-white/40 text-plum/80 rounded-bl-md'
                  )}
                >
                  <p className="text-[15px] leading-relaxed">{msg.message}</p>
                </div>
              </div>
            ))}

            {/* Quick replies */}
            <div className="flex gap-2 flex-wrap pt-1">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  className="rounded-full px-4 py-2 text-sm bg-white/60 backdrop-blur-sm border border-white/40 text-plum/70 hover:bg-white/80 transition-all active:scale-95"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Results section */}
            {showResults && (
              <section className="pt-2">
                <ESCard className="border-none shadow-[var(--shadow-card)] bg-white/90 backdrop-blur-xl overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-mauve to-plum-light" />
                  <CardContent className="p-4 space-y-1">
                    <p className="text-eyebrow mb-2">Recursos sugeridos</p>
                    {mockTriageResults.map((result, i) => (
                      <Link key={result.title} href={result.href} className="block">
                        <div className={cn(
                          'flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-plum/[0.03] active:scale-[0.99]',
                          i < mockTriageResults.length - 1 && 'border-b border-plum/5'
                        )}>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mauve/10">
                            {RESULT_ICONS[result.href] || <IconActivity />}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-plum">{result.title}</p>
                            <p className="text-xs text-plum/40 mt-0.5">{result.description}</p>
                          </div>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plum/20 shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </ESCard>
              </section>
            )}

            {/* Professional CTA */}
            <section>
              <ESCard variant="dark" className="bg-gradient-to-br from-plum via-plum-mid to-mauve-dark overflow-hidden relative">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                <CardContent className="p-5 relative z-10">
                  <p className="font-display text-base text-cream/90 leading-relaxed">
                    Precisa de apoio profissional? Converse com uma psicóloga especializada.
                  </p>
                  <Link href="/agendamento" className="block mt-3">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-full py-3 px-6 text-sm font-medium bg-white/15 backdrop-blur-sm text-cream border border-white/20 hover:bg-white/25 transition-all active:scale-[0.97] w-full"
                    >
                      <IconCalendar />
                      Agendar consulta
                    </button>
                  </Link>
                </CardContent>
              </ESCard>
            </section>
          </div>
        </Container>
      </div>

      {/* ── Input bar (sticky bottom) ── */}
      <div className="sticky bottom-20 z-30 bg-background border-t border-plum/5">
        <Container size="sm" className="px-4 py-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Como posso te ajudar?"
              className="flex-1 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 px-4 py-3 text-sm text-plum placeholder:text-plum/30 focus:outline-none focus:ring-2 focus:ring-mauve/20 focus:border-mauve transition-all"
            />
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-mauve to-mauve-dark shadow-sm transition-all hover:opacity-90 active:scale-95"
            >
              <IconSend />
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}
