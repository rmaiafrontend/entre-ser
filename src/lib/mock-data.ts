import type { Phase, EmotionType } from '@/types'

export const mockUser = {
  name: 'Ana',
  fullName: 'Ana Carolina Silva',
  email: 'ana.silva@email.com',
  phase: 'beta' as Phase,
}

export const mockPosts = [
  {
    authorName: 'Mariana Oliveira',
    timestamp: 'Há 2 horas',
    content: 'Meninas, acabei de sair da transferência e estou me sentindo tão ansiosa. Alguém tem dicas de como lidar com essa espera? 💜',
    topic: 'Apoio',
    likesCount: 12,
    commentsCount: 8,
    isLiked: true,
  },
  {
    authorName: 'Camila Ferreira',
    timestamp: 'Há 5 horas',
    content: 'Quero compartilhar que depois de 3 tentativas, finalmente deu positivo! Não percam a esperança, cada jornada tem seu tempo. 🌱',
    topic: 'Conquistas',
    likesCount: 47,
    commentsCount: 23,
    isLiked: false,
  },
  {
    authorName: 'Juliana Costa',
    timestamp: 'Há 1 dia',
    content: 'Alguém já fez estimulação com protocolo longo? Minha médica sugeriu e quero entender melhor como funciona.',
    topic: 'Dúvidas',
    likesCount: 5,
    commentsCount: 11,
    isLiked: false,
  },
  {
    authorName: 'Patrícia Mendes',
    timestamp: 'Há 1 dia',
    content: 'Hoje fiz meditação pela primeira vez usando a trilha de Regulação Emocional. Gente, que diferença faz tirar 10 minutinhos pra si mesma! Recomendo muito.',
    topic: 'Experiências',
    likesCount: 18,
    commentsCount: 6,
    isLiked: true,
  },
]

export const mockContent = [
  {
    title: 'Como lidar com a ansiedade na espera do beta',
    type: 'artigo' as const,
    duration: '5 min de leitura',
    phase: 'Beta',
    isFavorited: true,
  },
  {
    title: 'Meditação guiada para relaxamento',
    type: 'audio' as const,
    duration: '12 min',
    phase: 'Todas as fases',
    isFavorited: false,
  },
  {
    title: 'O que esperar após a transferência embrionária',
    type: 'video' as const,
    duration: '8 min',
    phase: 'Beta',
    isFavorited: false,
  },
  {
    title: 'Fortalecendo a relação do casal durante o tratamento',
    type: 'artigo' as const,
    duration: '7 min de leitura',
    phase: 'Todas as fases',
    isFavorited: true,
  },
  {
    title: 'Respiração 4-7-8 para momentos de crise',
    type: 'audio' as const,
    duration: '5 min',
    phase: 'Todas as fases',
    isFavorited: false,
  },
  {
    title: 'Depoimento: minha jornada de 2 anos até o positivo',
    type: 'video' as const,
    duration: '15 min',
    phase: 'Todas as fases',
    isFavorited: false,
  },
]

export const mockTrails = [
  {
    id: 't1',
    title: 'Regulação Emocional',
    description: 'Aprenda técnicas para identificar e gerenciar suas emoções durante o tratamento.',
    progress: 65,
    icon: '🧘',
    isRecommended: false,
    modules: 5,
    currentModule: 3,
    currentLesson: 2,
    totalLessons: 4,
  },
  {
    id: 't2',
    title: 'Preparação para FIV',
    description: 'Tudo que você precisa saber sobre o processo, do início à transferência.',
    progress: 30,
    icon: '📋',
    isRecommended: false,
    modules: 4,
    currentModule: 2,
    currentLesson: 1,
    totalLessons: 3,
  },
  {
    id: 't3',
    title: 'Luto Reprodutivo',
    description: 'Espaço seguro para processar perdas e frustrações no caminho da maternidade.',
    progress: 0,
    icon: '🕊️',
    isRecommended: false,
    modules: 4,
    currentModule: 1,
    currentLesson: 1,
    totalLessons: 4,
  },
  {
    id: 't4',
    title: 'Fortalecimento do Casal',
    description: 'Fortaleça a parceria e a comunicação com quem está ao seu lado.',
    progress: 0,
    icon: '💑',
    isRecommended: false,
    modules: 3,
    currentModule: 1,
    currentLesson: 1,
    totalLessons: 3,
  },
  {
    id: 't5',
    title: 'Apoio no Beta',
    description: 'Suporte emocional para a fase de espera do resultado — uma das mais intensas.',
    progress: 10,
    icon: '🤞',
    isRecommended: true,
    modules: 3,
    currentModule: 1,
    currentLesson: 2,
    totalLessons: 3,
  },
  {
    id: 't6',
    title: 'Autocuidado',
    description: 'Práticas diárias para manter corpo e mente em equilíbrio.',
    progress: 45,
    icon: '🌸',
    isRecommended: false,
    modules: 5,
    currentModule: 3,
    currentLesson: 1,
    totalLessons: 4,
  },
]

export const mockScheduleSlots = [
  { time: '09:00', available: true },
  { time: '10:00', available: false },
  { time: '11:00', available: true },
  { time: '14:00', available: true },
  { time: '15:00', available: false },
  { time: '16:00', available: true },
]

export const mockAppointments = {
  upcoming: [
    {
      type: 'Individual',
      date: '28 de março, 2026',
      time: '14:00',
      format: 'Online',
      duration: '50 min',
    },
  ],
  history: [
    {
      type: 'Individual',
      date: '14 de março, 2026',
      time: '10:00',
      format: 'Online',
      duration: '50 min',
    },
    {
      type: 'Grupo',
      date: '7 de março, 2026',
      time: '19:00',
      format: 'Online',
      duration: '90 min',
    },
  ],
}

export const mockDiaryEntries = [
  {
    date: '22 de março',
    emotion: 'ansiedade' as EmotionType,
    excerpt: 'Amanhã é o dia do resultado do beta. Não consigo parar de pensar nisso...',
  },
  {
    date: '20 de março',
    emotion: 'esperanca' as EmotionType,
    excerpt: 'A meditação da trilha me ajudou muito hoje. Sinto que estou mais centrada.',
  },
  {
    date: '18 de março',
    emotion: 'tristeza' as EmotionType,
    excerpt: 'Difícil ver o anúncio de gravidez da colega. Fico feliz por ela, mas dói.',
  },
  {
    date: '15 de março',
    emotion: 'alegria' as EmotionType,
    excerpt: 'A transferência foi tranquila! A médica disse que os embriões estão ótimos.',
  },
]

export const mockNotifications = [
  {
    title: 'Consulta amanhã',
    description: 'Sessão individual com Dra. Beatriz às 14h',
    timestamp: 'Há 1 hora',
    isUnread: true,
  },
  {
    title: 'Nova publicação na comunidade',
    description: 'Camila compartilhou uma conquista',
    timestamp: 'Há 3 horas',
    isUnread: true,
  },
  {
    title: 'Trilha atualizada',
    description: 'Novo módulo disponível em Regulação Emocional',
    timestamp: 'Há 1 dia',
    isUnread: false,
  },
]

export const mockGroup = {
  groupName: 'Grupo Esperança',
  theme: 'Apoio emocional na fase Beta',
  facilitator: 'Dra. Beatriz Almeida',
  participantCount: 7,
  maxParticipants: 10,
  nextSessionDate: '25 de março, 2026',
  nextSessionTime: '19:00',
  members: [
    { name: 'Ana C.', initial: 'A' },
    { name: 'Mariana O.', initial: 'M' },
    { name: 'Juliana C.', initial: 'J' },
    { name: 'Camila F.', initial: 'C' },
    { name: 'Patrícia M.', initial: 'P' },
    { name: 'Renata S.', initial: 'R' },
    { name: 'Fernanda L.', initial: 'F' },
  ],
  asyncMessages: [
    { author: 'Mariana O.', message: 'Meninas, a sessão de ontem foi muito boa. Obrigada pelo acolhimento! 💜', time: 'Ontem, 21:30' },
    { author: 'Dra. Beatriz', message: 'Lembrem de praticar o exercício de respiração que fizemos. Um abraço em todas!', time: 'Ontem, 20:15' },
    { author: 'Juliana C.', message: 'Alguém mais está na fase de estimulação? Queria trocar experiências.', time: 'Hoje, 09:45' },
  ],
}

export const mockTriageMessages = [
  { sender: 'ai' as const, message: 'Olá, Ana! Como posso te apoiar hoje? 💜' },
  { sender: 'user' as const, message: 'Estou muito ansiosa com o resultado do beta que sai amanhã.' },
  { sender: 'ai' as const, message: 'Entendo perfeitamente, Ana. A espera pelo beta é uma das fases mais intensas emocionalmente. O que você está sentindo é completamente normal. Gostaria de te sugerir alguns recursos que podem ajudar:' },
]

export const mockTriageResults = [
  { title: 'Trilha: Apoio no Beta', description: 'Módulo específico para a fase que você está vivendo', href: '/trilhas/t5', icon: '🤞' },
  { title: 'Diário Emocional', description: 'Registre o que está sentindo agora', href: '/diario', icon: '📝' },
  { title: 'Termômetro Emocional', description: 'Faça um check-in rápido', href: '/termometro', icon: '🌡️' },
  { title: 'Agendar com psicóloga', description: 'Conversar com uma especialista', href: '/agendamento', icon: '🗓️' },
]

export const mockThermometerHistory = [
  { day: 'Seg', value: 4 },
  { day: 'Ter', value: 5 },
  { day: 'Qua', value: 3 },
  { day: 'Qui', value: 6 },
  { day: 'Sex', value: 7 },
  { day: 'Sáb', value: 5 },
  { day: 'Dom', value: 4 },
]

export const availableCalendarDays = [3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26]
