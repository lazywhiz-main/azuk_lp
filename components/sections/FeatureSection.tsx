import Container from '@/components/ui/Container'

interface Feature {
  step: string
  title: string
  description: string
  reverse?: boolean
}

const features: Feature[] = [
  {
    step: 'STEP 1: UNLOAD',
    title: '記録から始まる、正しい情報の提案',
    description:
      '録音やメモを預けるだけで、あなたの状況に追従して、信頼性の高い出典からカスタマイズされた情報をおすすめします。もう、情報の濁流に一人で立ち向かう必要はありません。',
  },
  {
    step: 'STEP 2: SORT',
    title: '治療の可視化と、専門家AIとの対話',
    description:
      '自身の治療の流れを一目で把握。さらにAI管理栄養士など、各分野の専門キャラクターが対話を通じてあなたをサポートします。専門的な情報を、納得感のある自分の知識へと整えます。',
    reverse: true,
  },
  {
    step: 'STEP 3: FOCUS',
    title: '納得感のある共有と、日常への復帰',
    description:
      '集まった情報の中から、家族に伝えたいものだけを選んで共有できます。情報の管理をAzukに任せることで生まれた「余白」を、キャリアや大切な人との時間に注ぎ込んでください。',
  },
]

export default function FeatureSection() {
  return (
    <section className="py-[100px] md:py-20 bg-surface">
      <Container>
        <div className="max-w-[1000px] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-[100px] md:mb-20 last:mb-0 ${
                feature.reverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-[1.2] w-full md:w-auto">
                <span className="block font-bold text-accent text-xs tracking-widest mb-3">
                  {feature.step}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-primary leading-tight">
                  {feature.title}
                </h2>
                <p className="text-base md:text-base text-text-sub leading-relaxed">{feature.description}</p>
              </div>
              <div className="w-[300px] h-[300px] md:flex-1 md:w-auto md:h-auto md:aspect-square bg-surface rounded-full border border-border shadow-sm flex items-center justify-center text-text-sub text-xs md:text-sm mx-auto md:mx-0">
                <span>[視覚的表現]</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

