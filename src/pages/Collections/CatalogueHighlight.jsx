import { useEffect, useRef } from "react"

export default function CatalogueHighlight() {
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
            }, index * 150)
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hevia-catalogue-unique" className=" py-36 max-[768px]:py-20">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 space-y-36">

        
        <div
          data-animate
          className="flex flex-col md:flex-row items-center gap-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="md:w-1/2 relative group">
            <img
              src="/images/home/acceuil_home_2.png"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent"></div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-[#1E2A38] mb-4 max-[768px]:text-3xl">
              Notre Sélection Premium
            </h3>
            <p className="text-[#2B2B2B] mb-6 max-[768px]:text-sm">
              Découvrez nos carreaux haut de gamme pour tous vos projets.
              Alliant qualité, durabilité et design, ils s’adaptent parfaitement
              à chaque intérieur et extérieur.
            </p>
            <span className="text-[#CBA18B] font-bold text-lg">
              À partir de 38€/m²
            </span>
          </div>
        </div>

        
        <div
          data-animate
          className="flex flex-col md:flex-row-reverse items-center gap-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="md:w-1/2 relative group">
            <img
              src="/images/home/catalogue_home2.jpg"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent"></div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-[#1E2A38] mb-4 max-[768px]:text-3xl">
              Variété et Style
            </h3>
            <p className="text-[#2B2B2B] mb-6 max-[768px]:text-sm">
              Explorez notre gamme : bois, marbre, pierre et béton.
              Chaque modèle est sélectionné pour sa qualité et son esthétisme unique.
            </p>
            <span className="text-[#CBA18B] font-bold text-lg">
              À partir de 32€/m²
            </span>
          </div>
        </div>

        
        <div
          data-animate
          className="flex flex-col md:flex-row items-center gap-12 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="md:w-1/2 relative group">
            <img
              src="/images/home/catalogue_home1.jpg"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/25 via-transparent"></div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold text-[#1E2A38] mb-4 max-[768px]:text-3xl">
              Inspirez vos Projets
            </h3>
            <p className="text-[#2B2B2B] mb-6 max-[768px]:text-sm">
              Parcourez nos inspirations et trouvez le carrelage parfait.
              Du classique au contemporain, nous avons ce qu’il vous faut.
            </p>
            <span className="text-[#CBA18B] font-bold text-lg">
              À partir de 40€/m²
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}