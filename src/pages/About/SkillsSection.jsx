import { useEffect, useRef } from "react"

export default function SkillsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll("[data-animate]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10")
              entry.target.classList.add("opacity-100", "translate-y-0")
            }, index * 150) // stagger animation
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28 max-[768px]:py-14">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6 text-center">

        {/* titre */}
        <h2
          data-animate
          className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-16 max-[768px]:text-3xl max-[768px]:mb-10 opacity-0 translate-y-10 transition-all duration-700"
        >
          Notre expertise & savoir-faire
        </h2>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-[768px]:gap-8">

          {/* card 1 */}
          <div
            data-animate
            className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-2 opacity-0 translate-y-10 transition-all duration-700 hover:rotate-0 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
              Conception sur mesure
            </h3>
            <p className="text-[#2B2B2B]/80 text-sm leading-relaxed">
              Chaque projet est analysé et adapté selon vos besoins pour créer des espaces uniques et fonctionnels.
            </p>
          </div>

          {/* card 2 */}
          <div
            data-animate
            className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-2 opacity-0 translate-y-10 transition-all duration-700 hover:rotate-0 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
              Expertise technique
            </h3>
            <p className="text-[#2B2B2B]/80 text-sm leading-relaxed">
              Notre équipe maîtrise parfaitement les matériaux et techniques pour garantir qualité et durabilité.
            </p>
          </div>

          {/* card 3 */}
          <div
            data-animate
            className="bg-white rounded-3xl p-8 shadow-2xl transform -rotate-1 opacity-0 translate-y-10 transition-all duration-700 hover:rotate-0 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-[#1E2A38] mb-4">
              Accompagnement
            </h3>
            <p className="text-[#2B2B2B]/80 text-sm leading-relaxed">
              Nous vous accompagnons à chaque étape pour un résultat parfait, du choix à la finalisation.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}