'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { ESButton } from '@/components/ui/button'
import { ESCard, CardContent } from '@/components/ui/card'
import { CalendarSimple } from '@/components/ui/calendar-simple'
import { cn } from '@/lib/utils'
import {
  mockScheduleSlots,
  mockAppointments,
  availableCalendarDays,
} from '@/lib/mock-data'

const SESSION_TYPES = [
  { key: 'Individual', icon: <IconUser />, desc: '50 min · R$ 180' },
  { key: 'Casal', icon: <IconUsers />, desc: '60 min · R$ 240' },
  { key: 'Grupo', icon: <IconGroup />, desc: '90 min · R$ 90' },
  { key: 'Consultoria', icon: <IconClipboard />, desc: '30 min · R$ 120' },
]

function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IconGroup() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}
function IconClipboard() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/40">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IconVideo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/40">
      <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-dark">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function AgendamentoPage() {
  const [selectedType, setSelectedType] = useState('Individual')
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined)
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>(undefined)
  const [viewTab, setViewTab] = useState<'agendar' | 'consultas'>('agendar')

  const activeSession = SESSION_TYPES.find((s) => s.key === selectedType)
  const canConfirm = selectedDay && selectedSlot

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-14 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Cuidar de você</p>
          <h1 className="font-display text-3xl font-light text-cream mt-1">Agendamento</h1>

          {/* Tab toggle */}
          <div className="mt-5 flex rounded-xl bg-white/10 backdrop-blur-sm p-1">
            <button
              type="button"
              onClick={() => setViewTab('agendar')}
              className={cn(
                'flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200',
                viewTab === 'agendar'
                  ? 'bg-white/20 text-cream shadow-sm'
                  : 'text-cream/50 hover:text-cream/70'
              )}
            >
              Novo agendamento
            </button>
            <button
              type="button"
              onClick={() => setViewTab('consultas')}
              className={cn(
                'flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200',
                viewTab === 'consultas'
                  ? 'bg-white/20 text-cream shadow-sm'
                  : 'text-cream/50 hover:text-cream/70'
              )}
            >
              Minhas consultas
            </button>
          </div>
        </Container>
      </div>

      {viewTab === 'agendar' ? (
        <>
          {/* ── Session type cards (overlapping hero) ── */}
          <Container size="sm" className="-mt-4 relative z-20 px-4">
            <div className="grid grid-cols-2 gap-2">
              {SESSION_TYPES.map((type) => {
                const isActive = type.key === selectedType
                return (
                  <button
                    key={type.key}
                    type="button"
                    onClick={() => setSelectedType(type.key)}
                    className={cn(
                      'flex flex-col items-start gap-2 rounded-2xl p-4 text-left transition-all duration-200',
                      isActive
                        ? 'bg-white/90 backdrop-blur-xl border-2 border-mauve shadow-[var(--shadow-card)]'
                        : 'bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80'
                    )}
                  >
                    <span className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-xl transition-colors',
                      isActive ? 'bg-mauve/10 text-mauve' : 'bg-plum/5 text-plum/40'
                    )}>
                      {type.icon}
                    </span>
                    <span className={cn(
                      'text-sm font-medium',
                      isActive ? 'text-plum' : 'text-plum/70'
                    )}>
                      {type.key}
                    </span>
                    <span className="text-[11px] text-plum/40">{type.desc}</span>
                  </button>
                )
              })}
            </div>
          </Container>

          <Container size="sm" className="px-4 pt-6 space-y-6">
            {/* ── Calendar ── */}
            <section>
              <p className="text-eyebrow mb-3">Escolha o dia</p>
              <ESCard className="border-none shadow-[var(--shadow-card)]">
                <CardContent className="p-4">
                  <CalendarSimple
                    availableDays={availableCalendarDays}
                    selectedDay={selectedDay}
                    onDaySelect={(day) => {
                      setSelectedDay(day)
                      setSelectedSlot(undefined)
                    }}
                  />
                </CardContent>
              </ESCard>
            </section>

            {/* ── Time slots ── */}
            {selectedDay && (
              <section>
                <p className="text-eyebrow mb-3">Horários — dia {selectedDay}</p>
                <div className="grid grid-cols-3 gap-2">
                  {mockScheduleSlots.map((slot) => {
                    const isSelected = slot.time === selectedSlot
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => slot.available && setSelectedSlot(slot.time)}
                        className={cn(
                          'flex items-center justify-center gap-1.5 rounded-xl py-3 text-sm font-medium transition-all duration-200',
                          'min-h-[48px]',
                          isSelected
                            ? 'bg-plum text-cream shadow-sm'
                            : slot.available
                              ? 'bg-white/60 backdrop-blur-sm border border-white/40 text-plum hover:bg-white/80'
                              : 'bg-plum/[0.03] text-plum/20 cursor-not-allowed'
                        )}
                      >
                        {isSelected && <IconCheck />}
                        {slot.time}
                      </button>
                    )
                  })}
                </div>
              </section>
            )}

            {/* ── Summary + Confirm ── */}
            <section>
              <ESCard className={cn(
                'border-none overflow-hidden transition-all duration-300',
                canConfirm ? 'shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-sm border border-white/40'
              )}>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-mauve to-mauve-dark">
                      {activeSession?.icon && <span className="text-white">{activeSession.icon}</span>}
                    </span>
                    <div>
                      <p className="font-medium text-sm text-plum">Sessão {selectedType}</p>
                      <p className="text-xs text-plum/40">
                        {selectedDay ? `Dia ${selectedDay}` : 'Selecione o dia'}
                        {selectedSlot ? ` às ${selectedSlot}` : selectedDay ? ' · selecione o horário' : ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-plum/50 pt-1">
                    <span className="flex items-center gap-1"><IconClock /> 50 min</span>
                    <span className="flex items-center gap-1"><IconVideo /> Online</span>
                    <span className="ml-auto font-medium text-sm text-plum">R$ 180</span>
                  </div>

                  <ESButton
                    fullWidth
                    size="lg"
                    isDisabled={!canConfirm}
                    className={cn(!canConfirm && 'opacity-40')}
                  >
                    Confirmar agendamento
                  </ESButton>
                </CardContent>
              </ESCard>
            </section>
          </Container>
        </>
      ) : (
        /* ── Minhas consultas ── */
        <Container size="sm" className="px-4 pt-6 space-y-4">
          {/* Próximas */}
          <section>
            <p className="text-eyebrow mb-3">Próximas</p>
            {mockAppointments.upcoming.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-sm text-plum/40">Nenhuma consulta agendada.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {mockAppointments.upcoming.map((appt) => (
                  <ESCard key={`${appt.date}-${appt.time}`} className="border-2 border-mauve/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mauve/10 text-mauve">
                          <IconVideo />
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm text-plum">{appt.type}</p>
                            <span className="rounded-full bg-mauve/10 px-2 py-0.5 text-[10px] font-medium text-mauve">Confirmada</span>
                          </div>
                          <p className="text-sm text-plum/60 mt-1">{appt.date} às {appt.time}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-plum/40">
                            <span className="flex items-center gap-1"><IconClock /> {appt.duration}</span>
                            <span className="flex items-center gap-1"><IconVideo /> {appt.format}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </ESCard>
                ))}
              </div>
            )}
          </section>

          {/* Histórico */}
          <section>
            <p className="text-eyebrow mb-3">Histórico</p>
            <div className="space-y-2">
              {mockAppointments.history.map((appt) => (
                <div
                  key={`${appt.date}-${appt.time}`}
                  className="flex items-center gap-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/40 p-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-plum/5 text-plum/30">
                    <IconCheck />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-plum">{appt.type}</p>
                    <p className="text-xs text-plum/40">{appt.date} às {appt.time}</p>
                  </div>
                  <span className="text-xs text-plum/30">{appt.duration}</span>
                </div>
              ))}
            </div>
          </section>
        </Container>
      )}
    </div>
  )
}
