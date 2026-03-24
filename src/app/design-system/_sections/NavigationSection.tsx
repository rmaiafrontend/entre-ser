'use client'

import { SectionHeader } from '@/components/ui/section-header'
import { ESTabs } from '@/components/ui/tabs'
import { ESBreadcrumb } from '@/components/ui/breadcrumb'
import { BottomNav } from '@/components/ui/bottom-nav'

const tabItems = [
  { key: 'visao-geral', label: 'Visão Geral', content: <p className="py-4 text-sm text-plum/60">Conteúdo da aba Visão Geral. Aqui você encontra um resumo da sua jornada.</p> },
  { key: 'atividades', label: 'Atividades', content: <p className="py-4 text-sm text-plum/60">Conteúdo da aba Atividades. Acompanhe suas tarefas e exercícios.</p> },
  { key: 'historico', label: 'Histórico', content: <p className="py-4 text-sm text-plum/60">Conteúdo da aba Histórico. Reveja seu progresso ao longo do tempo.</p> },
]

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const bottomNavItems = [
  { key: 'home', label: 'Home', icon: <HomeIcon />, activeIcon: <HomeIcon />, href: '#' },
  { key: 'comunidade', label: 'Comunidade', icon: <UsersIcon />, activeIcon: <UsersIcon />, href: '#' },
  { key: 'agendar', label: 'Agendar', icon: <CalendarIcon />, activeIcon: <CalendarIcon />, href: '#' },
  { key: 'feed', label: 'Feed', icon: <BookIcon />, activeIcon: <BookIcon />, href: '#' },
  { key: 'perfil', label: 'Perfil', icon: <UserIcon />, activeIcon: <UserIcon />, href: '#' },
]

export function NavigationSection() {
  return (
    <section className="py-16">
      <SectionHeader eyebrow="Componentes" title="Navegação" className="mb-8" />

      <div className="space-y-12">
        {/* Tabs underlined */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESTabs — underlined</h3>
          <ESTabs items={tabItems} variant="underlined" />
        </div>

        {/* Tabs solid */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESTabs — solid</h3>
          <ESTabs items={tabItems} variant="solid" />
        </div>

        {/* Breadcrumb */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESBreadcrumb</h3>
          <ESBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Trilhas', href: '/trilhas' },
              { label: 'Regulação Emocional' },
            ]}
          />
        </div>

        {/* BottomNav */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">BottomNav</h3>
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-xl border border-plum/10 bg-cream">
            <div className="px-4 py-8 text-center text-sm text-plum/40">
              Simulação de tela mobile
            </div>
            <BottomNav
              items={bottomNavItems}
              activeKey="home"
              className="!relative !bottom-auto !left-auto !z-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
