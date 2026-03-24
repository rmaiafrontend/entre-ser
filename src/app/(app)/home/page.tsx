'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'
import { Tag } from '@/components/ui/tag'
import { ContentCard } from '@/components/ui/content-card'
import { SectionHeader } from '@/components/ui/section-header'
import { NotificationItem } from '@/components/ui/notification-item'
import { ESCard, CardContent } from '@/components/ui/card'
import { ESAvatar } from '@/components/ui/avatar'
import { ESButton } from '@/components/ui/button'
import { ESProgressBar } from '@/components/ui/progress-bar'
import { mockUser, mockContent, mockNotifications, mockTrails, mockThermometerHistory } from '@/lib/mock-data'
import { PHASE_LABELS } from '@/types'

function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function IconCompass() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}
function IconMessageCircle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
function IconActivity() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function IconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function IconPulse() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/50">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

const quickActions = [
  { label: 'Comunidade', href: '/comunidade', icon: <IconUsers /> },
  { label: 'Agendar', href: '/agendamento', icon: <IconCalendar /> },
  { label: 'Trilhas', href: '/trilhas', icon: <IconCompass /> },
  { label: 'Assistente', href: '/assistente', icon: <IconMessageCircle /> },
]

const wellnessLinks = [
  { label: 'Termômetro', href: '/termometro', icon: <IconThermometer /> },
  { label: 'Diário', href: '/diario', icon: <IconEdit /> },
  { label: 'Fase', href: '/fase', icon: <IconActivity /> },
  { label: 'Triagem', href: '/triagem', icon: <IconHeart /> },
]

export default function HomePage() {
  const activeTrail = mockTrails.find((t) => t.progress > 0 && t.progress < 100)
  const thermAvg = Math.round(mockThermometerHistory.reduce((a, b) => a + b.value, 0) / mockThermometerHistory.length)

  return (
    <div className="min-h-screen">
      {/* ── Hero header with gradient ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-16 pt-10">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <div className="flex items-center gap-4">
            <ESAvatar name={mockUser.fullName} size="lg" isBordered />
            <div className="flex-1">
              <p className="text-cream/60 text-sm">Bem-vinda de volta</p>
              <h1 className="font-display text-2xl font-light text-cream">
                Olá, {mockUser.name}!
              </h1>
            </div>
            {/* Notification bell */}
            <Link
              href="#notificacoes"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-mauve text-[10px] font-bold text-white">
                {mockNotifications.filter((n) => n.isUnread).length}
              </span>
            </Link>
          </div>
        </Container>
      </div>

      {/* ── Phase card (overlapping the hero) ── */}
      <Container size="sm" className="-mt-10 relative z-20 px-4">
        <Link href="/fase">
          <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-mauve to-mauve-dark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-eyebrow">Sua fase atual</p>
                    <p className="font-display text-lg text-plum">{PHASE_LABELS[mockUser.phase]}</p>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plum/30">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <p className="text-sm text-plum/60 leading-relaxed">
                Aguardando o resultado do beta-HCG. Respire fundo, estamos com você.
              </p>
            </CardContent>
          </ESCard>
        </Link>
      </Container>

      <Container size="sm" className="px-4 pt-8 space-y-8">
        {/* ── Quick actions ── */}
        <section>
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-3 transition-all duration-300 hover:scale-[1.04] hover:shadow-[var(--shadow-card)] active:scale-95"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mauve-ghost">{action.icon}</span>
                <span className="text-[11px] font-medium text-plum text-center leading-tight">{action.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Wellness ── */}
        <section className="space-y-3">
          {/* Mood summary */}
          <Link
            href="/termometro"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-plum-soft to-mauve-ghost border border-plum/5 px-4 py-3 transition-all hover:shadow-[var(--shadow-card)]"
          >
            <IconPulse />
            <div className="flex-1">
              <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Sua semana</p>
              <p className="text-sm font-medium text-plum">Nível médio: {thermAvg}/10</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plum/30">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>

          {/* Wellness grid */}
          <div className="grid grid-cols-4 gap-2">
            {wellnessLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/40 py-3 transition-all hover:bg-white/70 active:scale-95"
              >
                {link.icon}
                <span className="text-[11px] font-medium text-plum">{link.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Continue trail ── */}
        {activeTrail && (
          <section>
            <SectionHeader
              eyebrow="Continue de onde parou"
              title={activeTrail.title}
              action={
                <Link href="/trilhas" className="text-sm text-mauve hover:text-mauve-dark transition-colors">
                  Ver todas →
                </Link>
              }
            />
            <Link href={`/trilhas/${activeTrail.id}`}>
              <ESCard className="mt-3 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-plum-soft shrink-0">
                      <IconCompass />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-plum/60">
                        Módulo {activeTrail.currentModule} de {activeTrail.modules} · Lição {activeTrail.currentLesson}
                      </p>
                      <div className="mt-2">
                        <ESProgressBar value={activeTrail.progress} showValueLabel size="sm" />
                      </div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-mauve shrink-0">
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" opacity="0.2" />
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </CardContent>
              </ESCard>
            </Link>
          </section>
        )}

        {/* ── Content for you — Carousel ── */}
        <ContentCarousel />

        {/* ── Notifications ── */}
        <section id="notificacoes">
          <SectionHeader
            title="Notificações"
            action={
              <Tag label={`${mockNotifications.filter((n) => n.isUnread).length} novas`} variant="primary" size="sm" />
            }
          />
          <ESCard className="mt-3">
            <CardContent className="p-0 divide-y divide-plum/5">
              {mockNotifications.map((notification) => (
                <NotificationItem
                  key={notification.title}
                  title={notification.title}
                  description={notification.description}
                  timestamp={notification.timestamp}
                  isUnread={notification.isUnread}
                />
              ))}
            </CardContent>
          </ESCard>
        </section>

        {/* ── Daily quote ── */}
        <section className="pb-4">
          <ESCard variant="dark" className="bg-gradient-to-br from-plum via-plum-mid to-mauve-dark overflow-hidden relative">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <CardContent className="p-6 relative z-10">
              <p className="font-display text-xl font-medium italic text-cream/90 leading-relaxed">
                &ldquo;Cada tentativa é um ato de coragem. Você não está sozinha nessa jornada.&rdquo;
              </p>
              <p className="mt-3 text-sm text-cream/50">— Dra. Beatriz Almeida</p>
            </CardContent>
          </ESCard>
        </section>
      </Container>
    </div>
  )
}

function ContentCarousel() {
  const items = mockContent.slice(0, 4)
  const [active, setActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / items.length
    const idx = Math.round(el.scrollLeft / cardWidth)
    setActive(idx)
  }, [items.length])

  return (
    <section>
      <SectionHeader
        title="Conteúdo para você"
        description="Selecionado para a fase Beta"
        action={
          <Link href="/feed" className="text-sm text-mauve hover:text-mauve-dark transition-colors">
            Ver tudo →
          </Link>
        }
      />
      {/* Carousel track — bleeds outside container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="mt-4 -mx-4 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, i) => (
          <div
            key={item.title}
            className={cn(
              'snap-start shrink-0 w-[72%] pl-3',
              i === 0 && 'pl-4',
            )}
          >
            <ContentCard
              title={item.title}
              type={item.type}
              duration={item.duration}
              phase={item.phase}
              isFavorited={item.isFavorited}
            />
          </div>
        ))}
        {/* End spacer */}
        <div className="shrink-0 w-4" />
      </div>
      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current
              if (!el) return
              const cardWidth = el.scrollWidth / items.length
              el.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
            }}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'w-6 h-2 bg-mauve'
                : 'w-2 h-2 bg-plum/15 hover:bg-plum/25'
            }`}
            aria-label={`Ir para card ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
