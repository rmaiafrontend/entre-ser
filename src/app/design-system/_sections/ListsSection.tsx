'use client'

import { SectionHeader } from '@/components/ui/section-header'
import { ListItem } from '@/components/ui/list-item'
import { ESAvatar } from '@/components/ui/avatar'
import { ESDivider } from '@/components/ui/divider'
import { ESCard, CardContent } from '@/components/ui/card'

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-plum/30">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export function ListsSection() {
  return (
    <div id="lists" className="py-16">
      <SectionHeader
        eyebrow="Componentes"
        title="Listas"
        description="Variações de listas com diferentes tipos de conteúdo e interação."
      />

      <div className="mt-10 flex flex-col gap-12">
        {/* Simple list */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">Lista simples</h3>
          <ESCard>
            <CardContent className="p-0">
              <ListItem>
                <span className="text-sm text-plum">Regulação emocional durante o tratamento</span>
              </ListItem>
              <ListItem>
                <span className="text-sm text-plum">Técnicas de respiração para ansiedade</span>
              </ListItem>
              <ListItem>
                <span className="text-sm text-plum">Autocompaixão e gentileza consigo mesma</span>
              </ListItem>
              <ListItem>
                <span className="text-sm text-plum">Comunicação com o parceiro na jornada</span>
              </ListItem>
              <ListItem className="border-b-0">
                <span className="text-sm text-plum">Retomando a rotina após um ciclo</span>
              </ListItem>
            </CardContent>
          </ESCard>
        </div>

        <ESDivider />

        {/* List with icons */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">Lista com ícones</h3>
          <ESCard>
            <CardContent className="p-0">
              <ListItem startContent={<BookIcon />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Biblioteca de conteúdos</span>
                  <span className="text-xs text-plum/50">Artigos, vídeos e áudios</span>
                </div>
              </ListItem>
              <ListItem startContent={<HeartIcon />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Trilhas terapêuticas</span>
                  <span className="text-xs text-plum/50">Jornadas guiadas por especialistas</span>
                </div>
              </ListItem>
              <ListItem startContent={<CalendarIcon />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Agenda de sessões</span>
                  <span className="text-xs text-plum/50">Grupos e encontros ao vivo</span>
                </div>
              </ListItem>
              <ListItem startContent={<UserIcon />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Comunidade</span>
                  <span className="text-xs text-plum/50">Troque experiências com outras tentantes</span>
                </div>
              </ListItem>
              <ListItem startContent={<BellIcon />} className="border-b-0">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Notificações</span>
                  <span className="text-xs text-plum/50">Lembretes e atualizações</span>
                </div>
              </ListItem>
            </CardContent>
          </ESCard>
        </div>

        <ESDivider />

        {/* List with avatars */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">Lista com avatares</h3>
          <ESCard>
            <CardContent className="p-0">
              <ListItem startContent={<ESAvatar name="Fernanda Oliveira" size="sm" />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Dra. Fernanda Oliveira</span>
                  <span className="text-xs text-plum/50">Psicóloga perinatal</span>
                </div>
              </ListItem>
              <ListItem startContent={<ESAvatar name="Juliana Mendes" size="sm" />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Dra. Juliana Mendes</span>
                  <span className="text-xs text-plum/50">Terapeuta de casais</span>
                </div>
              </ListItem>
              <ListItem startContent={<ESAvatar name="Carla Santos" size="sm" />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Dra. Carla Santos</span>
                  <span className="text-xs text-plum/50">Psicóloga clínica</span>
                </div>
              </ListItem>
              <ListItem startContent={<ESAvatar name="Beatriz Lima" size="sm" />} className="border-b-0">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Dra. Beatriz Lima</span>
                  <span className="text-xs text-plum/50">Especialista em reprodução assistida</span>
                </div>
              </ListItem>
            </CardContent>
          </ESCard>
        </div>

        <ESDivider />

        {/* Clickable list items */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-medium text-plum">Lista clicável</h3>
          <ESCard>
            <CardContent className="p-0">
              <ListItem isClickable startContent={<BookIcon />} endContent={<ChevronRightIcon />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Meu perfil</span>
                  <span className="text-xs text-plum/50">Editar informações pessoais</span>
                </div>
              </ListItem>
              <ListItem isClickable startContent={<HeartIcon />} endContent={<ChevronRightIcon />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Conteúdos salvos</span>
                  <span className="text-xs text-plum/50">12 itens na sua biblioteca</span>
                </div>
              </ListItem>
              <ListItem isClickable startContent={<CalendarIcon />} endContent={<ChevronRightIcon />}>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Próximas sessões</span>
                  <span className="text-xs text-plum/50">2 sessões agendadas</span>
                </div>
              </ListItem>
              <ListItem isClickable startContent={<BellIcon />} endContent={<ChevronRightIcon />} className="border-b-0">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-plum">Preferências de notificação</span>
                  <span className="text-xs text-plum/50">Gerenciar alertas e lembretes</span>
                </div>
              </ListItem>
            </CardContent>
          </ESCard>
        </div>
      </div>
    </div>
  )
}
