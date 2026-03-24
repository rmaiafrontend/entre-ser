import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { ESCard, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IconTarget() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  )
}
function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fillRule="evenodd" />
    </svg>
  )
}
function IconChat() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

const CHAT_PREVIEW = [
  { sender: 'ai' as const, message: 'Olá, Ana! Como posso te apoiar hoje?' },
  { sender: 'user' as const, message: 'Estou ansiosa com o resultado do beta.' },
  { sender: 'ai' as const, message: 'Entendo perfeitamente. A espera pelo beta é um dos momentos mais intensos. Posso te sugerir alguns recursos que podem ajudar...' },
]

const FEATURES = [
  { icon: <IconClock />, title: 'Disponível 24h', desc: 'Sempre que precisar, a qualquer hora.' },
  { icon: <IconTarget />, title: 'Personalizado', desc: 'Adaptado à sua fase de tratamento.' },
  { icon: <IconHeart />, title: 'Acolhedor', desc: 'Tom empático e baseado em evidências.' },
  { icon: <IconShield />, title: 'Seguro', desc: 'Suas conversas são privadas.' },
]

const EXAMPLES = [
  'Como lidar com a ansiedade pós-transferência?',
  'Preciso de um exercício de respiração agora',
  'O que é normal sentir na fase beta?',
  'Quero conversar sobre o que estou sentindo',
]

export default function AssistentePage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-mid to-mauve-dark px-4 pb-20 pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute right-8 bottom-20 h-20 w-20 rounded-full bg-success-light/10 blur-2xl" />

        <Container size="sm" className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-success-dark to-success-dark/80 shadow-lg">
              <IconWhatsApp />
            </span>
            <div>
              <p className="text-cream/50 text-[11px] font-medium uppercase tracking-wider">Via WhatsApp</p>
              <h1 className="font-display text-2xl font-light text-cream">Assistente Entre Ser</h1>
            </div>
          </div>

          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            Apoio emocional inteligente e acolhedor, disponível 24h diretamente no seu WhatsApp.
          </p>
        </Container>
      </div>

      {/* ── Chat preview (overlapping hero) ── */}
      <Container size="sm" className="-mt-12 relative z-20 px-4">
        <ESCard className="border-none shadow-[var(--shadow-modal)] bg-white/90 backdrop-blur-xl overflow-hidden">
          <div className="bg-plum/5 px-4 py-2.5 flex items-center gap-2 border-b border-plum/5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-mauve to-mauve-dark">
              <IconChat />
            </span>
            <span className="text-xs font-medium text-plum/60">Exemplo de conversa</span>
          </div>
          <CardContent className="p-4 space-y-3">
            {CHAT_PREVIEW.map((msg, i) => (
              <div
                key={i}
                className={cn('flex', msg.sender === 'user' ? 'justify-end' : 'justify-start')}
              >
                {msg.sender === 'ai' && (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-mauve to-mauve-dark mr-2 mt-0.5">
                    <IconChat />
                  </span>
                )}
                <div className={cn(
                  'max-w-[78%] rounded-2xl px-3.5 py-2.5',
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-mauve to-mauve-dark text-cream text-sm rounded-br-md'
                    : 'bg-plum/[0.04] text-plum/70 text-sm rounded-bl-md'
                )}>
                  <p className="leading-relaxed">{msg.message}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </ESCard>
      </Container>

      <Container size="sm" className="px-4 pt-6 space-y-6 pb-8">
        {/* ── Features grid ── */}
        <section>
          <p className="text-eyebrow mb-3">Por que usar</p>
          <div className="grid grid-cols-2 gap-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-2.5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mauve/10 text-mauve">
                  {f.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-plum">{f.title}</p>
                  <p className="text-xs text-plum/40 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Example questions ── */}
        <section>
          <p className="text-eyebrow mb-3">O que você pode perguntar</p>
          <div className="space-y-2">
            {EXAMPLES.map((q) => (
              <div
                key={q}
                className="flex items-center gap-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/40 p-3.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum/5 text-plum/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <p className="text-sm text-plum/60 italic">&ldquo;{q}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section>
          <ESCard variant="dark" className="bg-gradient-to-br from-plum via-plum-mid to-mauve-dark overflow-hidden relative">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <CardContent className="p-5 relative z-10 space-y-3">
              <p className="text-eyebrow text-cream/40">Importante</p>
              <p className="text-sm text-cream/70 leading-relaxed">
                O assistente é um recurso complementar baseado em evidências científicas. Ele nunca substitui o acompanhamento com uma psicóloga. Se sentir necessidade, agende uma consulta profissional.
              </p>
            </CardContent>
          </ESCard>
        </section>

        {/* ── CTA ── */}
        <section>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 rounded-full py-4 text-base font-medium text-white bg-gradient-to-r from-success-dark to-success-dark/90 shadow-lg transition-all hover:opacity-90 active:scale-[0.97]"
          >
            <IconWhatsApp />
            Abrir no WhatsApp
          </button>
          <p className="text-center text-xs text-plum/30 mt-3">
            Abre o WhatsApp no seu celular
          </p>
        </section>
      </Container>
    </div>
  )
}
