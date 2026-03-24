'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'
import { ESButton } from '@/components/ui/button'
import { TextareaInput } from '@/components/ui/textarea-input'
import { mockDiaryEntries } from '@/lib/mock-data'
import type { EmotionType } from '@/types'
import { EMOTION_LABELS } from '@/types'
import { cn } from '@/lib/utils'

const EMOTIONS: { key: EmotionType; icon: React.ReactNode; color: string; bg: string }[] = [
  {
    key: 'alegria',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    key: 'ansiedade',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    key: 'tristeza',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c-4.97 0-9-2.24-9-5v0c0-2.76 4.03-5 9-5s9 2.24 9 5c0 2.76-4.03 5-9 5z" />
        <path d="M7 8l2 3m0-3l-2 3m8-3l2 3m0-3l-2 3" /><path d="M12 2v5" />
      </svg>
    ),
  },
  {
    key: 'esperanca',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><path d="M8 5.2A4 4 0 0 1 12 2a4 4 0 0 1 4 3.2" />
      </svg>
    ),
  },
  {
    key: 'exaustao',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="18" height="12" rx="2" /><line x1="23" y1="13" x2="23" y2="11" /><path d="M6 10h4m-2-2v4" />
      </svg>
    ),
  },
]

function getEmotionConfig(emotion: EmotionType) {
  return EMOTIONS.find((e) => e.key === emotion) ?? EMOTIONS[0]
}

export default function DiarioPage() {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(null)
  const [entryText, setEntryText] = useState('')
  const [filterEmotion, setFilterEmotion] = useState<EmotionType | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const filteredEntries = filterEmotion
    ? mockDiaryEntries.filter((e) => e.emotion === filterEmotion)
    : mockDiaryEntries

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-16 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Espaço seguro</p>
              <h1 className="font-display text-3xl font-light text-cream mt-1">Diário Emocional</h1>
            </div>
            <button
              type="button"
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cn('text-cream transition-transform duration-200', isFormOpen && 'rotate-45')}>
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-5 mt-5">
            <div>
              <p className="text-2xl font-display font-light text-cream">{mockDiaryEntries.length}</p>
              <p className="text-[11px] text-cream/40 uppercase tracking-wider">Entradas</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-display font-light text-cream">7</p>
              <p className="text-[11px] text-cream/40 uppercase tracking-wider">Dias seguidos</p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Daily prompt (overlapping hero) ── */}
      <Container size="sm" className="-mt-8 relative z-20 px-4">
        <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-mauve to-plum-light" />
          <CardContent className="p-5">
            <p className="text-eyebrow mb-1">Reflexão do dia</p>
            <p className="font-display text-base italic text-plum/70 leading-relaxed">
              &ldquo;O que você está sentindo sobre o resultado do beta?&rdquo;
            </p>

            {!isFormOpen && (
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="mt-3 flex items-center gap-2 text-sm text-mauve font-medium hover:text-mauve-dark transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Escrever entrada
              </button>
            )}
          </CardContent>
        </ESCard>
      </Container>

      <Container size="sm" className="px-4 pt-5 space-y-5 pb-8">
        {/* ── New entry form ── */}
        {isFormOpen && (
          <section className="space-y-4">
            {/* Emotion selector */}
            <div>
              <p className="text-eyebrow mb-3">Como você está?</p>
              <div className="grid grid-cols-5 gap-2">
                {EMOTIONS.map((emo) => {
                  const isSelected = selectedEmotion === emo.key
                  return (
                    <button
                      key={emo.key}
                      type="button"
                      onClick={() => setSelectedEmotion(isSelected ? null : emo.key)}
                      className={cn(
                        'flex flex-col items-center gap-1.5 rounded-2xl py-3 transition-all duration-200',
                        'hover:scale-[1.03] active:scale-95',
                        isSelected
                          ? `${emo.bg} ring-2 ring-offset-1 ring-current ${emo.color}`
                          : 'bg-white/50 backdrop-blur-sm border border-white/40 text-plum/40 hover:bg-white/70'
                      )}
                    >
                      {emo.icon}
                      <span className="text-[10px] font-medium leading-tight">{EMOTION_LABELS[emo.key]}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Text entry */}
            <TextareaInput
              label="Sua reflexão"
              placeholder="Escreva o que está no seu coração..."
              value={entryText}
              onChange={setEntryText}
              minRows={4}
            />

            {/* Actions */}
            <div className="flex gap-3">
              <ESButton variant="ghost" onPress={() => setIsFormOpen(false)} className="flex-1">
                Cancelar
              </ESButton>
              <ESButton
                isDisabled={!selectedEmotion || !entryText}
                className={cn('flex-[2]', (!selectedEmotion || !entryText) && 'opacity-40')}
              >
                Salvar entrada
              </ESButton>
            </div>
          </section>
        )}

        {/* ── History ── */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <p className="text-eyebrow">Histórico</p>
            <span className="text-xs text-plum/30">{filteredEntries.length} entradas</span>
          </div>

          {/* Emotion filters */}
          <div className="flex justify-start gap-2 mb-4" style={{ scrollbarWidth: 'none' }}>
            <button
              type="button"
              onClick={() => setFilterEmotion(null)}
              className={cn(
                'shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-200 min-h-[36px]',
                filterEmotion === null
                  ? 'bg-plum text-cream shadow-sm'
                  : 'bg-white/60 backdrop-blur-sm border border-white/40 text-plum/60 hover:bg-white/80'
              )}
            >
              Todas
            </button>
            {EMOTIONS.map((emo) => {
              const isActive = filterEmotion === emo.key
              return (
                <button
                  key={emo.key}
                  type="button"
                  onClick={() => setFilterEmotion(isActive ? null : emo.key)}
                  className={cn(
                    'shrink-0 flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-all duration-200 min-h-[36px]',
                    isActive
                      ? `${emo.bg} ${emo.color} shadow-sm`
                      : 'bg-white/60 backdrop-blur-sm border border-white/40 text-plum/60 hover:bg-white/80'
                  )}
                >
                  <span className={cn('flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4', isActive ? emo.color : 'text-plum/40')}>{emo.icon}</span>
                </button>
              )
            })}
          </div>

          {/* Entries */}
          <div className="space-y-3">
            {filteredEntries.map((entry, i) => {
              const emo = getEmotionConfig(entry.emotion)
              return (
                <article
                  key={i}
                  className="flex gap-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 transition-all hover:bg-white/80 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {/* Emotion icon */}
                  <span className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', emo.bg, emo.color)}>
                    {emo.icon}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-plum">{entry.date}</p>
                      <span className={cn('text-[10px] font-medium uppercase tracking-wider', emo.color)}>
                        {EMOTION_LABELS[entry.emotion]}
                      </span>
                    </div>
                    <p className="text-sm text-plum/50 mt-1 line-clamp-2 leading-relaxed">
                      {entry.excerpt}
                    </p>
                  </div>
                </article>
              )
            })}

            {filteredEntries.length === 0 && (
              <div className="py-16 text-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-plum/15 mx-auto mb-3">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                <p className="text-sm text-plum/40">Nenhuma entrada com essa emoção.</p>
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  )
}
