'use client'

import { useState, useEffect } from 'react'
import { NOISE_DATA } from '@/lib/constants'
import NoiseItem from '@/components/animations/NoiseItem'

interface NoiseItemData {
  text: string
  initialY: number
  driftRate: number
}

export default function HeroSection() {
  const [noiseItems, setNoiseItems] = useState<NoiseItemData[]>([])

  // クライアントサイドでのみランダム値を生成（ハイドレーションミスマッチを防ぐ）
  useEffect(() => {
    setNoiseItems(
      NOISE_DATA.map((text) => ({
        text,
        initialY: Math.random() * 50,
        driftRate: Math.random() * 0.1 + 0.05,
      }))
    )
  }, [])

  return (
    <section
      id="gravity-area"
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-primary border-b border-slate-800"
    >
      {/* メッセージ */}
      <h1 className="text-[36px] md:text-5xl font-normal text-left md:text-center z-10 px-6 leading-[1.6] md:leading-relaxed tracking-[0.125em] text-slate-200">
        不安をここに預けて、<br />
        あなたが思う大事なことに集中する。
      </h1>
      
      {/* サブテキスト */}
      <p className="text-base md:text-lg font-normal text-left md:text-center z-10 px-6 max-w-[700px] mx-auto leading-[1.7] md:leading-relaxed text-slate-400 mt-6">
        自分の「今日」が病気の情報に支配されてしまわないように。<br />
        情報の荷を解き、本来の自分を取り巻く「静寂」を確保するための<br />
        Life Design Logistics（ライフデザイン・ロジスティクス）
      </p>

      {/* 情報ノイズ要素 */}
      <div id="noise-container" className="absolute inset-0">
        {noiseItems.map((item, index) => (
          <NoiseItem
            key={index}
            text={item.text}
            initialY={item.initialY}
            driftRate={item.driftRate}
          />
        ))}
      </div>

      {/* CTAボタン */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 z-10 w-full md:w-auto px-6">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 text-base font-semibold text-primary bg-surface border-2 border-surface px-8 py-4 tracking-wide transition-all duration-300 rounded-lg shadow-lg w-full md:min-w-[180px] hover:-translate-y-0.5 hover:shadow-xl hover:bg-white active:translate-y-0 active:scale-95 active:shadow-md"
        >
          <svg className="w-5 h-5 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          App Store
        </a>
          <a
          href="#"
          className="inline-flex items-center justify-center gap-2 text-base font-semibold text-primary bg-surface border-2 border-surface px-8 py-4 tracking-wide transition-all duration-300 rounded-lg shadow-lg w-full md:min-w-[180px] hover:-translate-y-0.5 hover:shadow-xl hover:bg-white active:translate-y-0 active:scale-95 active:shadow-md"
        >
          <svg className="w-5 h-5 fill-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          Google Play
        </a>
      </div>
    </section>
  )
}

