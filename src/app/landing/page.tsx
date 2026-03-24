import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'

/* ── Icons ── */

function IconUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function IconCompass() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}
function IconMessageCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
function IconThermometer() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  )
}
function IconHeart() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-amber-400">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const FEATURES = [
  {
    icon: <IconUsers />,
    title: 'Comunidade acolhedora',
    description: 'Conecte-se com mulheres que entendem sua jornada. Troque experiências, tire dúvidas e encontre apoio genuíno.',
  },
  {
    icon: <IconCalendar />,
    title: 'Psicólogas especializadas',
    description: 'Agende sessões com profissionais que entendem de reprodução assistida. Individual, casal ou grupo.',
  },
  {
    icon: <IconCompass />,
    title: 'Trilhas terapêuticas',
    description: 'Conteúdos guiados e personalizados para cada fase: preparação, estimulação, beta e pós-resultado.',
  },
  {
    icon: <IconMessageCircle />,
    title: 'Assistente IA 24h',
    description: 'Apoio emocional inteligente via WhatsApp. Exercícios de respiração, orientações e acolhimento a qualquer hora.',
  },
  {
    icon: <IconThermometer />,
    title: 'Termômetro emocional',
    description: 'Acompanhe seu bem-estar diariamente. Identifique padrões e receba sugestões personalizadas.',
  },
  {
    icon: <IconHeart />,
    title: 'Diário emocional',
    description: 'Um espaço seguro para registrar sentimentos. Nomeie emoções e acompanhe sua evolução ao longo do tratamento.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Marina S.',
    phase: '3ª FIV',
    text: 'O Entre Ser mudou minha relação com o tratamento. Pela primeira vez não me senti sozinha na espera do beta.',
  },
  {
    name: 'Camila R.',
    phase: '1ª ICSI',
    text: 'A trilha de regulação emocional me ajudou a lidar com a ansiedade da estimulação. Recomendo para todas.',
  },
  {
    name: 'Juliana M.',
    phase: '2ª FIV',
    text: 'O grupo terapêutico é incrível. Compartilhar com quem entende faz toda a diferença.',
  },
]

const STATS = [
  { value: '2.400+', label: 'Mulheres acolhidas' },
  { value: '98%', label: 'Recomendam' },
  { value: '15.000+', label: 'Sessões realizadas' },
  { value: '4.9', label: 'Nota média', icon: true },
]

const FREE_FEATURES = [
  'Comunidade',
  'Feed de conteúdo',
  'Termômetro emocional',
  '1 sessão de triagem',
]

const PREMIUM_FEATURES = [
  'Tudo do gratuito',
  'Trilhas terapêuticas ilimitadas',
  'Diário emocional completo',
  'Grupos terapêuticos mediados',
  'Assistente IA 24h',
  'Descontos em sessões',
]

const FAQ = [
  {
    q: 'O Entre Ser substitui o acompanhamento psicológico?',
    a: 'Não. O Entre Ser é um recurso complementar. Nossas trilhas e o assistente IA são baseados em evidências, mas não substituem sessões com psicólogas — que você pode agendar diretamente pela plataforma.',
  },
  {
    q: 'Preciso estar em tratamento de fertilidade para usar?',
    a: 'Não necessariamente. A plataforma é para qualquer mulher na jornada da maternidade: planejando, em tratamento, no pós-resultado ou entre ciclos.',
  },
  {
    q: 'Meus dados são protegidos?',
    a: 'Sim. Usamos criptografia de ponta a ponta e seguimos a LGPD. Suas entradas no diário e conversas com o assistente são privadas e nunca compartilhadas.',
  },
  {
    q: 'Posso cancelar a assinatura a qualquer momento?',
    a: 'Sim, sem burocracia. Cancele quando quiser direto pelo app, sem fidelidade ou multa.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Hero ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-28 pt-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute right-12 bottom-20 h-24 w-24 rounded-full bg-mauve/20 blur-2xl" />

        <Container size="sm" className="relative z-10 flex flex-col items-center text-center">
          {/* Logo */}
          <img src="/logo-entreser.png" alt="entre ser" className="h-9 mx-auto" />

          <p className="mt-4 font-display text-xl font-medium text-cream/90 max-w-xs leading-snug">
            Cuidar de quem tenta gerar vida
          </p>

          <p className="mt-4 text-sm text-cream/50 max-w-sm leading-relaxed">
            Saúde mental especializada para mulheres em jornada de fertilidade.
            Comunidade, acompanhamento profissional e apoio emocional em cada fase.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
            <Link href="/cadastro">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-full py-4 text-base font-medium text-plum bg-cream shadow-lg transition-all hover:bg-cream-mid active:scale-[0.97]"
              >
                Quero fazer parte
                <IconArrowRight />
              </button>
            </Link>
            <Link href="/login">
              <button
                type="button"
                className="w-full rounded-full py-3.5 text-sm font-medium text-cream/70 bg-white/10 backdrop-blur-sm border border-white/15 transition-all hover:bg-white/20 active:scale-[0.97]"
              >
                Já tenho conta — Entrar
              </button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex items-center gap-4 text-cream/40">
            <div className="flex items-center gap-1.5">
              <IconShield />
              <span className="text-[11px]">Dados protegidos</span>
            </div>
            <span className="text-cream/15">|</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} />
              ))}
              <span className="text-[11px] ml-1">4.9</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Stats (overlapping hero) ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="-mt-14 relative z-20 px-4">
        <div className="grid grid-cols-4 gap-2">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-[var(--shadow-card)] p-3"
            >
              <div className="flex items-center gap-0.5">
                <span className="text-lg font-display font-light text-plum">{stat.value}</span>
                {stat.icon && <IconStar />}
              </div>
              <span className="text-[9px] font-medium uppercase tracking-wider text-plum/40 text-center leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── About ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-12">
        <section className="text-center">
          <p className="text-eyebrow">Sobre a plataforma</p>
          <h2 className="font-display text-[26px] font-medium text-plum mt-2">
            Você não precisa passar por isso sozinha
          </h2>
          <p className="mt-4 text-sm text-plum/60 leading-relaxed max-w-md mx-auto">
            O Entre Ser é um espaço seguro para mulheres em tratamento de fertilidade
            ou planejando engravidar. Reunimos apoio psicológico especializado, uma
            comunidade acolhedora e conteúdos personalizados para cada fase da jornada.
          </p>
        </section>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Features ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-12">
        <section>
          <div className="text-center mb-6">
            <p className="text-eyebrow">Funcionalidades</p>
            <h2 className="font-display text-[26px] font-medium text-plum mt-2">
              Tudo que você precisa
            </h2>
          </div>

          <div className="space-y-3">
            {FEATURES.map((feat) => (
              <div
                key={feat.title}
                className="flex gap-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4 transition-all hover:bg-white/80"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mauve/10 text-mauve">
                  {feat.icon}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-plum">{feat.title}</h3>
                  <p className="text-xs text-plum/50 mt-1 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── How it works ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-14">
        <section>
          <div className="text-center mb-8">
            <p className="text-eyebrow">Como funciona</p>
            <h2 className="font-display text-[26px] font-medium text-plum mt-2">
              Simples de começar
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Crie sua conta', desc: 'Cadastro rápido e gratuito. Conte-nos em que fase do tratamento você está.' },
              { step: '2', title: 'Receba seu plano', desc: 'Conteúdos, trilhas e sugestões adaptados ao seu momento. Tudo personalizado.' },
              { step: '3', title: 'Encontre apoio', desc: 'Comunidade, sessões com psicólogas e assistente IA — tudo em um só lugar.' },
            ].map((item, i) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mauve to-mauve-dark text-cream text-sm font-semibold">
                    {item.step}
                  </span>
                  {i < 2 && <div className="h-10 w-[2px] bg-mauve/15 rounded-full" />}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-medium text-plum">{item.title}</h3>
                  <p className="text-xs text-plum/50 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Testimonials ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-14">
        <section>
          <div className="text-center mb-6">
            <p className="text-eyebrow">Depoimentos</p>
            <h2 className="font-display text-[26px] font-medium text-plum mt-2">
              Quem faz parte
            </h2>
          </div>

          <div className="space-y-3">
            {TESTIMONIALS.map((t) => (
              <ESCard key={t.name}>
                <CardContent className="p-5">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} />
                    ))}
                  </div>
                  <p className="font-display text-base italic text-plum/70 leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-plum-soft text-xs font-semibold text-plum">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-plum">{t.name}</p>
                      <p className="text-[11px] text-plum/40">{t.phase}</p>
                    </div>
                  </div>
                </CardContent>
              </ESCard>
            ))}
          </div>
        </section>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Plans ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-14">
        <section>
          <div className="text-center mb-6">
            <p className="text-eyebrow">Planos</p>
            <h2 className="font-display text-[26px] font-medium text-plum mt-2">
              Escolha o melhor para você
            </h2>
          </div>

          <div className="space-y-4">
            {/* Free */}
            <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-5">
              <h3 className="font-display text-xl font-medium text-plum">Gratuito</h3>
              <p className="text-xs text-plum/40 mt-0.5">Para começar sua jornada</p>

              <div className="mt-4 space-y-2.5">
                {FREE_FEATURES.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mauve/10 text-mauve">
                      <IconCheck />
                    </span>
                    <span className="text-sm text-plum/70">{feat}</span>
                  </div>
                ))}
              </div>

              <Link href="/cadastro" className="block mt-5">
                <button
                  type="button"
                  className="w-full rounded-full py-3.5 text-sm font-medium text-plum bg-white/80 border border-plum/10 transition-all hover:bg-white active:scale-[0.97]"
                >
                  Começar grátis
                </button>
              </Link>
            </div>

            {/* Premium */}
            <div className="relative rounded-2xl bg-gradient-to-br from-plum via-plum-mid to-mauve-dark p-5 overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

              {/* Popular badge */}
              <span className="absolute top-4 right-4 rounded-full bg-cream/20 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream">
                Popular
              </span>

              <h3 className="font-display text-xl font-medium text-cream relative z-10">Premium</h3>
              <div className="flex items-baseline gap-1 mt-1 relative z-10">
                <span className="font-display text-3xl font-light text-cream">R$ 49,90</span>
                <span className="text-sm text-cream/40">/mês</span>
              </div>

              <div className="mt-5 space-y-2.5 relative z-10">
                {PREMIUM_FEATURES.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-cream">
                      <IconCheck />
                    </span>
                    <span className="text-sm text-cream/80">{feat}</span>
                  </div>
                ))}
              </div>

              <Link href="/cadastro" className="block mt-5 relative z-10">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 rounded-full py-4 text-base font-medium text-plum bg-cream shadow-lg transition-all hover:bg-cream-mid active:scale-[0.97]"
                >
                  Assinar Premium
                  <IconArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── FAQ ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-14">
        <section>
          <div className="text-center mb-6">
            <p className="text-eyebrow">Dúvidas frequentes</p>
            <h2 className="font-display text-[26px] font-medium text-plum mt-2">
              Perguntas comuns
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4"
              >
                <h3 className="text-sm font-medium text-plum">{item.q}</h3>
                <p className="text-xs text-plum/50 mt-2 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Final CTA ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-14">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum via-plum-mid to-mauve-dark p-8 text-center">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10">
            <h2 className="font-display text-2xl font-light text-cream">
              Comece hoje a cuidar de você
            </h2>
            <p className="mt-3 text-sm text-cream/50 max-w-xs mx-auto leading-relaxed">
              Mais de 2.400 mulheres já encontraram apoio no Entre Ser.
              Sua jornada merece acolhimento.
            </p>

            <Link href="/cadastro" className="block mt-6">
              <button
                type="button"
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 rounded-full py-4 text-base font-medium text-plum bg-cream shadow-lg transition-all hover:bg-cream-mid active:scale-[0.97]"
              >
                Criar minha conta
                <IconArrowRight />
              </button>
            </Link>
          </div>
        </section>
      </Container>

      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Footer ── */}
      {/* ═══════════════════════════════════════════════════ */}
      <Container size="sm" className="px-4 pt-10 pb-8">
        <footer className="flex flex-col items-center gap-4">
          <img src="/logo-entreser.png" alt="entre ser" className="h-8 mx-auto opacity-30 brightness-0" />

          <nav className="flex items-center gap-6">
            <Link href="#" className="text-xs text-plum/40 hover:text-mauve transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-xs text-plum/40 hover:text-mauve transition-colors">
              Termos
            </Link>
            <Link href="#" className="text-xs text-plum/40 hover:text-mauve transition-colors">
              Contato
            </Link>
            <Link href="#" className="text-xs text-plum/40 hover:text-mauve transition-colors">
              Instagram
            </Link>
          </nav>

          <p className="text-[10px] text-plum/25">
            &copy; 2026 entre ser. Todos os direitos reservados.
          </p>
        </footer>
      </Container>
    </div>
  )
}
