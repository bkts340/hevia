import { useEffect, useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Conseil & Écoute",
    text: "Nous analysons vos besoins et votre style afin de vous proposer des solutions adaptées à vos espaces.",
  },
  {
    number: "02",
    title: "Sélection & Qualité",
    text: "Nos experts vous orientent vers les meilleures gammes issues de fabricants européens haut de gamme.",
  },
  {
    number: "03",
    title: "Préparation & Logistique",
    text: "Votre commande est soigneusement vérifiée et préparée, avec des délais respectés à chaque étape.",
  },
  {
    number: "04",
    title: "Livraison & Pose",
    text: "Nous collaborons avec des artisans partenaires qualifiés pour garantir une pose parfaite et durable.",
  },
]

export default function Process() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll(".step")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.remove("opacity-0", "translate-y-10")
                item.classList.add("opacity-100", "translate-y-0")
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-40 max-[768px]:py-20">
      
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold text-center text-[#1E2A38] mb-10 max-[768px]:text-3xl">
          Notre <span className="text-[#CBA18B]">procédure HEVIA</span>
        </h2>

        <p className="text-lg text-[#2B2B2B]/80 leading-relaxed max-w-3xl mx-auto text-center mb-24 max-[768px]:text-sm">
          Chaque projet est traité avec rigueur et précision, du premier échange jusqu’à la réalisation finale.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 max-[768px]:gap-6">

          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-[#CBA18B]/30"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="step relative flex flex-col items-center text-center
              opacity-0 translate-y-10 transition-all duration-700"
            >

              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-[#CBA18B]
              flex items-center justify-center shadow-lg transition-all duration-300
              hover:bg-[#CBA18B] hover:text-white">

                <span className="text-[#CBA18B] text-xl font-bold transition-all duration-300
                group-hover:text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#1E2A38] max-[768px]:text-base">
                {step.title}
              </h3>

              <p className="mt-3 text-[#2B2B2B]/80 leading-relaxed text-sm max-[768px]:text-xs max-w-[220px]">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}