"use client"

import { useEffect, useRef } from "react"
import { Info, Star, Gift } from "lucide-react"

const messages = [
  {
    text: "50% OFF on all Tattoos!",
    icon: <Info className="mr-2 inline h-6 w-6" />,
  },
  {
    text: "Don't miss this unbeatable offer!",
    icon: <Star className="mr-2 inline h-6 w-6" />,
  },
  {
    text: "Transform your skin with style!",
    icon: <Gift className="mr-2 inline h-6 w-6" />,
  },
]

const AnnouncementBar: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const container = scrollRef.current
    const itemWidth = container.children[0].clientWidth
    const totalWidth = itemWidth * messages.length

    const animate = () => {
      container.style.transition = "transform 15s linear"
      container.style.transform = `translateX(-${totalWidth}px)`
    }

    // Trigger the animation
    animate()

    // Reset animation after it finishes
    const resetAnimation = () => {
      container.style.transition = "none"
      container.style.transform = "translateX(0)"
      // Trigger reflow to restart the animation
      container.offsetHeight // eslint-disable-line no-unused-expressions
      container.style.transition = "transform 15s linear"
      animate()
    }

    container.addEventListener("transitionend", resetAnimation)

    return () => {
      container.removeEventListener("transitionend", resetAnimation)
    }
  }, [])

  return (
    <div className="relative overflow-hidden bg-[hsl(252,100%,69%)] text-white">
      <div className="flex whitespace-nowrap" ref={scrollRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex w-screen flex-none items-center px-4 py-2"
          >
            {message.icon}
            <p className="font-bold">{message.text}</p>
          </div>
        ))}
        {/* Duplicate messages to create a seamless loop effect */}
        {messages.map((message, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex w-screen flex-none items-center px-4 py-2"
          >
            {message.icon}
            <p className="font-bold">{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnnouncementBar
