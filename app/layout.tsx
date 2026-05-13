import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Rollback Manager — Instant Rollback for Broken AI Prompts',
  description: 'Version control system for AI prompts with one-click rollback when performance drops or errors spike. Built for AI product teams and developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="01c587cf-17d0-437c-b4c4-9c1802a1493c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
