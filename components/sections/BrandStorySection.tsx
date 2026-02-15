'use client'

import Container from '@/components/ui/Container'

/**
 * ブランドストーリーセクション（Narrative Section）
 * 体験談セクション
 */
export default function BrandStorySection() {
  return <PersonalStorySection />
}

/**
 * 体験談セクション（Narrative Section）
 * 10年前のがん告知の体験談
 */
function PersonalStorySection() {
  return (
    <section className="py-[100px] md:py-20 bg-surface">
      <Container>
        <div className="max-w-[720px] mx-auto">
              <div className="text-lg md:text-lg leading-relaxed text-primary space-y-6 md:space-y-10">
                <p>10年前、私はがん告知を受けました。</p>
            <p>
              その日から、私の頭の中は得体の知れない「不確実性」に占拠されました。時間の長さも、ステージの数字も、関係ありません。情報の濁流によって、本来そこにいたはずの「自分」が、追い出されてしまったのです。
            </p>
            <p>
              深夜の検索、尽きない不安。自分の大切な「今日」までもが、がんに乗っ取られてしまった。
            </p>
            <p className="font-bold border-t border-border pt-10 mt-4">
              足が止まったのは、弱さのせいではありません。<br />
              一人の人間が背負うには、その荷物が、あまりに重すぎただけなのです。
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}




