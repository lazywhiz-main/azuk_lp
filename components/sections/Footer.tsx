import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className="bg-primary text-surface py-8 text-center">
      <Container>
        <div className="text-3xl font-bold mb-4">azuk</div>
        <div className="flex gap-6 justify-center flex-wrap mb-4">
          <Link href="/privacy" className="text-surface text-sm hover:opacity-80 transition-opacity">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="text-surface text-sm hover:opacity-80 transition-opacity">
            利用規約
          </Link>
          <Link href="/contact" className="text-surface text-sm hover:opacity-80 transition-opacity">
            お問い合わせ
          </Link>
        </div>
        <div className="text-xs text-text-sub mt-4">
          © 2025 azuk. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

