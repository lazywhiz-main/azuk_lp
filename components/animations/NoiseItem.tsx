'use client'

import { useEffect, useRef } from 'react'

interface NoiseItemProps {
  text: string
  initialY: number
  driftRate: number
}

export default function NoiseItem({ text, initialY, driftRate }: NoiseItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const yPositionRef = useRef(initialY)
  const animationFrameRef = useRef<number>()
  const lastTimeRef = useRef<number>()

  useEffect(() => {
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
  }, [driftRate])

  return (
    <div
      ref={itemRef}
      className="absolute text-xs text-slate-400 opacity-30 select-none pointer-events-none will-change-transform transition-all duration-1000 ease-out"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
      }}
    >
      {text}
    </div>
  )
}




