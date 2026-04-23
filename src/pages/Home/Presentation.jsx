import { useEffect, useRef } from "react"
import img from "/images/home/acceuil_home4.jpg"

export default function Presentation() {
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
      className="py-32 md:py-36 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={img}
            alt="Présentation"
            className="w-full h-[500px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700 max-[768px]:h-[300px]"
          />
        </div>

        <div className="text-[#1E2A38]">
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 max-[768px]:text-3xl">
            Sublimez Vos Espaces{" "}
            <span className="text-[#CBA18B]">Avec HEVIA</span>
          </h2>

          <p className="text-[#2B2B2B]/80 text-lg leading-relaxed mb-6 max-[768px]:text-sm">
            HEVIA transforme vos sols et murs en véritables œuvres d’art grâce
            à des matériaux de qualité et un savoir-faire unique. Du choix des
            carrelages à la pose, nous vous accompagnons pas à pas.
          </p>

          <p className="text-[#85796D] font-medium mb-10 max-[768px]:text-sm">
            Des matériaux triés sur le volet, des finitions haut de gamme, et
            un accompagnement personnalisé pour chaque projet.
          </p>

          <a className="inline-block bg-[#2B2B2B] text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-[#CBA18B] hover:text-[#2B2B2B] transition-all duration-300 max-[768px]:px-4 max-[768px]:py-2 max-[768px]:text-sm">
            En Savoir Plus
          </a>

        </div>

      </div>
    </section>
  )
}