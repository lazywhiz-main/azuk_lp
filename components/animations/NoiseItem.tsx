'use client'

import { useEffect, useRef, useState } from 'react'

interface NoiseItemProps {
  text: string
  initialY: number
  driftRate: number
}

export default function NoiseItem({ text, initialY, driftRate }: NoiseItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const yPositionRef = useRef(initialY)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const lastTimeRef = useRef<number | undefined>(undefined)
  const [position, setPosition] = useState<{ left: string; top: string } | null>(null)

  // クライアントサイドでのみ位置を設定（ハイドレーションミスマッチを防ぐ）
  useEffect(() => {
    setPosition({
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
    })
  }, [])

  useEffect(() => {
    if (!position) return

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const deltaTime = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp

      if (itemRef.current) {
        yPositionRef.current += driftRate * (deltaTime / 16)
        
        // 画面外に出たら上に戻す
        if (yPositionRef.current > 1000) {
          yPositionRef.current = -100
        }

        itemRef.current.style.transform = `translateY(${yPositionRef.current}px)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [driftRate, position])

  // サーバーサイドでは位置を設定せず、クライアントサイドで設定されるまで非表示
  if (!position) {
    return null
  }

  return (
    <div
      ref={itemRef}
      className="absolute text-xs text-slate-400 opacity-30 select-none pointer-events-none will-change-transform transition-all duration-1000 ease-out"
      style={position}
    >
      {text}
    </div>
  )
}




