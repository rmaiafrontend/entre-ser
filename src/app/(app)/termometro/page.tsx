'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'
import { TextInput } from '@/components/ui/text-input'
import { ESButton } from '@/components/ui/button'
import { mockThermometerHistory } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

function getEmpathyMessage(value: number) {
  if (value <= 3) return { text: 'Que bom que você está bem! Continue cuidando de si mesma com carinho.', emoji: '☀️' }
  if (value <= 6) return { text: 'Tudo bem não estar 100%. Você está fazendo o melhor que pode, e isso já é muito.', emoji: '🌤️' }
  return { text: 'Percebemos que hoje está difícil. Estamos aqui por você. Não hesite em buscar apoio.', emoji: '🌧️' }
}

function getSegmentColor(v: number): string {
  if (v <= 3) return 'bg-plum-soft'
  if (v <= 5) return 'bg-mauve-soft'
  if (v <= 6) return 'bg-mauve'
  if (v <= 8) return 'bg-mauve-dark'
  return 'bg-red-alert'
}

function getLevelLabel(v: number): string {
  if (v <= 2) return 'Tranquila'
  if (v <= 4) return 'Bem'
  if (v <= 6) return 'Moderado'
  if (v <= 8) return 'Intenso'
  return 'Muito intenso'
}

function getLevelColor(v: number): string {
  if (v <= 3) return 'text-success-dark'
  if (v <= 6) return 'text-mauve'
  return 'text-red-alert'
}

const SUGGESTIONS = [
  { label: 'Trilha: Apoio no Beta', href: '/trilhas/t5', icon: <IconActivity /> },
  { label: 'Registrar no Diário', href: '/diario', icon: <IconEdit /> },
  { label: 'Agendar com psicóloga', href: '/agendamento', icon: <IconCalendar /> },
]

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
function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export default function TermometroPage() {
  const [value, setValue] = useState(0)
  const [note, setNote] = useState('')
  const hasValue = value > 0

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-20 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Check-in diário</p>
          <h1 className="font-display text-3xl font-light text-cream mt-1">Termômetro Emocional</h1>
          <p className="text-cream/50 text-sm mt-2">
            Como você está se sentindo agora?
          </p>
        </Container>
      </div>

      {/* ── Main interaction (overlapping hero) ── */}
      <Container size="sm" className="-mt-12 relative z-20 px-4">
        <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl">
          <CardContent className="p-5 space-y-5">
            {/* Value display */}
            <div className="text-center py-2">
              {hasValue ? (
                <>
                  <p className={cn('text-5xl font-display font-light transition-colors', getLevelColor(value))}>
                    {value}
                  </p>
                  <p className={cn('text-sm font-medium mt-1 transition-colors', getLevelColor(value))}>
                    {getLevelLabel(value)}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-5xl font-display font-light text-plum/15">—</p>
                  <p className="text-sm text-plum/30 mt-1">Toque na escala abaixo</p>
                </>
              )}
            </div>

            {/* Scale */}
            <div>
              <div className="flex gap-1.5">
                {Array.from({ length: 10 }, (_, i) => {
                  const seg = i + 1
                  const isActive = seg <= value
                  return (
                    <button
                      key={seg}
                      type="button"
                      aria-label={`Nível ${seg}`}
                      onClick={() => setValue(seg)}
                      className={cn(
                        'flex-1 h-12 rounded-xl transition-all duration-200',
                        'hover:scale-105 active:scale-95',
                        isActive ? getSegmentColor(seg) : 'bg-plum/[0.04]',
                        seg === value && 'ring-2 ring-offset-2 ring-plum/20',
                      )}
                    />
                  )
                })}
              </div>
              <div className="flex justify-between mt-2 px-1">
                <span className="text-[10px] text-plum/30">Tranquila</span>
                <span className="text-[10px] text-plum/30">Muito intenso</span>
              </div>
            </div>

            {/* Optional note */}
            <TextInput
              label="O que está pesando hoje?"
              placeholder="Opcional..."
              value={note}
              onChange={setNote}
            />

            {/* Save button */}
            <ESButton
              fullWidth
              isDisabled={!hasValue}
              className={cn(!hasValue && 'opacity-40')}
            >
              Registrar check-in
            </ESButton>
          </CardContent>
        </ESCard>
      </Container>

      <Container size="sm" className="px-4 pt-6 space-y-6 pb-8">
        {/* ── Empathy result ── */}
        {hasValue && (
          <section>
            <ESCard variant="dark" className="bg-gradient-to-br from-plum via-plum-mid to-mauve-dark overflow-hidden relative">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              <CardContent className="p-5 relative z-10">
                <p className="font-display text-lg italic text-cream/90 leading-relaxed">
                  &ldquo;{getEmpathyMessage(value).text}&rdquo;
                </p>
              </CardContent>
            </ESCard>
          </section>
        )}

        {/* ── Suggestions ── */}
        {hasValue && (
          <section>
            <p className="text-eyebrow mb-3">Sugestões para você</p>
            <div className="space-y-2">
              {SUGGESTIONS.map((s) => (
                <Link key={s.label} href={s.href} className="block">
                  <div className="flex items-center gap-3 rounded-2xl p-3.5 bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-all hover:scale-[1.01] active:scale-[0.99]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mauve/10">
                      {s.icon}
                    </span>
                    <p className="text-sm font-medium text-plum flex-1">{s.label}</p>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plum/20">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Weekly history ── */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <p className="text-eyebrow">Sua semana</p>
            <span className="text-xs text-plum/30">
              Média: {Math.round(mockThermometerHistory.reduce((a, b) => a + b.value, 0) / mockThermometerHistory.length)}/10
            </span>
          </div>
          <ESCard className="border-none shadow-[var(--shadow-card)]">
            <CardContent className="p-4">
              <div className="flex items-end justify-between gap-2">
                {mockThermometerHistory.map((day, i) => {
                  const barHeight = (day.value / 10) * 80
                  const isToday = i === mockThermometerHistory.length - 1
                  return (
                    <div key={day.day} className="flex flex-col items-center gap-1.5 flex-1">
                      <div className="relative w-full h-20 flex items-end justify-center">
                        <div
                          className={cn(
                            'w-full max-w-[24px] rounded-lg transition-all duration-300',
                            isToday ? 'ring-2 ring-offset-1 ring-mauve/30' : '',
                            getSegmentColor(day.value),
                          )}
                          style={{ height: `${barHeight}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-plum/50">{day.value}</span>
                      <span className={cn('text-[10px]', isToday ? 'text-mauve font-semibold' : 'text-plum/30')}>{day.day}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </ESCard>
        </section>

        {/* ── Monthly overview ── */}
        <section>
          <p className="text-eyebrow mb-3">Resumo do mês</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 text-center">
              <p className="text-2xl font-display font-light text-plum">23</p>
              <p className="text-[11px] text-plum/40 mt-0.5">Check-ins</p>
            </div>
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 text-center">
              <p className="text-2xl font-display font-light text-success-dark">4.8</p>
              <p className="text-[11px] text-plum/40 mt-0.5">Média mensal</p>
            </div>
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 text-center">
              <p className="text-2xl font-display font-light text-mauve">7</p>
              <p className="text-[11px] text-plum/40 mt-0.5">Dias seguidos</p>
            </div>
          </div>
        </section>

        {/* ── Insights ── */}
        <section>
          <p className="text-eyebrow mb-3">Insights</p>
          <div className="space-y-2">
            <div className="flex items-start gap-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-plum-soft">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-plum">Tendência estável</p>
                <p className="text-xs text-plum/40 mt-0.5">Seu nível emocional se manteve entre 3 e 7 nos últimos 7 dias. Isso é um bom sinal de equilíbrio.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-plum-soft">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-plum">Melhor horário</p>
                <p className="text-xs text-plum/40 mt-0.5">Seus check-ins da manhã costumam ter níveis mais baixos. Tente manter sua rotina matinal de autocuidado.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-success-light/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-dark">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-plum">Conquista desbloqueada</p>
                <p className="text-xs text-plum/40 mt-0.5">7 dias seguidos de check-in! Sua consistência mostra comprometimento com seu bem-estar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Motivational quote ── */}
        <section className="pb-4">
          <ESCard variant="dark" className="bg-gradient-to-br from-plum via-plum-mid to-mauve-dark overflow-hidden relative">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <CardContent className="p-5 relative z-10">
              <p className="font-display text-lg italic text-cream/90 leading-relaxed">
                &ldquo;Registrar o que sentimos é um ato de coragem e autoconhecimento.&rdquo;
              </p>
              <p className="mt-2 text-sm text-cream/40">— Dra. Beatriz Almeida</p>
            </CardContent>
          </ESCard>
        </section>
      </Container>
    </div>
  )
}
