import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESButton } from '@/components/ui/button'
import { ESCard, CardContent } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { ESDivider } from '@/components/ui/divider'
import { Tag } from '@/components/ui/tag'

const benefits = [
  {
    emoji: '\u{1F465}',
    title: 'Comunidade',
    description: 'Conecte-se com mulheres que entendem sua jornada',
  },
  {
    emoji: '\u{1F5D3}\uFE0F',
    title: 'Agendamento',
    description: 'Consultas com psicologas especializadas em RA',
  },
  {
    emoji: '\u{1F4DA}',
    title: 'Conteudo',
    description: 'Trilhas e artigos personalizados por fase',
  },
  {
    emoji: '\u{1F916}',
    title: 'Assistente IA',
    description: 'Suporte 24h via WhatsApp',
  },
]

const freePlanFeatures = [
  'Comunidade',
  'Feed de conteudo',
  'Termometro emocional',
]

const premiumPlanFeatures = [
  'Tudo do gratuito',
  'Trilhas terapeuticas',
  'Diario emocional',
  'Grupos mediados',
  'Assistente IA',
]

export default function LandingPage() {
  return (
    <Container size="sm" className="py-16">
      {/* Hero */}
      <section className="flex flex-col items-center text-center pb-12">
        <span className="font-display text-[52px] font-light text-plum leading-tight">
          entre ser
        </span>
        <p className="mt-4 font-display text-xl font-medium text-plum/80">
          Cuidar de quem tenta gerar vida
        </p>
        <p className="mt-4 text-sm text-plum/60 max-w-xs leading-relaxed">
          Uma plataforma de saude mental criada para acolher mulheres e casais
          que estao na jornada da fertilidade. Aqui voce encontra apoio
          emocional, comunidade e acompanhamento profissional em cada fase do
          seu tratamento.
        </p>
        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <Link href="/cadastro">
            <ESButton size="lg" fullWidth>
              Quero fazer parte
            </ESButton>
          </Link>
          <Link href="/login">
            <ESButton variant="ghost" size="lg" fullWidth>
              Ja tenho conta &mdash; Entrar
            </ESButton>
          </Link>
        </div>
      </section>

      <ESDivider />

      {/* O que e */}
      <section className="py-12">
        <SectionHeader
          eyebrow="Sobre"
          title="O que e o Entre Ser?"
        />
        <p className="mt-4 text-sm text-plum/60 leading-relaxed">
          O Entre Ser e um espaco seguro para mulheres que estao em tratamento
          de fertilidade ou planejando engravidar. Sabemos que essa jornada pode
          ser solitaria e emocionalmente intensa. Por isso, reunimos apoio
          psicologico especializado, uma comunidade acolhedora de mulheres que
          vivem a mesma experiencia e conteudos personalizados para cada fase do
          processo. Voce nao precisa passar por isso sozinha.
        </p>
      </section>

      <ESDivider />

      {/* Beneficios */}
      <section className="py-12">
        <SectionHeader
          eyebrow="Beneficios"
          title="O que voce encontra aqui"
        />
        <div className="mt-6 grid grid-cols-2 gap-3">
          {benefits.map((item) => (
            <ESCard key={item.title}>
              <CardContent className="p-4">
                <span className="text-2xl">{item.emoji}</span>
                <h3 className="mt-2 font-display text-base font-medium text-plum">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-plum/60 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </ESCard>
          ))}
        </div>
      </section>

      <ESDivider />

      {/* Planos */}
      <section className="py-12">
        <SectionHeader
          eyebrow="Planos"
          title="Escolha o melhor para voce"
        />
        <div className="mt-6 flex flex-col gap-4">
          {/* Gratuito */}
          <ESCard>
            <CardContent className="p-5">
              <h3 className="font-display text-lg font-medium text-plum">
                Gratuito
              </h3>
              <p className="mt-1 text-xs text-plum/50">
                Para comecar sua jornada
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {freePlanFeatures.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-sm text-plum/70"
                  >
                    <span className="text-mauve">&#10003;</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/cadastro">
                  <ESButton variant="secondary" fullWidth>
                    Comecar gratis
                  </ESButton>
                </Link>
              </div>
            </CardContent>
          </ESCard>

          {/* Premium */}
          <ESCard variant="dark">
            <CardContent className="p-5">
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-medium text-cream">
                  Premium
                </h3>
                <Tag label="Popular" variant="primary" size="sm" />
              </div>
              <p className="mt-1 text-xs text-cream/60">
                R$ 49,90/mes
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {premiumPlanFeatures.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-sm text-cream/80"
                  >
                    <span className="text-mauve-soft">&#10003;</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/cadastro">
                  <ESButton fullWidth className="bg-cream text-plum hover:bg-cream-mid">
                    Assinar Premium
                  </ESButton>
                </Link>
              </div>
            </CardContent>
          </ESCard>
        </div>
      </section>

      <ESDivider />

      {/* Footer */}
      <footer className="py-8 flex flex-col items-center gap-4">
        <span className="font-display text-lg font-light text-plum/40">
          entre ser
        </span>
        <nav className="flex items-center gap-6">
          <Link
            href="#"
            className="text-xs text-plum/50 hover:text-mauve transition-colors"
          >
            Politica de Privacidade
          </Link>
          <Link
            href="#"
            className="text-xs text-plum/50 hover:text-mauve transition-colors"
          >
            Contato
          </Link>
          <Link
            href="#"
            className="text-xs text-plum/50 hover:text-mauve transition-colors"
          >
            Instagram
          </Link>
        </nav>
        <p className="text-[10px] text-plum/30">
          &copy; 2026 entre ser. Todos os direitos reservados.
        </p>
      </footer>
    </Container>
  )
}
