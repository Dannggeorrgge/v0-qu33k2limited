'use client'

import { useEffect, useRef, useState } from 'react'

export function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const hasRunRef = useRef(false)

  useEffect(() => {
    if (hasRunRef.current) return

    hasRunRef.current = true
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(startValue + (target - startValue) * progress)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  return count
}
