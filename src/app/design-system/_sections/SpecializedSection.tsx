'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/ui/section-header'
import { EmotionChip } from '@/components/ui/emotion-chip'
import { Thermometer } from '@/components/ui/thermometer'
import { ChatBubble } from '@/components/ui/chat-bubble'
import type { EmotionType } from '@/types'

const allEmotions: EmotionType[] = ['alegria', 'ansiedade', 'tristeza', 'esperanca', 'exaustao']

export function SpecializedSection() {
  const [selectedEmotions, setSelectedEmotions] = useState<EmotionType[]>(['esperanca'])
  const [thermometerValue, setThermometerValue] = useState(6)

  const handleEmotionSelect = (emotion: EmotionType) => {
    setSelectedEmotions((prev) =>
      prev.includes(emotion) ? prev.filter((e) => e !== emotion) : [...prev, emotion],
    )
  }

  return (
    <section className="py-16">
      <SectionHeader eyebrow="Componentes" title="Especializados" className="mb-8" />

      <div className="space-y-12">
        {/* EmotionChip */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">EmotionChip — seleção interativa</h3>
          <div className="flex flex-wrap gap-3">
            {allEmotions.map((emotion) => (
              <EmotionChip
                key={emotion}
                emotion={emotion}
                isSelected={selectedEmotions.includes(emotion)}
                onSelect={handleEmotionSelect}
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-plum/40">
            Selecionadas: {selectedEmotions.length > 0 ? selectedEmotions.join(', ') : 'nenhuma'}
          </p>
        </div>

        {/* Thermometer */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">Thermometer</h3>
          <div className="max-w-md space-y-8">
            <div>
              <p className="mb-2 text-xs text-plum/50">Interativo (clique para alterar) — valor: {thermometerValue}</p>
              <Thermometer
                value={thermometerValue}
                onChange={setThermometerValue}
                showLabels
              />
            </div>
            <div>
              <p className="mb-2 text-xs text-plum/50">Somente leitura — nível 3 (leve)</p>
              <Thermometer value={3} isReadOnly showLabels />
            </div>
            <div>
              <p className="mb-2 text-xs text-plum/50">Somente leitura — nível 8 (intenso)</p>
              <Thermometer value={8} isReadOnly showLabels />
            </div>
          </div>
        </div>

        {/* ChatBubble */}
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">ChatBubble — conversa</h3>
          <div className="mx-auto max-w-md space-y-3 rounded-xl border border-plum/10 bg-cream p-6">
            <ChatBubble
              sender="ai"
              message="Olá! Como você está se sentindo hoje? Estou aqui para ouvir."
              timestamp="14:30"
            />
            <ChatBubble
              sender="user"
              message="Estou me sentindo um pouco ansiosa com o resultado do beta."
              timestamp="14:31"
            />
            <ChatBubble
              sender="ai"
              message="É muito compreensível sentir ansiedade nesse momento. A espera pelo resultado pode ser um dos períodos mais desafiadores. Vamos fazer um exercício de respiração juntas?"
              timestamp="14:31"
            />
            <ChatBubble
              sender="user"
              message="Sim, acho que vai me ajudar. Vamos lá."
              timestamp="14:32"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
