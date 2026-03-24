'use client'

import { SectionHeader } from '@/components/ui/section-header'
import { ESButton } from '@/components/ui/button'
import { ESDivider } from '@/components/ui/divider'

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14m-7-7h14" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  )
}

const variants = ['primary', 'secondary', 'ghost', 'destructive'] as const
const variantLabels: Record<typeof variants[number], string> = {
  primary: 'Primário',
  secondary: 'Secundário',
  ghost: 'Ghost',
  destructive: 'Destrutivo',
}
const sizes = ['sm', 'md', 'lg'] as const

export function ButtonsSection() {
  return (
    <div id="buttons" className="py-16">
      <SectionHeader
        eyebrow="Componentes"
        title="Botões"
        description="Variantes, tamanhos e estados do componente ESButton."
      />

      <div className="mt-10 flex flex-col gap-10">
        {/* Variant × Size grid */}
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col gap-3">
            <h3 className="font-display text-lg font-medium text-plum">
              {variantLabels[variant]}
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              {sizes.map((size) => (
                <ESButton key={size} variant={variant} size={size}>
                  {size === 'sm' ? 'Ação' : size === 'md' ? 'Começar jornada' : 'Inscrever-se agora'}
                </ESButton>
              ))}
            </div>
          </div>
        ))}

        <ESDivider />

        {/* Disabled states */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">
            Desabilitados
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <ESButton variant="primary" isDisabled>
              Primário desabilitado
            </ESButton>
            <ESButton variant="secondary" isDisabled>
              Secundário desabilitado
            </ESButton>
            <ESButton variant="ghost" isDisabled>
              Ghost desabilitado
            </ESButton>
            <ESButton variant="destructive" isDisabled>
              Destrutivo desabilitado
            </ESButton>
          </div>
        </div>

        <ESDivider />

        {/* Loading states */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">
            Carregando
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <ESButton variant="primary" isLoading>
              Salvando...
            </ESButton>
            <ESButton variant="secondary" isLoading>
              Processando...
            </ESButton>
            <ESButton variant="ghost" isLoading>
              Carregando...
            </ESButton>
            <ESButton variant="destructive" isLoading>
              Removendo...
            </ESButton>
          </div>
        </div>

        <ESDivider />

        {/* With icons */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">
            Com ícones
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <ESButton variant="primary" startContent={<PlusIcon />}>
              Novo conteúdo
            </ESButton>
            <ESButton variant="secondary" endContent={<ArrowIcon />}>
              Explorar trilhas
            </ESButton>
            <ESButton variant="ghost" startContent={<PlusIcon />}>
              Adicionar nota
            </ESButton>
            <ESButton variant="primary" size="lg" endContent={<ArrowIcon />}>
              Começar jornada
            </ESButton>
          </div>
        </div>

        <ESDivider />

        {/* Full width */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">
            Largura total
          </h3>
          <div className="max-w-md">
            <ESButton variant="primary" fullWidth>
              Entrar na comunidade
            </ESButton>
          </div>
        </div>
      </div>
    </div>
  )
}
