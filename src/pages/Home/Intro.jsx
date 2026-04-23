import { useEffect, useRef } from "react"

export default function Intro() {
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
    <section className="mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div
          ref={ref}
          className="border border-black rounded-3xl bg-[#1E1E1E] text-white
          p-8 sm:p-12 md:p-16 lg:p-20
          transition-all duration-700
          hover:bg-black hover:shadow-2xl hover:scale-[1.01]
          opacity-0 translate-y-10"
        >
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            HEVIA,<br className="hidden sm:block" />
            l’excellence du carrelage
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Spécialisé dans le{" "}
            <span className="text-[#CBA18B] font-semibold">
              carrelage haut de gamme
            </span>
            , HEVIA allie élégance, précision et durabilité. Chaque projet
            reflète notre savoir-faire et notre passion pour la matière.
          </p>

        </div>

      </div>
    </section>
  )
}