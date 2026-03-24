export type Size = 'sm' | 'md' | 'lg'

export type EmotionType = 'alegria' | 'ansiedade' | 'tristeza' | 'esperanca' | 'exaustao'

export type Phase =
  | 'preparacao'
  | 'estimulacao'
  | 'coleta-transferencia'
  | 'beta'
  | 'pos-resultado'
  | 'aguardando-proximo-ciclo'

export const PHASE_LABELS: Record<Phase, string> = {
  preparacao: 'Preparação',
  estimulacao: 'Estimulação',
  'coleta-transferencia': 'Coleta / Transferência',
  beta: 'Beta',
  'pos-resultado': 'Pós-resultado',
  'aguardando-proximo-ciclo': 'Aguardando próximo ciclo',
}

export const EMOTION_LABELS: Record<EmotionType, string> = {
  alegria: 'Alegria',
  ansiedade: 'Ansiedade',
  tristeza: 'Tristeza',
  esperanca: 'Esperança',
  exaustao: 'Exaustão',
}

export const EMOTION_EMOJIS: Record<EmotionType, string> = {
  alegria: '☀️',
  ansiedade: '🌀',
  tristeza: '🌧️',
  esperanca: '🌱',
  exaustao: '🪫',
}
