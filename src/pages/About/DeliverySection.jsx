import { useEffect, useRef } from "react"

export default function DeliverySection() {
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
    <section className="relative py-24 overflow-hidden max-[768px]:py-14">
      
      <div
        ref={ref}
        className="max-w-[1000px] mx-auto px-6 text-center opacity-0 translate-y-10 transition-all duration-700"
      >

        {/* titre */}
        <h2 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-10 max-[768px]:text-3xl">
          Livraison & Disponibilité
        </h2>

        {/* texte */}
        <p className="text-lg text-[#2B2B2B]/80 leading-relaxed mb-16 max-[768px]:text-sm">
          HEVIA assure la livraison dans toute la région{" "}
          <span className="font-semibold text-[#85796D]">Occitanie</span> et au-delà.
          Nous garantissons des délais rapides, un emballage soigné et un suivi personnalisé.
        </p>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* bloc 1 */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <svg className="w-10 h-10 text-[#CBA18B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0h6m-6 0H6m6 0v8" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#1E2A38] max-[768px]:text-xl">
              Montpellier/Béziers & alentours
            </h3>
            <p className="text-[#2B2B2B]/70 text-sm max-[768px]:text-xs">
              Livraison rapide dans tout le Biterrois.
            </p>
          </div>

          {/* bloc 2 */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <svg className="w-10 h-10 text-[#CBA18B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-6h6v6m-7 4h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#1E2A38] max-[768px]:text-xl">
              Région Occitanie
            </h3>
            <p className="text-[#2B2B2B]/70 text-sm max-[768px]:text-xs">
              Montpellier, Narbonne, Sète, Agde…
            </p>
          </div>

          {/* bloc 3 */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <svg className="w-10 h-10 text-[#CBA18B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18M7 6h10m-5 12h5" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#1E2A38] max-[768px]:text-xl">
              Au-delà
            </h3>
            <p className="text-[#2B2B2B]/70 text-sm max-[768px]:text-xs">
              Livraison nationale sur devis.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}