import Container from '@/components/ui/Container'

export default function PhilosophySection() {
  return (
    <section className="py-[100px] md:py-20 bg-primary text-surface text-center">
      <Container>
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 leading-relaxed">
            自分の歩幅で歩けるようになるまで、<br />
            私たちはそばにいる。
          </h2>
          <p className="max-w-[750px] mx-auto opacity-80 text-base md:text-lg leading-relaxed mb-10 md:mb-16">
            私たちは「無理に前を向け」とは言いません。告知後の嵐の中にいるあなたに必要なのは、励ましよりも先に、自分を取り巻く「静寂」を確保することだからです。
          </p>
          <a
            href="#"
            className="inline-block px-8 md:px-12 py-4 md:py-5 bg-accent text-white font-bold rounded-lg transition-transform hover:scale-105 text-sm md:text-base w-full md:w-auto"
          >
            まずは、最初の一荷（ひとか）を預けてみる
          </a>
        </div>
      </Container>
    </section>
  )
}

