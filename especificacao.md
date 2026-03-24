# ENTRE SER
## Plataforma de Saúde Mental para Tentantes

**DOCUMENTAÇÃO DE PROTÓTIPO**
Perspectiva da Usuária — Bloco A + Bloco B

*SW3 Tecnologia & Inovação · Março 2026*

---

## Sobre este Documento

Esta documentação descreve as funcionalidades da plataforma Entre Ser do ponto de vista exclusivo da usuária final — mulheres em processo de reprodução assistida. Cada tela está especificada com os elementos visíveis, as ações disponíveis e o fluxo de navegação, servindo como base para a construção do protótipo navegável.

---

Prioridade de design: Mobile First
A aplicação é voltada para usuárias que acessam majoritariamente pelo celular. Todo componente deve ser projetado e testado primeiro para telas móveis (320px–430px), depois adaptado para telas maiores. Isso significa:

Layout, espaçamentos e tamanhos de toque pensados para mobile (mínimo de 44px de área clicável em elementos interativos)
Tipografia legível sem zoom em telas pequenas
Bottom navigation como padrão de navegação principal (não sidebar)
Componentes que se expandem e aproveitam bem o espaço em tablet e desktop, mas nunca dependem de hover para funcionar
A página /design-system deve ser visualizada e validada no viewport mobile antes de qualquer ajuste desktop

O comportamento em desktop é bem-vindo, mas nunca à custa da experiência mobile.

## Estrutura da Plataforma

A plataforma é composta por dois blocos de entrega:

| BLOCO A | BLOCO B |
|---|---|
| ✓ Cadastro & onboarding | ✓ Trilhas terapêuticas (6 trilhas) |
| ✓ Home & dashboard | ✓ Diário emocional |
| ✓ Site institucional | ✓ Adaptação por fase do ciclo |
| ✓ Comunidade | ✓ Termômetro emocional |
| ✓ Agendamento | ✓ Grupos terapêuticos mediados |
| ✓ Feed & trilhas de aprendizagem | ✓ IA de triagem e routing |
| ✓ Assistente IA via WhatsApp | |

> O Bloco A entra no ar no mês 4. O Bloco B é desenvolvido em paralelo e entregue progressivamente até o mês 9.

---

## Persona da Usuária

**Ana, 33 anos — Tentante em 2º ciclo de FIV**
Engenheira. Casada. Mora em São Paulo.

**Necessidades**
- Entender o que está sentindo sem julgamento
- Encontrar outras mulheres que passam pelo mesmo
- Ter acesso a informação de qualidade sobre reprodução assistida
- Consultar uma psicóloga especializada de forma prática
- Cuidar da saúde emocional entre as etapas do tratamento

**Frustrações**
- Informações dispersas em fóruns não especializados
- Sentir que não pode falar sobre o tema no trabalho ou com família
- Dificuldade de encontrar psicólogas que entendam o processo de RA
- Ansiedade aumenta nas esperas (pós-transferência, resultado do beta)

---

## BLOCO A · Módulos Essenciais

### Tela A.01 — Página Inicial (Site Institucional)

| Campo | Descrição |
|---|---|
| **Descrição** | Primeira tela que a usuária vê ao acessar entreser.com.br. Apresenta a proposta da plataforma, os benefícios e convida ao cadastro. |
| **Navegação** | Ponto de entrada externo (URL direta, redes sociais, WhatsApp). Saídas: A.02 Cadastro ou A.03 Login. |

**Elementos na tela**
- Logo Entre Ser e tagline principal
- Seção "O que é o Entre Ser?" (texto + imagem ilustrativa)
- Cards de benefícios: comunidade, agendamento, conteúdo, IA
- Depoimentos de outras usuárias (futuro)
- Botão de Call to Action principal: "Quero fazer parte"
- Botão secundário: "Já tenho conta — Entrar"
- Seção de planos (gratuito vs. premium)
- Rodapé com links: Política de Privacidade, Contato, Redes Sociais

**Ações da usuária**
- Clicar em "Quero fazer parte" → redireciona para tela de Cadastro (A.02)
- Clicar em "Já tenho conta" → redireciona para Login (A.03)
- Navegar entre seções da landing page via scroll ou menu âncora
- Selecionar plano e avançar para cadastro

---

### Tela A.02 — Cadastro

| Campo | Descrição |
|---|---|
| **Descrição** | Formulário de criação de conta. A usuária informa dados básicos e seleciona seu momento no processo de reprodução assistida. |
| **Navegação** | Vem de: A.01 Landing Page. Saídas: confirmação por e-mail → A.04 Home. Em caso de conta existente: A.03 Login. |

**Elementos na tela**
- Campo: Nome completo
- Campo: E-mail
- Campo: Senha (com confirmação)
- Seletor de fase: "Em que momento você está?" (Preparação, Estimulação, Coleta/Transferência, Beta, Pós-resultado, Aguardando próximo ciclo)
- Checkbox: Aceito os Termos de Uso e Política de Privacidade
- Botão: "Criar minha conta"
- Link: "Já tenho conta — Entrar"

**Ações da usuária**
- Preencher dados pessoais
- Selecionar fase atual no tratamento
- Aceitar termos
- Submeter formulário
- Navegar para Login (A.03)

---

### Tela A.03 — Login

| Campo | Descrição |
|---|---|
| **Descrição** | Tela de autenticação para usuárias já cadastradas. Acesso via e-mail/senha ou WhatsApp. |
| **Navegação** | Ponto de entrada direto. Saídas: A.04 Home (autenticação bem-sucedida) ou A.02 Cadastro. |

**Elementos na tela**
- Campo: E-mail
- Campo: Senha
- Link: "Esqueci minha senha"
- Botão: "Entrar"
- Divisor "ou"
- Botão: "Entrar com WhatsApp" (envio de link mágico)
- Link: "Ainda não tenho conta — Cadastrar"

**Ações da usuária**
- Inserir credenciais e fazer login
- Solicitar recuperação de senha
- Entrar via link enviado ao WhatsApp
- Navegar para Cadastro (A.02)

---

### Tela A.04 — Home / Dashboard

| Campo | Descrição |
|---|---|
| **Descrição** | Tela principal após login. Apresenta saudação personalizada, resumo da fase atual e atalhos para os módulos mais relevantes. |
| **Navegação** | Destino após Login (A.03) ou Cadastro (A.02). Hub central → A.05, A.06, A.07, A.08, A.09. |

**Elementos na tela**
- Saudação: "Olá, [Nome]! Você está na fase: [fase atual]"
- Card de fase com descrição contextual e ícone
- Atalhos rápidos: Comunidade, Agendar, Feed, Assistente IA
- Seção "Conteúdo para você" (3 artigos/vídeos recomendados pela fase)
- Notificações: lembretes de consulta, novidades na comunidade
- Menu de navegação inferior: Home · Comunidade · Agendar · Feed · Perfil

**Ações da usuária**
- Tocar nos atalhos para navegar entre módulos
- Ler ou acessar conteúdo recomendado
- Ver e interagir com notificações
- Navegar pelo menu inferior

---

### Tela A.05 — Comunidade

| Campo | Descrição |
|---|---|
| **Descrição** | Espaço de conexão entre as usuárias. Combina um fórum interno moderado com acesso facilitado ao grupo de WhatsApp da comunidade. |
| **Navegação** | Acessada via Home (A.04) ou menu inferior. Saídas: post individual → comentários; acesso externo → WhatsApp. |

**Elementos na tela**
- Feed de posts da comunidade (texto, imagem, pergunta)
- Botão: "Nova publicação"
- Filtros de tópico: Dúvidas, Experiências, Apoio, Conquistas
- Card de acesso ao grupo WhatsApp da comunidade
- Indicador de membros online
- Barra de busca por tema ou palavra-chave

**Ações da usuária**
- Publicar texto ou pergunta na comunidade
- Reagir (curtir, abraçar) e comentar em posts
- Filtrar por tópico de interesse
- Entrar no grupo de WhatsApp via botão de acesso
- Buscar publicações específicas

---

### Tela A.06 — Agendamento

| Campo | Descrição |
|---|---|
| **Descrição** | Tela para visualizar disponibilidade e agendar sessões individuais, para casais, grupos ou consultorias por fase do tratamento. |
| **Navegação** | Acessada via Home (A.04), atalho ou menu. Confirmação envia notificação e lembrete automático. |

**Elementos na tela**
- Seletor de tipo de sessão: Individual · Casal · Grupo · Consultoria por fase
- Calendário com disponibilidade da psicóloga
- Lista de horários disponíveis no dia selecionado
- Informações da sessão: duração, formato (online/presencial), valor
- Botão: "Confirmar agendamento"
- Seção "Minhas consultas": próximas e histórico

**Ações da usuária**
- Selecionar tipo de sessão
- Escolher data e horário no calendário
- Confirmar agendamento
- Cancelar ou reagendar consulta existente
- Visualizar histórico de sessões

---

### Tela A.07 — Feed & Trilhas de Aprendizagem

| Campo | Descrição |
|---|---|
| **Descrição** | Biblioteca de conteúdos educativos (artigos, vídeos, áudios) organizada por temas e fases. Inclui trilhas estruturadas de aprendizagem com progressão. |
| **Navegação** | Acessada via Home (A.04) ou menu. Conteúdos personalizados pela fase atual da usuária. |

**Elementos na tela**
- Tabs: "Para você" (personalizado) · "Trilhas" · "Explorar"
- Cards de conteúdo: título, tipo (artigo/vídeo/áudio), duração, fase relevante
- Seção de Trilhas: lista de trilhas com progresso (barra ou %)
- Filtros: fase do ciclo, tipo de mídia, duração
- Marcador de conteúdo como favorito
- Barra de progresso na trilha em andamento

**Ações da usuária**
- Acessar artigo, vídeo ou áudio
- Iniciar ou continuar uma trilha de aprendizagem
- Filtrar conteúdo por fase ou formato
- Salvar conteúdo nos favoritos
- Marcar conteúdo como concluído

---

### Tela A.08 — Assistente IA via WhatsApp

| Campo | Descrição |
|---|---|
| **Descrição** | A usuária interage com o assistente conversacional da Entre Ser diretamente pelo WhatsApp, disponível 24h. O assistente responde dúvidas, oferece acolhimento e sugere conteúdos. |
| **Navegação** | Acesso externo via link no WhatsApp ou número salvo. Não depende de login na plataforma. Pode encaminhar para A.06 Agendamento. |

**Elementos na tela**
- Interface nativa do WhatsApp (experiência familiar à usuária)
- Mensagem de boas-vindas personalizada ao primeiro acesso
- Respostas contextualizadas à fase da usuária
- Sugestões de conteúdo relevante durante a conversa
- Mensagem de encaminhamento para psicóloga quando necessário

**Ações da usuária**
- Enviar mensagem de texto ao assistente
- Fazer perguntas sobre o tratamento, emoções ou a plataforma
- Receber conteúdo recomendado como resposta
- Solicitar agendamento de consulta via chat
- Receber lembretes e notificações proativas

---

## BLOCO B · Módulos de Saúde Mental

### Tela B.01 — Trilhas Terapêuticas

| Campo | Descrição |
|---|---|
| **Descrição** | Tela principal do módulo de trilhas terapêuticas. Exibe as seis trilhas disponíveis, o progresso da usuária e recomendações baseadas na fase atual. |
| **Navegação** | Acessada via Home (A.04) ou aba Trilhas no Feed (A.07). Saída: B.02 Módulo da Trilha. |

**Elementos na tela**
- Card de cada trilha com: título, descrição breve, ícone e progresso (%)
- Indicador visual de trilha recomendada para a fase atual
- Trilha T1: Regulação Emocional
- Trilha T2: Preparação para FIV
- Trilha T3: Luto Reprodutivo
- Trilha T4: Fortalecimento do Casal
- Trilha T5: Apoio no Beta
- Trilha T6: Autocuidado
- Botão de retomada da trilha em andamento

**Ações da usuária**
- Visualizar todas as trilhas disponíveis
- Iniciar uma nova trilha
- Retomar trilha em andamento
- Ver detalhes e descrição de cada trilha
- Acessar trilha recomendada automaticamente

---

### Tela B.02 — Módulo Interno da Trilha

| Campo | Descrição |
|---|---|
| **Descrição** | Tela de execução de uma trilha terapêutica. Apresenta os módulos e lições em sequência, com conteúdo multimídia e exercícios reflexivos. |
| **Navegação** | Vem de: B.01 Mapa de Trilhas. Saídas: próxima lição, B.04 Diário Emocional ou B.01 (conclusão do módulo). |

**Elementos na tela**
- Progresso da trilha (ex: Módulo 2 de 5 — Lição 3 de 4)
- Barra de progresso visual
- Conteúdo da lição: texto, áudio ou vídeo curto
- Exercício reflexivo ao final da lição (pergunta aberta ou escala)
- Botões: "Voltar" e "Próxima lição"
- Opção de salvar resposta no Diário Emocional (B.04)

**Ações da usuária**
- Avançar ou retroceder entre lições
- Assistir vídeo ou ouvir áudio da lição
- Responder exercício reflexivo
- Salvar reflexão no Diário Emocional
- Pausar e retomar depois

---

### Tela B.03 — Painel de Fase Adaptativa

| Campo | Descrição |
|---|---|
| **Descrição** | Painel que exibe conteúdos e recursos automaticamente adaptados à fase do ciclo de tratamento em que a usuária se encontra no momento. |
| **Navegação** | Acessada via Home (A.04) pelo card de fase ou menu. Alimenta recomendações em A.04, A.07 e B.01. |

**Elementos na tela**
- Banner da fase atual: nome, ícone e descrição emocional da fase
- Fase atual destacada: Indução · Coleta/Transferência · Beta · Pós-resultado
- Seção "O que esperar nesta fase" (orientações psicológicas)
- Conteúdos recomendados para esta fase
- Trilha terapêutica mais indicada agora
- Botão: "Atualizar minha fase" (caso mude de etapa)

**Ações da usuária**
- Ler orientações sobre a fase atual
- Acessar conteúdo personalizado recomendado
- Iniciar trilha sugerida pela fase
- Atualizar fase do ciclo manualmente

---

### Tela B.04 — Diário Emocional

| Campo | Descrição |
|---|---|
| **Descrição** | Espaço seguro e privado para a usuária registrar seus sentimentos, pensamentos e reflexões ao longo do tratamento. |
| **Navegação** | Acessada via Home (A.04), menu ou a partir de lições de trilha (B.02). Entradas são privadas e visíveis apenas à usuária. |

**Elementos na tela**
- Lista de entradas do diário (data, emoção predominante, trecho)
- Botão: "Nova entrada"
- Seletor de emoção predominante (ícones: alegria, ansiedade, tristeza, esperança, exaustão)
- Campo de texto livre para o relato
- Prompt clínico do dia (pergunta reflexiva sugerida)
- Opção de vincular entrada a uma fase ou trilha
- Histórico filtrável por mês ou emoção

**Ações da usuária**
- Criar nova entrada no diário
- Selecionar emoção predominante
- Escrever reflexão livre
- Responder ao prompt clínico sugerido
- Visualizar entradas anteriores
- Filtrar histórico por período ou emoção

---

### Tela B.05 — Termômetro Emocional

| Campo | Descrição |
|---|---|
| **Descrição** | Check-in emocional rápido e interativo. A usuária avalia como está se sentindo e recebe orientação contextualizada. |
| **Navegação** | Acessada via Home (A.04), widget de check-in ou IA de triagem (B.07). Pode redirecionar para B.04, B.01 ou B.06. |

**Elementos na tela**
- Visual do termômetro (escala de 1 a 10, colorida do frio ao quente)
- Pergunta central: "Como você está se sentindo hoje?"
- Seletor de intensidade emocional (deslizante ou toque nos ícones)
- Campo opcional: "O que está pesando hoje?" (texto curto)
- Resultado: mensagem acolhedora + sugestão personalizada
- Histórico semanal de registros do termômetro (gráfico simples)

**Ações da usuária**
- Deslizar o indicador para registrar intensidade emocional
- Adicionar contexto opcional em texto
- Receber mensagem de acolhimento
- Acessar sugestão de trilha ou diário a partir do resultado
- Ver histórico de como estava em dias anteriores

---

### Tela B.06 — Grupos Terapêuticos Mediados

| Campo | Descrição |
|---|---|
| **Descrição** | Espaço de terapia em grupo online, mediado por psicóloga. Grupos fechados de 8 a 10 mulheres por fase de tratamento. |
| **Navegação** | Acessada via Home (A.04) ou menu. Participação via convite da psicóloga ou indicação da IA (B.07). Sessões ao vivo via videochamada integrada. |

**Elementos na tela**
- Card do grupo: nome, tema, psicóloga facilitadora, número de participantes
- Próxima sessão: data, horário e link de acesso
- Histórico de sessões anteriores
- Lista de membros do grupo (nomes ou apelidos — privacidade protegida)
- Espaço de mensagens assíncronas entre sessões
- Botão: "Entrar na sessão ao vivo"

**Ações da usuária**
- Acessar a sessão ao vivo no dia e horário marcados
- Enviar mensagem assíncrona ao grupo
- Ver perfil público (apelido) das outras participantes
- Consultar materiais compartilhados pela facilitadora
- Ver próximas sessões agendadas

---

### Tela B.07 — IA de Triagem e Routing

| Campo | Descrição |
|---|---|
| **Descrição** | Interface de triagem inteligente. A IA avalia o estado emocional da usuária (via chat ou check-in) e a direciona para o recurso mais adequado: trilha, diário, grupo ou psicóloga. |
| **Navegação** | Acessada via Home (A.04), WhatsApp (A.08) ou resultado do Termômetro (B.05). Saídas: B.01, B.04, B.05, B.06, A.06 ou A.08. |

**Elementos na tela**
- Interface de chat acolhedor com a IA
- Mensagem inicial: "Como posso te apoiar hoje?"
- Fluxo de perguntas curtas para identificar necessidade
- Resultado da triagem: cards de encaminhamento sugerido
- Opções de direcionamento: Trilha terapêutica · Diário · Termômetro · Agendar com psicóloga · Grupo terapêutico
- Botão de acesso direto ao recurso indicado

**Ações da usuária**
- Responder as perguntas de triagem emocional
- Receber encaminhamento personalizado
- Aceitar sugestão e ser direcionada ao recurso indicado
- Recusar e explorar outras opções manualmente
- Iniciar conversa livre com a IA para orientação

---

## Fluxo de Navegação — Resumo

### Bloco A — Fluxo Principal

```
A.01 Landing Page     → Cadastro (A.02) ou Login (A.03)
A.02 Cadastro         → E-mail de confirmação → Home (A.04)
A.03 Login            → Home (A.04)
A.04 Home/Dashboard   → Comunidade (A.05), Agendamento (A.06), Feed (A.07), WhatsApp IA (A.08)
A.05 Comunidade       → Post individual, WhatsApp Grupo
A.06 Agendamento      → Confirmação + Notificação
A.07 Feed & Trilhas   → Trilhas Terapêuticas Bloco B (B.01)
A.08 Assistente IA    → Agendamento (A.06), Conteúdo
```

### Bloco B — Fluxo Principal

```
B.01 Mapa de Trilhas     → Módulo da Trilha (B.02)
B.02 Módulo Trilha       → Próxima lição, Diário Emocional (B.04)
B.03 Painel de Fase      → Conteúdo personalizado, Trilha recomendada
B.04 Diário Emocional    → Histórico, Trilha (B.01)
B.05 Termômetro          → Diário (B.04), Trilha (B.01), IA Triagem (B.07)
B.06 Grupo Terapêutico   → Sessão ao vivo, Mensagens assíncronas
B.07 IA Triagem          → Trilha (B.01), Diário (B.04), Grupo (B.06), Agendamento (A.06)
```

---

*Entre Ser × SW3 Tecnologia & Inovação*
*Documentação de Protótipo — Perspectiva da Usuária*
*Março 2026 · Confidencial*