import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Bushrati",
  description: 'You deserve the whole world',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Almarai:wght@300;400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
} 