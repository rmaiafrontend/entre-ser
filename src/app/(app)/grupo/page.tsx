import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { SessionCard } from '@/components/ui/session-card'
import { ESButton } from '@/components/ui/button'
import { ESAvatar } from '@/components/ui/avatar'
import { ListItem } from '@/components/ui/list-item'
import { mockGroup } from '@/lib/mock-data'

export default function GrupoPage() {
  return (
    <Container size="md" className="py-8 pb-28">
      <h1 className="font-display text-4xl font-light text-plum mb-6">
        Grupo Terapêutico
      </h1>

      {/* Session card */}
      <SessionCard
        groupName={mockGroup.groupName}
        theme={mockGroup.theme}
        facilitator={mockGroup.facilitator}
        participantCount={mockGroup.participantCount}
        maxParticipants={mockGroup.maxParticipants}
        nextSessionDate={mockGroup.nextSessionDate}
        nextSessionTime={mockGroup.nextSessionTime}
        className="mb-4"
      />

      <ESButton variant="primary" fullWidth className="mb-8">
        Entrar na sessão ao vivo
      </ESButton>

      {/* Members */}
      <SectionHeader title="Participantes" className="mb-4" />

      <ESCard className="mb-8">
        <div>
          {mockGroup.members.map((member) => (
            <ListItem
              key={member.name}
              startContent={<ESAvatar name={member.name} size="sm" />}
            >
              <p className="text-sm text-plum">{member.name}</p>
            </ListItem>
          ))}
        </div>
      </ESCard>

      {/* Async messages */}
      <SectionHeader title="Mensagens do grupo" className="mb-4" />

      <div className="mb-8 flex flex-col gap-3">
        {mockGroup.asyncMessages.map((msg, index) => (
          <ESCard key={index}>
            <CardContent className="gap-1.5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-plum">
                  {msg.author}
                </span>
                <span className="text-xs text-plum/40">{msg.time}</span>
              </div>
              <p className="text-sm leading-relaxed text-plum/70">
                {msg.message}
              </p>
            </CardContent>
          </ESCard>
        ))}
      </div>

      {/* Past sessions */}
      <SectionHeader title="Sessões anteriores" className="mb-4" />

      <div className="flex flex-col gap-3">
        <ESCard>
          <CardContent className="gap-1.5 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-plum">
                18 de março, 2026
              </span>
              <span className="text-xs text-plum/40">19:00 — 20:30</span>
            </div>
            <p className="text-sm leading-relaxed text-plum/70">
              Conversamos sobre técnicas de respiração para os momentos de
              ansiedade durante a espera do beta. A Dra. Beatriz guiou uma
              prática de visualização muito bonita.
            </p>
          </CardContent>
        </ESCard>

        <ESCard>
          <CardContent className="gap-1.5 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-plum">
                11 de março, 2026
              </span>
              <span className="text-xs text-plum/40">19:00 — 20:30</span>
            </div>
            <p className="text-sm leading-relaxed text-plum/70">
              Tema da sessão: lidar com expectativas e pressões externas.
              Compartilhamos experiências sobre como o olhar dos outros afeta
              nossa jornada e estratégias para estabelecer limites saudáveis.
            </p>
          </CardContent>
        </ESCard>
      </div>
    </Container>
  )
}
