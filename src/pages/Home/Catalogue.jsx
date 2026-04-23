import { useEffect, useRef } from "react"
import img from "/images/home/acceuil_home5.jpg"

export default function Catalogue() {
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
      className="py-24 max-[768px]:py-12 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-[1300px] mx-auto px-6 text-center">
        
        <h2 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-20 max-[768px]:text-3xl max-[768px]:mb-10">
          Explorez notre{" "}
          <span className="text-[#CBA18B]">Univers Carrelage</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="relative col-span-1 md:col-span-2 rounded-3xl overflow-hidden shadow-2xl group">
            
            <img
              src={img}
              alt="Catalogue"
              className="w-full h-[600px] object-cover brightness-[0.7] group-hover:brightness-[0.5] transition-all duration-700 max-[768px]:h-[300px]"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
              
              <h3 className="text-5xl md:text-6xl font-semibold mb-4 max-[768px]:text-3xl">
                L’art du design minéral
              </h3>

              <p className="text-lg text-gray-200 mb-8 max-w-xl max-[768px]:text-sm">
                Des collections raffinées, inspirées par la pierre, le bois et
                les textures naturelles.
              </p>

              <a className="border border-[#CBA18B] text-[#CBA18B] px-8 py-3 rounded-md font-semibold hover:bg-[#CBA18B] hover:text-black transition-all duration-300 max-[768px]:px-6 max-[768px]:py-2 max-[768px]:text-sm">
                Voir le catalogue
              </a>

            </div>
          </div>

          <div className="flex flex-col justify-center text-left p-8 bg-white rounded-3xl shadow-lg border border-[#E4DED7] max-[768px]:p-6">
            
            <h4 className="text-3xl font-bold text-[#1E2A38] mb-4 max-[768px]:text-2xl">
              Des produits d’exception
            </h4>

            <p className="text-[#2B2B2B]/80 leading-relaxed mb-6 max-[768px]:text-sm">
              Chez{" "}
              <span className="font-semibold text-[#85796D]">
                HEVIA
              </span>
              , chaque collection est soigneusement sélectionnée pour allier
              esthétique, durabilité et excellence des matériaux.
            </p>

            <ul className="space-y-3 text-[#2B2B2B]/80 max-[768px]:text-xs">
              <li>• Carrelages intérieurs & extérieurs</li>
              <li>• Effets marbre, pierre, bois et béton</li>
              <li>• Carrelages pour salles de bain et cuisines</li>
              <li>• Terrasses, piscines et espaces extérieurs</li>
              <li>• Formats variés : grands carreaux, dalles et modulables</li>
              <li>• Conseils personnalisés et assistance technique</li>
              <li>• Produits résistants, durables et faciles à entretenir</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}