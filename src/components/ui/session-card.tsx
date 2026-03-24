import { cn } from '@/lib/utils'
import { ESCard, CardContent } from '@/components/ui/card'

interface SessionCardProps {
  groupName: string
  theme: string
  facilitator: string
  participantCount: number
  maxParticipants: number
  nextSessionDate?: string
  nextSessionTime?: string
  className?: string
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-mauve">
      <path
        d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SessionCard({
  groupName,
  theme,
  facilitator,
  participantCount,
  maxParticipants,
  nextSessionDate,
  nextSessionTime,
  className,
}: SessionCardProps) {
  return (
    <ESCard className={className}>
      <CardContent className="gap-3 p-5">
        {/* Group name */}
        <h3 className="font-display text-lg leading-snug text-plum">
          {groupName}
        </h3>

        {/* Theme */}
        <p className="text-sm leading-relaxed text-plum/60">{theme}</p>

        {/* Facilitator */}
        <div className="flex flex-col gap-0.5">
          <span className="text-eyebrow">Facilitadora</span>
          <span className="text-sm text-plum">{facilitator}</span>
        </div>

        {/* Participants */}
        <div className="flex flex-col gap-0.5">
          <span className="text-eyebrow">Participantes</span>
          <span className="text-sm text-plum">
            {participantCount}/{maxParticipants} participantes
          </span>
        </div>

        {/* Next session */}
        {(nextSessionDate || nextSessionTime) && (
          <div className="flex items-center gap-2 rounded-xl bg-cream px-3 py-2">
            <CalendarIcon />
            <span className="text-sm text-plum">
              {nextSessionDate}
              {nextSessionDate && nextSessionTime && ' '}
              {nextSessionTime && (
                <span className="text-plum/50">{nextSessionTime}</span>
              )}
            </span>
          </div>
        )}
      </CardContent>
    </ESCard>
  )
}

export { SessionCard }
