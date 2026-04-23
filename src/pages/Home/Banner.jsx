import { useEffect, useRef } from "react"
import img from "/images/home/acceuil_home5.jpg"

export default function Banner() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10")
          el.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden opacity-0 translate-y-10 transition-all duration-700"
    >
      
      <img
        src={img}
        alt="Carrelage"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        
        <p className="uppercase tracking-[4px] text-white/70 text-sm mb-3">
          HEVIA Béziers
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          L’art du carrelage haut de gamme
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Des matériaux d’exception, un savoir-faire unique et une passion
          pour le détail au service de vos espaces.
        </p>

      </div>
    </section>
  )
}