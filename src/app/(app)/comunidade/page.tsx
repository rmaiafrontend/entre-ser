'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'
import { ESAvatar } from '@/components/ui/avatar'
import { ESButton } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { mockPosts } from '@/lib/mock-data'

const FILTERS = [
  { key: 'Todas', icon: null },
  { key: 'Dúvidas', icon: '?' },
  { key: 'Experiências', icon: '💬' },
  { key: 'Apoio', icon: '🤝' },
  { key: 'Conquistas', icon: '✨' },
]

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={filled ? 'text-mauve' : 'text-plum/30'}>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/30">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-plum/30">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )
}

export default function ComunidadePage() {
  const [activeFilter, setActiveFilter] = useState('Todas')
  const [posts, setPosts] = useState(
    mockPosts.map((post, i) => ({ ...post, id: i }))
  )

  function handleToggleLike(id: number) {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likesCount: post.isLiked ? post.likesCount - 1 : post.likesCount + 1,
            }
          : post
      )
    )
  }

  const filteredPosts =
    activeFilter === 'Todas'
      ? posts
      : posts.filter((post) => post.topic === activeFilter)

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-14 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <Container size="sm" className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Espaço seguro</p>
              <h1 className="font-display text-3xl font-light text-cream mt-1">
                Comunidade
              </h1>
            </div>
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {/* Stats strip */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-success-light animate-pulse" />
              <span className="text-sm text-cream/60">127 online</span>
            </div>
            <span className="text-cream/20">·</span>
            <span className="text-sm text-cream/60">342 membros</span>
          </div>
        </Container>
      </div>

      {/* ── WhatsApp card (overlapping hero) ── */}
      <Container size="sm" className="-mt-8 relative z-20 px-4">
        <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl">
          <CardContent className="p-4 flex flex-col items-center gap-3 text-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-success-dark to-success-dark/80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fillRule="evenodd" />
              </svg>
            </span>
            <div>
              <p className="font-medium text-sm text-plum">Grupo no WhatsApp</p>
              <p className="text-xs text-plum/50 mt-0.5">Troque experiências em tempo real</p>
            </div>
            <ESButton variant="ghost" size="sm">Entrar</ESButton>
          </CardContent>
        </ESCard>
      </Container>

      <Container size="sm" className="px-4 pt-5 space-y-5">
        {/* ── Filters ── */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {FILTERS.map((filter) => {
            const isActive = filter.key === activeFilter
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  'shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-all duration-200',
                  'min-h-[40px]',
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

        {/* ── New post CTA ── */}
        <button
          type="button"
          className="w-full flex items-center gap-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-3.5 transition-all hover:bg-white/80"
        >
          <ESAvatar name="Ana" size="sm" />
          <span className="text-sm text-plum/40 text-left flex-1">No que você está pensando?</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mauve/10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-mauve">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </button>

        {/* ── Posts feed ── */}
        <section className="space-y-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 overflow-hidden"
            >
              {/* Author header */}
              <div className="flex items-center gap-3 px-4 pt-4 pb-2">
                <ESAvatar name={post.authorName} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-plum">{post.authorName}</p>
                  <p className="text-[11px] text-plum/40">{post.timestamp}</p>
                </div>
                {post.topic && (
                  <span className="rounded-full bg-plum/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-plum/50">
                    {post.topic}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="px-4 pb-3">
                <p className="text-[15px] leading-relaxed text-plum/80">{post.content}</p>
              </div>

              {/* Actions bar */}
              <div className="flex items-center border-t border-plum/5 px-2">
                <button
                  type="button"
                  onClick={() => handleToggleLike(post.id)}
                  className="flex items-center gap-1.5 px-3 py-3 transition-colors hover:bg-plum/5 rounded-lg"
                >
                  <HeartIcon filled={post.isLiked} />
                  <span className={cn('text-xs', post.isLiked ? 'text-mauve font-medium' : 'text-plum/40')}>
                    {post.likesCount}
                  </span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-3 transition-colors hover:bg-plum/5 rounded-lg"
                >
                  <CommentIcon />
                  <span className="text-xs text-plum/40">{post.commentsCount}</span>
                </button>

                <div className="flex-1" />

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-3 transition-colors hover:bg-plum/5 rounded-lg"
                >
                  <ShareIcon />
                </button>
              </div>
            </article>
          ))}

          {filteredPosts.length === 0 && (
            <div className="py-16 text-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-plum/15 mx-auto mb-3">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <p className="text-sm text-plum/40">Nenhuma publicação nesta categoria.</p>
            </div>
          )}
        </section>
      </Container>
    </div>
  )
}
