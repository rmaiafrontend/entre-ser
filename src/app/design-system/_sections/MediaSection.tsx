'use client'

import { SectionHeader } from '@/components/ui/section-header'
import { ESAvatar } from '@/components/ui/avatar'
import { ESProgressBar } from '@/components/ui/progress-bar'

export function MediaSection() {
  return (
    <section className="py-16">
      <SectionHeader eyebrow="Componentes" title="Mídia" className="mb-8" />

      <div className="space-y-12">
        {/* Avatars */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESAvatar</h3>
          <div className="flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <ESAvatar name="Ana" size="sm" />
              <span className="text-xs text-plum/50">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESAvatar name="Beatriz" size="md" />
              <span className="text-xs text-plum/50">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESAvatar name="Camila" size="lg" />
              <span className="text-xs text-plum/50">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESAvatar name="Daniela" size="md" isBordered />
              <span className="text-xs text-plum/50">com borda</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESAvatar size="md" isBordered />
              <span className="text-xs text-plum/50">sem nome</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ESAvatar
                src="https://i.pravatar.cc/150?u=entre-ser"
                name="Foto"
                size="lg"
                isBordered
              />
              <span className="text-xs text-plum/50">lg + imagem</span>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESProgressBar</h3>
          <div className="max-w-md space-y-6">
            <ESProgressBar value={0} label="Não iniciado" showValueLabel />
            <ESProgressBar value={25} label="Início da jornada" showValueLabel />
            <ESProgressBar value={50} label="Metade do caminho" showValueLabel />
            <ESProgressBar value={75} label="Quase lá" showValueLabel />
            <ESProgressBar value={100} label="Concluído" showValueLabel color="success" />
            <div className="pt-4">
              <h4 className="mb-3 text-xs text-plum/50">Tamanhos</h4>
              <div className="space-y-4">
                <ESProgressBar value={60} label="sm" size="sm" showValueLabel />
                <ESProgressBar value={60} label="md" size="md" showValueLabel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
