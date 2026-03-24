'use client'

import { SectionHeader } from '@/components/ui/section-header'

interface TypeSampleProps {
  label: string
  className: string
  text: string
  specs: string
}

function TypeSample({ label, className, text, specs }: TypeSampleProps) {
  return (
    <div className="flex flex-col gap-2 border-b border-plum/5 pb-8">
      <span className="text-eyebrow">{label}</span>
      <p className={className}>{text}</p>
      <span className="font-body text-xs text-plum/40">{specs}</span>
    </div>
  )
}

export function TypographySection() {
  return (
    <div id="typography" className="py-16">
      <SectionHeader
        eyebrow="Fundamentos"
        title="Tipografia"
        description="Escala tipográfica com Cormorant Garamond (display) e DM Sans (body)."
      />

      <div className="mt-10 flex flex-col gap-8">
        <TypeSample
          label="HERO / DISPLAY"
          className="font-display text-[52px] font-light leading-tight text-plum"
          text="Cuidar de quem tenta"
          specs="Cormorant Garamond · 300 · 52px"
        />

        <TypeSample
          label="H1"
          className="font-display text-4xl font-normal text-plum"
          text="Sua jornada importa"
          specs="Cormorant Garamond · 400 · 36px"
        />

        <TypeSample
          label="H2"
          className="font-display text-[26px] font-medium text-plum"
          text="Trilhas terapêuticas"
          specs="Cormorant Garamond · 500 · 26px"
        />

        <TypeSample
          label="H3"
          className="font-display text-xl font-medium text-plum"
          text="Regulação emocional"
          specs="Cormorant Garamond · 500 · 20px"
        />

        <TypeSample
          label="QUOTE"
          className="font-display text-xl font-medium italic text-plum/80"
          text="Cada tentativa é um ato de coragem"
          specs="Cormorant Garamond · 500 italic · 20px"
        />

        <TypeSample
          label="BODY"
          className="font-body text-base text-foreground"
          text="Sabemos que o caminho da tentante é feito de espera, esperança e muita coragem. Por isso, criamos um espaço seguro onde você pode encontrar acolhimento profissional, conteúdos pensados para cada fase e uma comunidade que entende o que você sente."
          specs="DM Sans · 400 · 16px"
        />

        <TypeSample
          label="BODY SM"
          className="font-body text-sm text-foreground"
          text="Conteúdos atualizados semanalmente por especialistas em reprodução humana assistida e saúde mental."
          specs="DM Sans · 400 · 14px"
        />

        <TypeSample
          label="LABEL / EYEBROW"
          className="font-body text-[11px] font-medium uppercase tracking-[0.14em] text-mauve"
          text="COMUNIDADE"
          specs="DM Sans · 500 uppercase · 11px · tracking 0.14em"
        />
      </div>
    </div>
  )
}
