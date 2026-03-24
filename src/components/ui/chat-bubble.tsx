import { cn } from '@/lib/utils'

interface ChatBubbleProps {
  message: string
  sender: 'user' | 'ai'
  timestamp?: string
  className?: string
}

export function ChatBubble({
  message,
  sender,
  timestamp,
  className,
}: ChatBubbleProps) {
  const isUser = sender === 'user'

  return (
    <div
      className={cn(
        'max-w-[80%] p-4',
        isUser
          ? 'ml-auto rounded-[22px] rounded-br-sm bg-mauve text-white'
          : 'mr-auto rounded-[22px] rounded-bl-sm border border-plum/10 bg-white text-plum',
        className,
      )}
    >
      <p className="text-sm leading-relaxed">{message}</p>
      {timestamp && (
        <span className="mt-1 block text-xs opacity-60">{timestamp}</span>
      )}
    </div>
  )
}
