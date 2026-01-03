import Container from '@/components/ui/Container'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'チケットとは何ですか？',
    answer:
      'AI機能（記録分析、ロードマップ生成など）を使用する際に消費する単位です。Freeプランは月15チケット、Premiumプランは月100チケットが付与されます。',
  },
  {
    question: 'データは安全ですか？',
    answer:
      'すべてのデータは暗号化され、安全に保存されます。詳細はプライバシーポリシーをご確認ください。',
  },
  {
    question: '家族共有はどのように機能しますか？',
    answer:
      '必要な情報だけを、必要な人に共有できます。Freeプランは1人まで、Premiumプランは無制限です。',
  },
  {
    question: 'プランはいつでも変更できますか？',
    answer: 'はい、いつでも変更できます。設定画面からプラン変更が可能です。',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-[100px] md:py-20 bg-background">
      <Container>
        <h2 className="text-2xl md:text-2xl font-semibold text-center mb-6 md:mb-8">よくある質問</h2>
        <div className="max-w-[800px] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 md:mb-6 pb-4 md:pb-6 ${
                index !== faqs.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <h3 className="text-lg md:text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-base md:text-base text-text-sub leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

