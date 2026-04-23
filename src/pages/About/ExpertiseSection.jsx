import { useEffect, useRef } from "react"
import imgMain from "/images/home/apropos_home2.jpg"
import logo from "/images/logo/logo-hevia.jpg"

export default function ExpertiseSection() {
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
    <section className="py-28 max-[768px]:py-14">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 opacity-0 translate-y-10 transition-all duration-700"
      >
        
        {/* TEXTE */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E2A38] max-[768px]:text-3xl">
            L’expertise & l’innovation chez{" "}
            <span className="text-[#CBA18B]">HEVIA</span>
          </h2>

          <p className="text-lg text-[#2B2B2B]/80 leading-relaxed max-[768px]:text-sm">
            Chez{" "}
            <span className="font-semibold text-[#85796D]">HEVIA</span>, nous mettons
            notre savoir-faire au service de projets modernes et durables.
            Chaque choix, chaque matériau est pensé pour allier{" "}
            <span className="font-semibold">
              qualité, esthétisme et innovation
            </span>.
          </p>

          <p className="text-lg text-[#2B2B2B]/80 leading-relaxed max-[768px]:text-sm">
            Nos solutions vont au-delà du carrelage : nous proposons des idées
            créatives et personnalisées pour transformer vos espaces.
          </p>
        </div>

        {/* IMAGES */}
        <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
          
          {/* image principale */}
          <img
            src={imgMain}
            alt="Expertise HEVIA"
            className="w-72 md:w-80 rounded-[30px] shadow-2xl object-cover -rotate-3 border-4 border-[#CBA18B] transition-transform duration-500 hover:rotate-0"
          />

          {/* carte/logo */}
          <img
            src={logo}
            alt="Logo HEVIA"
            className="absolute bottom-[-25px] right-[-25px] w-32 md:w-40 rounded-2xl shadow-lg object-cover rotate-6 border-2 border-[#85796D] transition-transform duration-500 hover:rotate-0"
          />
        </div>

      </div>
    </section>
  )
}