'use client'

import { SectionHeader } from '@/components/ui/section-header'
import { Container } from '@/components/ui/container'
import { ESDivider } from '@/components/ui/divider'
import { ESButton } from '@/components/ui/button'

export function LayoutSection() {
  return (
    <section className="py-16">
      <SectionHeader eyebrow="Componentes" title="Layout" className="mb-8" />

      <div className="space-y-12">
        {/* Container sizes */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">Container — tamanhos</h3>
          <div className="space-y-4">
            <Container size="sm" className="rounded-lg border border-dashed border-mauve/30 py-3">
              <p className="text-center text-xs text-plum/50">sm — max-w-lg</p>
            </Container>
            <Container size="md" className="rounded-lg border border-dashed border-mauve/30 py-3">
              <p className="text-center text-xs text-plum/50">md — max-w-2xl</p>
            </Container>
            <Container size="lg" className="rounded-lg border border-dashed border-mauve/30 py-3">
              <p className="text-center text-xs text-plum/50">lg — max-w-5xl</p>
            </Container>
            <Container size="full" className="rounded-lg border border-dashed border-mauve/30 py-3">
              <p className="text-center text-xs text-plum/50">full — 100%</p>
            </Container>
          </div>
        </div>

        {/* Dividers */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ESDivider</h3>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs text-plum/50">Horizontal</p>
              <ESDivider />
            </div>
            <div>
              <p className="mb-2 text-xs text-plum/50">Vertical (dentro de um flex)</p>
              <div className="flex h-16 items-center gap-4">
                <span className="text-sm text-plum/60">Seção A</span>
                <ESDivider orientation="vertical" />
                <span className="text-sm text-plum/60">Seção B</span>
                <ESDivider orientation="vertical" />
                <span className="text-sm text-plum/60">Seção C</span>
              </div>
            </div>
          </div>
        </div>

        {/* SectionHeader variations */}
        <div>
          <h3 className="mb-6 text-sm font-medium text-plum/70">SectionHeader — variações</h3>
          <div className="space-y-8 rounded-xl border border-plum/10 bg-white p-6">
            <SectionHeader eyebrow="Eyebrow" title="Apenas eyebrow + título" />
            <ESDivider />
            <SectionHeader
              title="Título + descrição"
              description="Uma descrição complementar que ajuda a contextualizar o conteúdo desta seção."
            />
            <ESDivider />
            <SectionHeader
              title="Título + ação"
              action={<ESButton variant="ghost" size="sm">Ver tudo</ESButton>}
            />
            <ESDivider />
            <SectionHeader
              eyebrow="Completo"
              title="Todas as props juntas"
              description="Eyebrow, título, descrição e botão de ação combinados em um único header."
              action={<ESButton variant="secondary" size="sm">Explorar</ESButton>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
