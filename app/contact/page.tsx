'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '送信に失敗しました。')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setSubmitStatus('idle')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

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

          <h1 className="text-4xl font-bold mb-8">お問い合わせ</h1>

          <div className="bg-surface rounded-xl shadow-md p-8">
            {submitStatus === 'success' ? (
              // 送信完了画面
              <div className="text-center py-12">
                <div className="mb-6">
                  <svg
                    className="w-20 h-20 mx-auto text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-primary">送信完了</h2>
                <p className="text-lg text-text-sub mb-8">
                  お問い合わせを受け付けました。<br />
                  ありがとうございます。
                </p>
                <p className="text-sm text-text-sub mb-8">
                  お問い合わせへの返信には、数営業日かかる場合がございます。<br />
                  あらかじめご了承ください。
                </p>
                <Button
                  onClick={handleReset}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  もう一度送信する
                </Button>
              </div>
            ) : (
              // フォーム画面
              <>
                <p className="text-base leading-relaxed mb-8 text-text-sub">
                  azukに関するご質問、ご意見、ご要望がございましたら、以下のフォームよりお気軽にお問い合わせください。
                  お問い合わせへの返信には、数営業日かかる場合がございます。あらかじめご了承ください。
                </p>

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    送信に失敗しました。しばらく時間をおいて再度お試しください。
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  お名前 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  メールアドレス <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  件名 <span className="text-accent">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="general">一般的なお問い合わせ</option>
                  <option value="bug">不具合の報告</option>
                  <option value="feature">機能要望</option>
                  <option value="account">アカウントに関するお問い合わせ</option>
                  <option value="billing">課金・プランに関するお問い合わせ</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  お問い合わせ内容 <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-y"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '送信中...' : '送信する'}
                    </Button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <h2 className="text-xl font-semibold mb-4">よくある質問</h2>
                  <p className="text-base leading-relaxed mb-4 text-text-sub">
                    よくある質問については、
                    <Link href="/#faq" className="text-accent hover:underline">
                      よくある質問ページ
                    </Link>
                    をご確認ください。
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  )
}




