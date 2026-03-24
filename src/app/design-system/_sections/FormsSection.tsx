'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/ui/section-header'
import { TextInput } from '@/components/ui/text-input'
import { SelectInput } from '@/components/ui/select-input'
import { CheckboxInput } from '@/components/ui/checkbox-input'
import { TextareaInput } from '@/components/ui/textarea-input'
import { FormField } from '@/components/ui/form-field'
import { PhaseSelector } from '@/components/ui/phase-selector'
import { ESDivider } from '@/components/ui/divider'
import { type Phase } from '@/types'

const phaseOptions = [
  { key: 'preparacao', label: 'Preparação' },
  { key: 'estimulacao', label: 'Estimulação' },
  { key: 'coleta-transferencia', label: 'Coleta / Transferência' },
  { key: 'beta', label: 'Beta' },
  { key: 'pos-resultado', label: 'Pós-resultado' },
  { key: 'aguardando-proximo-ciclo', label: 'Aguardando próximo ciclo' },
]

export function FormsSection() {
  const [name, setName] = useState('Maria da Silva')
  const [email, setEmail] = useState('')
  const [selectedPhase, setSelectedPhase] = useState<string>('')
  const [isChecked, setIsChecked] = useState(true)
  const [isUnchecked, setIsUnchecked] = useState(false)
  const [textarea, setTextarea] = useState('')
  const [phaseSelectorValue, setPhaseSelectorValue] = useState<Phase | undefined>('estimulacao')

  return (
    <div id="forms" className="py-16">
      <SectionHeader
        eyebrow="Componentes"
        title="Formulários"
        description="Campos de entrada, seletores e controles de formulário."
      />

      <div className="mt-10 flex flex-col gap-10">
        {/* TextInput variants */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">TextInput</h3>
          <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
            <TextInput
              label="Nome"
              placeholder="Ex: Maria da Silva"
            />
            <TextInput
              label="Nome completo"
              value={name}
              onChange={setName}
            />
            <TextInput
              label="E-mail"
              placeholder="seu@email.com"
              type="email"
              errorMessage="Informe um e-mail válido"
            />
            <TextInput
              label="E-mail"
              placeholder="seu@email.com"
              type="email"
              isDisabled
            />
            <TextInput
              label="Senha"
              placeholder="Mínimo 8 caracteres"
              type="password"
            />
            <TextInput
              label="Buscar"
              placeholder="Buscar conteúdos..."
              startContent={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-plum/40">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              }
            />
          </div>
        </div>

        <ESDivider />

        {/* SelectInput */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">SelectInput</h3>
          <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
            <SelectInput
              label="Fase atual"
              placeholder="Selecione sua fase"
              options={phaseOptions}
              selectedKey={selectedPhase}
              onChange={setSelectedPhase}
            />
            <SelectInput
              label="Fase atual"
              placeholder="Selecione sua fase"
              options={phaseOptions}
              errorMessage="Selecione uma fase para continuar"
            />
            <SelectInput
              label="Fase atual"
              placeholder="Selecione sua fase"
              options={phaseOptions}
              isDisabled
            />
          </div>
        </div>

        <ESDivider />

        {/* CheckboxInput */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">CheckboxInput</h3>
          <div className="flex flex-col gap-4 max-w-md">
            <CheckboxInput
              label="Aceito receber e-mails sobre novos conteúdos"
              isSelected={isUnchecked}
              onChange={setIsUnchecked}
            />
            <CheckboxInput
              label="Li e aceito os termos de uso"
              isSelected={isChecked}
              onChange={setIsChecked}
            />
            <CheckboxInput
              label="Opção desabilitada"
              isDisabled
            />
          </div>
        </div>

        <ESDivider />

        {/* TextareaInput */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">TextareaInput</h3>
          <div className="grid max-w-2xl grid-cols-1 gap-6">
            <TextareaInput
              label="Como você está se sentindo?"
              placeholder="Compartilhe o que quiser, este é um espaço seguro..."
              value={textarea}
              onChange={setTextarea}
            />
            <TextareaInput
              label="Mensagem"
              placeholder="Escreva sua mensagem"
              errorMessage="A mensagem precisa ter pelo menos 10 caracteres"
            />
            <TextareaInput
              label="Observações"
              placeholder="Notas adicionais"
              isDisabled
            />
          </div>
        </div>

        <ESDivider />

        {/* FormField wrapper */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">FormField</h3>
          <div className="max-w-md">
            <FormField
              label="Informações pessoais"
              description="Essas informações serão usadas para personalizar sua experiência."
              isRequired
            >
              <TextInput
                label="Nome completo"
                placeholder="Ex: Maria da Silva"
                isRequired
              />
            </FormField>
          </div>
        </div>

        <ESDivider />

        {/* PhaseSelector */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">PhaseSelector</h3>
          <p className="text-sm text-plum/60">
            Seletor interativo de fase do tratamento. Fase selecionada:{' '}
            <strong className="text-plum">{phaseSelectorValue ?? 'nenhuma'}</strong>
          </p>
          <PhaseSelector
            value={phaseSelectorValue}
            onChange={setPhaseSelectorValue}
          />
        </div>
      </div>
    </div>
  )
}
