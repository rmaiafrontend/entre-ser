'use client'

import { cn } from '@/lib/utils'
import { ESCard, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ESAvatar } from '@/components/ui/avatar'
import { Tag } from '@/components/ui/tag'

interface PostCardProps {
  authorName: string
  authorAvatar?: string
  timestamp: string
  content: string
  topic?: string
  likesCount?: number
  commentsCount?: number
  isLiked?: boolean
  onLike?: () => void
  onComment?: () => void
  className?: string
}

function HeartIcon({ filled }: { filled: boolean }) {
  if (filled) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-mauve">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-plum/40">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-plum/40">
      <path
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function PostCard({
  authorName,
  authorAvatar,
  timestamp,
  content,
  topic,
  likesCount = 0,
  commentsCount = 0,
  isLiked = false,
  onLike,
  onComment,
  className,
}: PostCardProps) {
  return (
    <ESCard className={className}>
      <CardHeader className="flex items-center gap-3 px-5 pb-0 pt-5">
        <ESAvatar src={authorAvatar} name={authorName} size="sm" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-plum">{authorName}</span>
          <span className="text-xs text-plum/40">{timestamp}</span>
        </div>
      </CardHeader>

      <CardContent className="gap-3 px-5 py-3">
        {topic && <Tag label={topic} variant="plum" size="sm" />}
        <p className="text-sm leading-relaxed text-plum/80">{content}</p>
      </CardContent>

      <CardFooter className="gap-4 border-t border-plum/5 px-5 py-3">
        <button
          type="button"
          onClick={onLike}
          className="flex items-center gap-1.5 transition-colors hover:text-mauve"
        >
          <HeartIcon filled={isLiked} />
          <span className="text-xs text-plum/50">{likesCount}</span>
        </button>

        <button
          type="button"
          onClick={onComment}
          className="flex items-center gap-1.5 transition-colors hover:text-mauve"
        >
          <CommentIcon />
          <span className="text-xs text-plum/50">{commentsCount}</span>
        </button>
      </CardFooter>
    </ESCard>
  )
}

export { PostCard }
