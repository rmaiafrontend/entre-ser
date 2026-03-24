'use client'

import { SectionHeader } from '@/components/ui/section-header'

interface SwatchProps {
  name: string
  hex: string
  bgClass: string
  textLight?: boolean
}

function Swatch({ name, hex, bgClass, textLight = false }: SwatchProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`h-20 w-20 rounded-xl border border-plum/10 ${bgClass}`}
        title={`${name} — ${hex}`}
      />
      <span className="text-sm font-medium text-plum">{name}</span>
      <span className="text-xs text-plum/50">{hex}</span>
    </div>
  )
}

interface SwatchGroupProps {
  title: string
  swatches: SwatchProps[]
}

function SwatchGroup({ title, swatches }: SwatchGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-display text-xl font-medium text-plum">{title}</h3>
      <div className="flex flex-wrap gap-6">
        {swatches.map((swatch) => (
          <Swatch key={swatch.name} {...swatch} />
        ))}
      </div>
    </div>
  )
}

export function ColorsSection() {
  return (
    <div id="colors" className="py-16">
      <SectionHeader
        eyebrow="Fundamentos"
        title="Cores"
        description="Paleta completa do entre ser, organizada por grupos semânticos."
      />

      <div className="mt-10 flex flex-col gap-12">
        <SwatchGroup
          title="Ameixa (Plum)"
          swatches={[
            { name: 'plum', hex: '#2D1840', bgClass: 'bg-plum', textLight: true },
            { name: 'plum-mid', hex: '#3F2558', bgClass: 'bg-plum-mid', textLight: true },
            { name: 'plum-light', hex: '#6B4A8A', bgClass: 'bg-plum-light', textLight: true },
            { name: 'plum-soft', hex: '#EDE6F4', bgClass: 'bg-plum-soft' },
          ]}
        />

        <SwatchGroup
          title="Mauve (Accent)"
          swatches={[
            { name: 'mauve', hex: '#7A4A5C', bgClass: 'bg-mauve', textLight: true },
            { name: 'mauve-dark', hex: '#512F3D', bgClass: 'bg-mauve-dark', textLight: true },
            { name: 'mauve-mid', hex: '#A07080', bgClass: 'bg-mauve-mid', textLight: true },
            { name: 'mauve-soft', hex: '#E8D5DA', bgClass: 'bg-mauve-soft' },
            { name: 'mauve-ghost', hex: '#F5EDEF', bgClass: 'bg-mauve-ghost' },
          ]}
        />

        <SwatchGroup
          title="Creme (Surface)"
          swatches={[
            { name: 'cream', hex: '#F5EDE0', bgClass: 'bg-cream' },
            { name: 'cream-mid', hex: '#EBD9C4', bgClass: 'bg-cream-mid' },
            { name: 'cream-dark', hex: '#D4BC9E', bgClass: 'bg-cream-dark' },
          ]}
        />

        <SwatchGroup
          title="Semânticos"
          swatches={[
            { name: 'background', hex: '#F5EDE0', bgClass: 'bg-[#F5EDE0]' },
            { name: 'foreground', hex: '#1A0A28', bgClass: 'bg-[#1A0A28]', textLight: true },
            { name: 'surface', hex: '#FFFFFF', bgClass: 'bg-white' },
            { name: 'danger', hex: '#A03040', bgClass: 'bg-[#A03040]', textLight: true },
            { name: 'success', hex: '#2A6E2A', bgClass: 'bg-[#2A6E2A]', textLight: true },
            { name: 'warning', hex: '#7A5C00', bgClass: 'bg-[#7A5C00]', textLight: true },
          ]}
        />
      </div>
    </div>
  )
}
