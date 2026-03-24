import { Cormorant_Garamond, DM_Sans, Onest } from 'next/font/google'

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

export const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
})
