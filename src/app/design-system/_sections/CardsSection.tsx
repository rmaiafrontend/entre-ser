'use client'

import { useState } from 'react'
import { SectionHeader } from '@/components/ui/section-header'
import { ESCard, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { ContentCard } from '@/components/ui/content-card'
import { ProgressCard } from '@/components/ui/progress-card'
import { PhaseCard } from '@/components/ui/phase-card'
import { PostCard } from '@/components/ui/post-card'
import { SessionCard } from '@/components/ui/session-card'
import { ESDivider } from '@/components/ui/divider'
import { ESButton } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function SeedlingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V8" />
      <path d="M5 12s2.5-5 7-5 7 5 7 5" />
      <path d="M12 8c0-4 3-6 7-6-1 4-3 6-7 6z" />
      <path d="M12 8c0-4-3-6-7-6 1 4 3 6 7 6z" />
    </svg>
  )
}

export function CardsSection() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div id="cards" className="py-16">
      <SectionHeader
        eyebrow="Componentes"
        title="Cards"
        description="Todos os tipos de card disponíveis no design system."
      />

      <div className="mt-10 flex flex-col gap-12">
        {/* ESCard base variants */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">ESCard — Variantes</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ESCard variant="default">
              <CardHeader className="px-5 pt-5 pb-0">
                <Tag label="Default" variant="primary" size="sm" />
              </CardHeader>
              <CardContent className="gap-2 px-5 py-4">
                <h4 className="font-display text-lg text-plum">Card padrão</h4>
                <p className="text-sm text-plum/60">
                  Fundo branco com borda sutil. Usado para conteúdos gerais e listagens.
                </p>
              </CardContent>
              <CardFooter className="border-t border-plum/5 px-5 py-3">
                <ESButton variant="ghost" size="sm">Ver mais</ESButton>
              </CardFooter>
            </ESCard>

            <ESCard variant="dark">
              <CardHeader className="px-5 pt-5 pb-0">
                <Tag label="Dark" variant="primary" size="sm" />
              </CardHeader>
              <CardContent className="gap-2 px-5 py-4">
                <h4 className="font-display text-lg text-cream">Card escuro</h4>
                <p className="text-sm text-cream/70">
                  Fundo ameixa com texto claro. Ideal para destaques e CTAs.
                </p>
              </CardContent>
              <CardFooter className="border-t border-cream/10 px-5 py-3">
                <ESButton variant="ghost" size="sm" className="text-cream">Ver mais</ESButton>
              </CardFooter>
            </ESCard>

            <ESCard variant="ghost">
              <CardHeader className="px-5 pt-5 pb-0">
                <Tag label="Ghost" variant="muted" size="sm" />
              </CardHeader>
              <CardContent className="gap-2 px-5 py-4">
                <h4 className="font-display text-lg text-plum">Card fantasma</h4>
                <p className="text-sm text-plum/60">
                  Sem fundo nem borda. Para conteúdos que não precisam de container.
                </p>
              </CardContent>
            </ESCard>
          </div>
        </div>

        <ESDivider />

        {/* ContentCard */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">ContentCard</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ContentCard
              title="Como lidar com a ansiedade na espera do beta"
              type="artigo"
              duration="8 min de leitura"
              phase="Preparação"
            />
            <ContentCard
              title="Meditação guiada para o dia da transferência"
              type="video"
              duration="12 min"
              phase="Coleta / Transferência"
              isFavorited
            />
            <ContentCard
              title="Exercício de respiração para momentos difíceis"
              type="audio"
              duration="6 min"
            />
          </div>
        </div>

        <ESDivider />

        {/* ProgressCard */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">ProgressCard</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <ProgressCard
              title="Regulação emocional"
              description="Técnicas para identificar e acolher suas emoções durante o tratamento."
              progress={65}
              icon={<HeartIcon />}
              isRecommended
            />
            <ProgressCard
              title="Autocompaixão"
              description="Aprenda a ser gentil consigo mesma nos momentos mais desafiadores."
              progress={30}
              icon={<SeedlingIcon />}
            />
            <ProgressCard
              title="Comunicação no casal"
              description="Ferramentas para fortalecer o diálogo durante a jornada."
              progress={100}
              icon={<BookIcon />}
            />
          </div>
        </div>

        <ESDivider />

        {/* PhaseCard */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">PhaseCard</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <PhaseCard
              phase="preparacao"
              label="Fase 1"
              description="Exames, consultas e preparação emocional para o início do ciclo."
              icon={<BookIcon />}
            />
            <PhaseCard
              phase="estimulacao"
              label="Fase 2"
              description="Acompanhamento das medicações e do desenvolvimento folicular."
              icon={<HeartIcon />}
              isActive
            />
            <PhaseCard
              phase="beta"
              label="Fase 4"
              description="O momento da espera pelo resultado do exame de beta-hCG."
              icon={<SeedlingIcon />}
            />
          </div>
        </div>

        <ESDivider />

        {/* PostCard */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">PostCard</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <PostCard
              authorName="Camila Rocha"
              timestamp="Há 2 horas"
              content="Hoje fiz minha primeira transferência. Estou com o coração acelerado mas ao mesmo tempo em paz. A meditação guiada da plataforma me ajudou muito a ficar presente no momento. Mandando energia boa para todas que estão nessa jornada comigo."
              topic="Transferência"
              likesCount={24}
              commentsCount={8}
              isLiked={isLiked}
              onLike={() => setIsLiked(!isLiked)}
            />
            <PostCard
              authorName="Ana Beatriz"
              timestamp="Ontem às 19:30"
              content="Alguém mais sentindo que a estimulação parece durar uma eternidade? Estou no dia 9 e cada ultrassom é uma montanha-russa de emoções. Compartilhem suas experiências, por favor."
              topic="Estimulação"
              likesCount={42}
              commentsCount={15}
              isLiked
            />
          </div>
        </div>

        <ESDivider />

        {/* SessionCard */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">SessionCard</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <SessionCard
              groupName="Círculo de acolhimento"
              theme="Lidando com a frustração de um resultado negativo"
              facilitator="Dra. Fernanda Oliveira"
              participantCount={6}
              maxParticipants={10}
              nextSessionDate="28 de março"
              nextSessionTime="19:00"
            />
            <SessionCard
              groupName="Grupo de casais tentantes"
              theme="Comunicação e apoio mútuo durante o tratamento"
              facilitator="Dra. Juliana Mendes"
              participantCount={4}
              maxParticipants={8}
              nextSessionDate="2 de abril"
              nextSessionTime="20:00"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
