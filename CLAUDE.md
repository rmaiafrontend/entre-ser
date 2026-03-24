# entre ser — Contexto do Projeto

## O que é

Plataforma SaaS de saúde mental para mulheres e casais tentantes (que tentam engravidar). Tom: acolhedor, sóbrio, empático. Nunca clínico ou frio.

---

## Stack

- **Next.js 15** (App Router, React Server Components)
- **HeroUI v3** (`@heroui/react`) — biblioteca de componentes
- **Tailwind CSS v4** — utilitários de estilo
- **TypeScript** estrito
- **TanStack Query v5** para data fetching no client
- **Framer Motion v11** para animações
- **next/font** para carregamento de fontes (Cormorant Garamond + DM Sans)

---

## Theming — Como funciona

HeroUI v3 + Tailwind v4 **não usa `tailwind.config.ts` para cores**. Todo o tema vive em `app/globals.css` via diretivas `@theme` e variáveis CSS.

### Mapeamento de variáveis semânticas HeroUI → entre ser

| Variável HeroUI | Valor entre ser | Papel |
|---|---|---|
| `--background` | `#F5EDE0` | Background de página (creme) |
| `--foreground` | `#1A0A28` | Texto principal |
| `--surface` | `#FFFFFF` | Cards e modais |
| `--accent` | `#7A4A5C` | Cor primária de ação (mauve) |
| `--accent-foreground` | `#FFFFFF` | Texto sobre accent |
| `--muted` | `#EBD9C4` | Fundos discretos |
| `--muted-foreground` | `#8B7A9E` | Texto secundário |
| `--border` | `rgba(45,24,64,0.12)` | Bordas |
| `--danger` | `#A03040` | Erros (único uso do vermelho) |

### Escala de cores customizada (classes Tailwind disponíveis via `@theme`)

```
bg-plum / text-plum           → #2D1840
bg-plum-mid                   → #3F2558
bg-plum-soft                  → #EDE6F4
bg-mauve / text-mauve         → #7A4A5C
bg-mauve-dark                 → #512F3D
bg-mauve-mid                  → #A07080
bg-mauve-soft                 → #E8D5DA
bg-mauve-ghost                → #F5EDEF
bg-cream / text-cream         → #F5EDE0
bg-cream-mid                  → #EBD9C4
bg-cream-dark                 → #D4BC9E
```

---

## Design System

### Princípios de cor

- **Ameixa comanda** — `plum` é estrutural (headers, sidebar, fundos de destaque)
- **Mauve é o acento** — usar em CTAs, links ativos, badges, focus rings, `color="primary"` do HeroUI
- **Vermelho SOMENTE em erros** — `color="danger"` do HeroUI, nunca como cor de interface
- **Creme como superfície** — background de página em `cream`, cards em `white`

### Tipografia

| Papel | Família | Peso | Tamanho |
|---|---|---|---|
| Hero / Display | Cormorant Garamond | 300 | 52px |
| H1 | Cormorant Garamond | 400 | 36px |
| H2 | Cormorant Garamond | 500 | 26px |
| Quote | Cormorant Garamond | 500 italic | 20px |
| Body | DM Sans | 400 | 16px |
| Body sm | DM Sans | 400 | 14px |
| Label/Eyebrow | DM Sans | 500 uppercase | 11px |

```tsx
// Título editorial
<h1 className="font-display text-4xl font-light text-plum">

// Label eyebrow
<span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-mauve">
```

---

## Padrões de componentes HeroUI

### Button

```tsx
// Primário — mauve (color="primary" mapeado para mauve no tema)
<Button color="primary" radius="full">Inscrever-se</Button>

// Secundário — outline ameixa
<Button variant="bordered" radius="full" className="border-plum text-plum">
  Explorar
</Button>

// Ghost
<Button variant="light" color="primary" radius="full">Ver planos</Button>

// NUNCA usar color="danger" em botão de ação — só em confirmações destrutivas
```

### Input / Form

```tsx
<Input
  label="Nome completo"
  placeholder="Ex: Maria da Silva"
  radius="md"
  variant="bordered"
  classNames={{
    inputWrapper: "border-cream-dark data-[focus=true]:border-mauve",
    label: "text-plum/70 font-medium",
  }}
/>
```

### Card

```tsx
// Card padrão
<Card radius="lg" shadow="sm" className="bg-white border border-plum/10">
  <CardBody>...</CardBody>
</Card>

// Card escuro (destaque)
<Card radius="lg" className="bg-plum text-cream">
  <CardBody>...</CardBody>
</Card>
```

### Chip / Badge

```tsx
<Chip color="primary" variant="flat" size="sm">Comunidade</Chip>
<Chip variant="flat" classNames={{ base: "bg-plum/10 text-plum" }}>Terapia</Chip>
```

### Navbar

```tsx
<Navbar className="bg-white border-b border-plum/10">
  <NavbarBrand>...</NavbarBrand>
  <NavbarContent>
    <NavbarItem isActive>
      <Link className="text-plum font-medium">Home</Link>
    </NavbarItem>
  </NavbarContent>
  <NavbarContent justify="end">
    <Button color="primary" radius="full" size="sm">Entrar</Button>
  </NavbarContent>
</Navbar>
```

### Modal

```tsx
<Modal backdrop="blur" radius="lg">
  <ModalContent className="bg-white">...</ModalContent>
</Modal>
```

---

## Estrutura de pastas (App Router)

```
src/
├── app/
│   ├── globals.css          ← tema completo (Tailwind v4 + HeroUI + tokens)
│   ├── layout.tsx           ← HeroUIProvider + fontes aqui
│   └── (routes)/
├── components/
│   ├── ui/                  ← wrappers sobre HeroUI com defaults do projeto
│   ├── layout/              ← Navbar, Footer, Sidebar
│   └── features/            ← JornadaCard, TerapeutaProfile, etc.
├── hooks/
├── lib/
│   ├── fonts.ts             ← next/font config
│   └── utils.ts             ← cn() helper
├── services/                ← TanStack Query + fetch
└── types/
```

### layout.tsx obrigatório

```tsx
import { HeroUIProvider } from '@heroui/react'
import { cormorant, dmSans } from '@/lib/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  )
}
```

### lib/fonts.ts

```ts
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})
```

### lib/utils.ts

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## Padrões de código

- Componentes Server por padrão; `'use client'` só quando necessário (eventos, hooks, estado)
- Props tipadas com `interface`, nunca `type` para componentes
- Named exports para componentes, `export default` apenas em páginas e layouts
- Sem `any`; usar `unknown` quando o tipo não é conhecido
- `cn()` para composição de classes condicionais
- Framer Motion apenas para animações de entrada/saída; micro-interações via Tailwind `transition-*`

---

## Motion

```ts
// Rápido — hover, cor, focus
transition: { duration: 0.2, ease: 'easeOut' }

// Entrada — modal, drawer, card
transition: { duration: 0.35, ease: [0, 0, 0.2, 1] }

// Spring — like, badge, confirmação
transition: { type: 'spring', stiffness: 300, damping: 20 }
```

---

## Tom de voz (textos da UI)

- Sempre português brasileiro
- Acolhedor, nunca burocrático: "Inscrever-se", não "Cadastrar"
- Erros com empatia: "Não conseguimos processar", não "Erro 422"
- Labels curtas: "Nome", "E-mail", não "Digite seu nome completo"
- CTAs com verbo + benefício: "Começar jornada", "Entrar na comunidade"
