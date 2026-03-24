'use client'

import { usePathname } from 'next/navigation'
import { BottomNav } from '@/components/ui/bottom-nav'
import { ToastProvider } from '@/components/ui/toast'

const S = { w: '22', h: '22', vb: '0 0 24 24', sw: '1.5' } as const

const navItems = [
  {
    key: 'home',
    label: 'Home',
    href: '/home',
    icon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="none" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    activeIcon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="currentColor" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <rect x="9" y="12" width="6" height="10" fill="white" rx="0" />
      </svg>
    ),
  },
  {
    key: 'comunidade',
    label: 'Social',
    href: '/comunidade',
    icon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="none" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    activeIcon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="currentColor" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    key: 'agendamento',
    label: 'Agendar',
    href: '/agendamento',
    icon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="none" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    activeIcon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="currentColor" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" /><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" />
        <rect x="3" y="10" width="18" height="12" rx="0" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 'feed',
    label: 'Feed',
    href: '/feed',
    icon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="none" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    activeIcon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="currentColor" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    key: 'perfil',
    label: 'Perfil',
    href: '/perfil',
    icon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="none" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    activeIcon: (
      <svg width={S.w} height={S.h} viewBox={S.vb} fill="currentColor" stroke="currentColor" strokeWidth={S.sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

function getActiveKey(pathname: string): string {
  if (pathname.startsWith('/home')) return 'home'
  if (pathname.startsWith('/comunidade')) return 'comunidade'
  if (pathname.startsWith('/agendamento')) return 'agendamento'
  if (pathname.startsWith('/feed')) return 'feed'
  if (pathname.startsWith('/perfil')) return 'perfil'
  return 'home'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const activeKey = getActiveKey(pathname)

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background pb-24">
        {children}
      </div>
      <BottomNav items={navItems} activeKey={activeKey} />
    </ToastProvider>
  )
}
