'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/ui/section-header'
import { ESSpinner } from '@/components/ui/spinner'
import { ESSkeleton } from '@/components/ui/skeleton'
import { Tag } from '@/components/ui/tag'
import { ESBadge } from '@/components/ui/badge'
import { ESAvatar } from '@/components/ui/avatar'
import { ToastProvider, useToast } from '@/components/ui/toast'
import { ESButton } from '@/components/ui/button'

function ToastDemo() {
  const { showToast } = useToast()

  return (
    <div className="flex flex-wrap gap-3">
      <ESButton variant="ghost" size="sm" onPress={() => showToast('Informação salva com sucesso.', 'info')}>
        Toast Info
      </ESButton>
      <ESButton variant="ghost" size="sm" onPress={() => showToast('Sessão agendada!', 'success')}>
        Toast Sucesso
      </ESButton>
      <ESButton variant="ghost" size="sm" onPress={() => showToast('Sua sessão expira em 5 minutos.', 'warning')}>
        Toast Aviso
      </ESButton>
      <ESButton variant="ghost" size="sm" onPress={() => showToast('Não conseguimos processar sua solicitação.', 'error')}>
        Toast Erro
      </ESButton>
    </div>
  )
}

export function FeedbackSection() {
  const [tags, setTags] = useState(['Meditação', 'Yoga', 'Terapia'])

  return (
    <section className="py-16">
      <SectionHeader eyebrow="Componentes" title="Feedback & Loading" className="mb-8" />

      <div className="space-y-12">
        {/* Spinners */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESSpinner</h3>
          <div className="flex items-end gap-8">
            <div className="flex flex-col items-center gap-2">
              <ESSpinner size="sm" />
              <span className="text-xs text-plum/50">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESSpinner size="md" />
              <span className="text-xs text-plum/50">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESSpinner size="lg" label="Carregando..." />
              <span className="text-xs text-plum/50">lg + label</span>
            </div>
          </div>
        </div>

        {/* Skeletons */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESSkeleton</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <span className="text-xs text-plum/50">text</span>
              <ESSkeleton variant="text" />
              <ESSkeleton variant="text" width="75%" />
              <ESSkeleton variant="text" width="50%" />
            </div>
            <div className="space-y-2">
              <span className="text-xs text-plum/50">circular</span>
              <ESSkeleton variant="circular" />
            </div>
            <div className="space-y-2">
              <span className="text-xs text-plum/50">rectangular</span>
              <ESSkeleton variant="rectangular" />
            </div>
            <div className="space-y-2">
              <span className="text-xs text-plum/50">card</span>
              <ESSkeleton variant="card" />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">Tag</h3>
          <div className="flex flex-wrap gap-3">
            <Tag label="Comunidade" variant="primary" />
            <Tag label="Terapia" variant="plum" />
            <Tag label="Opcional" variant="muted" />
            {tags.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                variant="primary"
                isCloseable
                onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
              />
            ))}
          </div>
        </div>

        {/* Badges */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESBadge</h3>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <ESBadge content="3" color="primary">
                <ESAvatar name="Ana" size="md" />
              </ESBadge>
              <span className="text-xs text-plum/50">primary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESBadge content="1" color="danger">
                <ESAvatar name="Bia" size="md" />
              </ESBadge>
              <span className="text-xs text-plum/50">danger</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESBadge content="7" color="success">
                <ESAvatar name="Cami" size="md" />
              </ESBadge>
              <span className="text-xs text-plum/50">success</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESBadge content="" color="primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-plum-soft">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-plum">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
              </ESBadge>
              <span className="text-xs text-plum/50">dot em ícone</span>
            </div>
          </div>
        </div>

        {/* Toast */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">Toast</h3>
          <ToastProvider>
            <ToastDemo />
          </ToastProvider>
        </div>
      </div>
    </section>
  )
}
