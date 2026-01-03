import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

interface Plan {
  name: string
  price: string
  features: string[]
  isPremium?: boolean
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '¥0',
    features: [
      '月15チケット',
      '記録保存 無制限',
      'ロードマップ閲覧',
      '家族共有 1人まで',
    ],
  },
  {
    name: 'Premium',
    price: '¥980',
    features: [
      '月100チケット',
      'チケット繰越 最大50',
      '追加購入可能',
      '家族共有 無制限',
      'データエクスポート',
    ],
    isPremium: true,
  },
]

export default function PlanSection() {
  return (
    <section className="py-[100px] md:py-20 bg-surface">
      <Container>
        <h2 className="text-2xl md:text-2xl font-semibold text-center mb-6 md:mb-8">プラン</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[900px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-surface rounded-xl p-6 md:p-8 shadow-md border-2 ${
                plan.isPremium ? 'border-accent' : 'border-border'
              }`}
            >
              <div className="text-xl md:text-2xl font-bold mb-2">{plan.name}</div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-4 md:mb-6">
                {plan.price}
                <span className="text-sm md:text-base font-normal">/月</span>
              </div>
              <ul className="list-none mb-4 md:mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="py-1.5 md:py-2 text-primary text-base md:text-base">
                    <span className="text-accent font-bold mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-lg">
                <Button
                  href="#"
                  variant={plan.isPremium ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  App Storeで見る
                </Button>
                <Button
                  href="#"
                  variant={plan.isPremium ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Google Playで見る
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

