import { useEffect, useRef } from "react"

const features = [
  {
    title: "Qualité supérieure",
    text: "Nos carrelages proviennent de fabricants européens reconnus pour leur savoir-faire et leur exigence. Chaque pièce est sélectionnée pour sa résistance, sa finition et sa durabilité.",
  },
  {
    title: "Design & Élégance",
    text: "HEVIA met l’accent sur des collections modernes, raffinées et intemporelles, adaptées à tous les styles d’intérieur : contemporain, rustique ou minimaliste.",
  },
  {
    title: "Accompagnement sur mesure",
    text: "Du conseil à la pose, notre équipe vous guide à chaque étape pour créer un espace harmonieux, durable et fidèle à votre style.",
  },
]

export default function Why() {
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
        className="max-w-[1200px] mx-auto px-6 text-center opacity-0 translate-y-10 transition-all duration-700"
      >
        
        <h2 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-10 max-[768px]:text-3xl">
          Chez <span className="text-[#CBA18B]">HEVIA</span>
        </h2>

        <p className="text-lg text-[#2B2B2B]/80 leading-relaxed max-w-3xl mx-auto mb-16 max-[768px]:text-sm">
          Chez{" "}
          <span className="font-semibold text-[#85796D]">
            HEVIA Béziers
          </span>
          , nous croyons que le carrelage est plus qu’un simple revêtement.
          C’est un élément central de votre intérieur, un choix qui allie style,
          durabilité et confort au quotidien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-[768px]:gap-6">
          
          {features.map((item, index) => (
            <div key={index} className="space-y-4">
              
              <div className="w-12 h-1 bg-[#CBA18B] rounded-full"></div>

              <h3 className="text-2xl font-semibold text-[#1E2A38] max-[768px]:text-base">
                {item.title}
              </h3>

              <p className="text-[#2B2B2B]/80 leading-relaxed text-sm max-[768px]:text-xs">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}