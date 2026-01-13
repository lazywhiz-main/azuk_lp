import Container from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
  title: 'サポート | azuk',
  description: 'azukのサポート情報です。',
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-sub hover:text-primary transition-colors mb-8"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M12.5 5l-5 5 5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ホームに戻る
          </Link>

          <h1 className="text-4xl font-bold mb-8">サポート</h1>

          <div className="bg-surface rounded-xl shadow-md p-8 space-y-8">
            <section>
              <p className="text-base leading-relaxed mb-6">
                azukに関するご質問やお困りのことがございましたら、こちらをご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">よくある質問</h2>
              <p className="text-base leading-relaxed mb-4">
                よくある質問については、
                <Link href="/#faq" className="text-accent hover:underline">
                  よくある質問ページ
                </Link>
                をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
              <p className="text-base leading-relaxed mb-4">
                azukに関するご質問、ご意見、ご要望がございましたら、
                <Link href="/contact" className="text-accent hover:underline">
                  お問い合わせフォーム
                </Link>
                よりお気軽にお問い合わせください。
              </p>
              <div className="bg-background rounded-lg p-4 mt-4">
                <p className="text-sm text-text-sub">
                  <strong>お問い合わせ先：</strong>
                  <br />
                  メールアドレス：contact_azuk@lazywhiz.io
                  <br />
                  返信には数営業日かかる場合がございます。あらかじめご了承ください。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">関連情報</h2>
              <ul className="space-y-3 text-base leading-relaxed">
                <li>
                  <Link href="/privacy" className="text-accent hover:underline">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/external-transmission" className="text-accent hover:underline">
                    外部送信ポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-accent hover:underline">
                    利用規約
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}

