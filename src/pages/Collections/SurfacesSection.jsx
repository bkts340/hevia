import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const items = [
  {
    id: "pierre",
    title: "Carrelage Imitation Pierre",
    desc: "L’imitation pierre apporte un charme naturel et intemporel à vos espaces.",
    img: "/images/home/acceuil_home_1.jpg",
    reverse: false,
  },
  {
    id: "beton",
    title: "Carrelage Imitation Béton",
    desc: "Le béton s’impose comme la référence des intérieurs modernes et minimalistes.",
    img: "/images/home/catalogue_home2.jpg",
    reverse: true,
  },
  {
    id: "bois",
    title: "Carrelage Imitation Bois",
    desc: "Le charme du bois sans ses contraintes, avec une résistance optimale.",
    img: "/images/home/catalogue_home2.jpg",
    reverse: false,
  },
  {
    id: "marbre",
    title: "Carrelage Imitation Marbre",
    desc: "Élégance absolue avec des finitions luxueuses et intemporelles.",
    img: "/images/home/catalogue_home1.jpg",
    reverse: true,
  },
  {
    id: "salle-de-bain",
    title: "Carrelage Salle de Bain",
    desc: "Pensé pour résister à l’humidité tout en restant esthétique.",
    img: "/images/home/acceuil_home_2.png",
    reverse: false,
  },
  {
    id: "exterieur",
    title: "Carrelage Extérieur",
    desc: "Robustesse et sécurité pour vos espaces extérieurs.",
    img: "/images/home/acceuil_home3.jpg",
    reverse: true,
  },
  {
    id: "piscine",
    title: "Carrelage Piscine",
    desc: "Antidérapant et résistant, idéal pour les environnements aquatiques.",
    img: "/images/home/acceuil_home_4.jpg",
    reverse: false,
  },
]

export default function SurfacesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const elements = ref.current.querySelectorAll("[data-animate]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10")
              entry.target.classList.add("opacity-100", "translate-y-0")
            }, index * 120)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-36 max-[768px]:py-20">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 space-y-32">

        {items.map((item, i) => (
          <div
            key={i}
            data-animate
            className={`flex flex-col ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12 opacity-0 translate-y-10 transition-all duration-700`}
          >

            <div className="md:w-1/2 relative group overflow-hidden rounded-3xl">
              
              <img
                src={item.img}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>

            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-4xl font-bold text-[#1E2A38] mb-4 max-[768px]:text-3xl">
                {item.title}
              </h3>

              <p className="text-[#2B2B2B] leading-relaxed mb-6 max-[768px]:text-sm">
                {item.desc}
              </p>

              <Link
                to="/collections"
                className="inline-block bg-[#2B2B2B] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg
                hover:bg-[#CBA18B] hover:text-[#2B2B2B] transition-all duration-300
                max-[768px]:px-6 max-[768px]:py-2 max-[768px]:text-sm"
              >
                Voir la collection
              </Link>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}