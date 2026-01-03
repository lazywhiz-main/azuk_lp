import Container from '@/components/ui/Container'

export default function SecuritySection() {
  return (
    <section className="py-[100px] md:py-20 bg-background">
      <Container>
        <h2 className="text-2xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
          セキュリティとプライバシー
        </h2>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-base md:text-base text-text-sub leading-relaxed">
            すべてのデータは暗号化され、安全に保存されます。<br />
            プライバシーポリシーに従い、情報は適切に管理されます。
          </p>
        </div>
      </Container>
    </section>
  )
}

