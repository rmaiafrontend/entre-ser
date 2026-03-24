'use client'

import { SectionHeader } from '@/components/ui/section-header'
import { DataTable } from '@/components/ui/data-table'
import { Tag } from '@/components/ui/tag'

const columns = [
  { key: 'nome', label: 'Nome' },
  { key: 'email', label: 'E-mail' },
  { key: 'fase', label: 'Fase' },
  { key: 'status', label: 'Status', align: 'center' as const },
]

const rows = [
  {
    nome: 'Ana Carolina Silva',
    email: 'ana.silva@email.com',
    fase: 'Estimulação',
    status: <Tag label="Ativa" variant="primary" />,
  },
  {
    nome: 'Beatriz Oliveira',
    email: 'bia.oliveira@email.com',
    fase: 'Coleta / Transferência',
    status: <Tag label="Ativa" variant="primary" />,
  },
  {
    nome: 'Camila Ferreira',
    email: 'camila.f@email.com',
    fase: 'Beta',
    status: <Tag label="Pausada" variant="muted" />,
  },
  {
    nome: 'Daniela Costa',
    email: 'dani.costa@email.com',
    fase: 'Preparação',
    status: <Tag label="Ativa" variant="primary" />,
  },
  {
    nome: 'Eduarda Mendes',
    email: 'edu.mendes@email.com',
    fase: 'Pós-resultado',
    status: <Tag label="Concluída" variant="plum" />,
  },
]

export function TablesSection() {
  return (
    <section className="py-16">
      <SectionHeader eyebrow="Componentes" title="Tabelas" className="mb-8" />

      <div className="space-y-12">
        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">Tabela com listras</h3>
          <div className="rounded-xl border border-plum/10 bg-white p-4">
            <DataTable columns={columns} rows={rows} isStriped />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium text-plum/70">Estado vazio</h3>
          <div className="rounded-xl border border-plum/10 bg-white p-4">
            <DataTable
              columns={columns}
              rows={[]}
              emptyMessage="Nenhuma paciente encontrada para os filtros selecionados."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
