import Container from '@/components/ui/Container'

interface Step {
  label: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    label: 'UNLOAD',
    title: '預ける',
    description:
      '不安も記録もすべてAzukへ。一人で抱え込まず、仕組みに委ねて脳のメモリを解放します。',
  },
  {
    label: 'SORT',
    title: '整う',
    description:
      '情報のノイズを遮断し、AIが整理。あなたが納得して次を選べる「静寂」を取り戻します。',
  },
  {
    label: 'FOCUS',
    title: '動き出す',
    description:
      '空いた余白で、大事な人の手を握る。やりたかったことに、再び心を使えるようになります。',
  },
]

export default function LogisticsSection() {
  return (
    <section className="py-[100px] md:py-20 bg-background">
      <Container>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-5 text-primary leading-tight">
            意志や頑張りではなく、「仕組み」で自分を守る。
          </h2>
          <p className="text-text-sub text-base md:text-base">
            Azukは、あなたの「今日」を整える3ステップを提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-10 bg-surface rounded-2xl shadow-sm border border-black/5"
            >
              <span className="block font-bold text-accent text-xs tracking-widest mb-3">
                {step.label}
              </span>
              <h3 className="text-2xl md:text-2xl font-semibold mb-4 md:mb-5 text-primary">{step.title}</h3>
              <p className="text-base md:text-base text-text-sub leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

