import type { Metadata } from 'next'
import { cormorant, dmSans, onest } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'entre ser',
  description: 'Plataforma de saúde mental para tentantes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${dmSans.variable} ${onest.variable}`}>
        {children}
      </body>
    </html>
  )
}
