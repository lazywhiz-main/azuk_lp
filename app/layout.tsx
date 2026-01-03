import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'azuk - 必要な情報に、たどり着いていますか？',
  description: 'azukは、がん治療中の情報を整理するアプリです。記録を残し、治療の流れを可視化し、家族と情報を共有します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}




