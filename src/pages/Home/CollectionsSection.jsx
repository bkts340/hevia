import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import img1 from "/images/home/acceuil_home_1.jpg"
import img2 from "/images/home/acceuil_home_2.png"
import img3 from "/images/home/acceuil_home3.jpg"
import img4 from "/images/home/acceuil_home_4.jpg"

const collections = [
  {
    title: "Tous nos carrelages",
    desc: "L’élégance naturelle sous vos pas.",
    img: img1,
    link: "/",
  },
  {
    title: "Carrelage salle de bain",
    desc: "Structurez vos murs avec raffinement.",
    img: img2,
    link: "/",
  },
  {
    title: "Carrelage extérieur",
    desc: "Confort et solidité en plein air.",
    img: img3,
    link: "/",
  },
  {
    title: "Carrelage Piscine",
    desc: "L’art du détail pour vos espaces raffinés.",
    img: img4,
    link: "/",
  },
]

export default function CollectionsSection() {
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
    <section className="py-32 max-[768px]:py-16">
      
      <div className="max-w-[1500px] mx-auto px-6">
        
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-[#1E2A38] max-[768px]:text-3xl max-[768px]:mb-10">
          Nos Collections
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 opacity-0 translate-y-10 transition-all duration-700 max-[768px]:gap-6"
        >
          
          {collections.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-700 block"
            >
              
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-700 max-[768px]:h-[260px]"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col items-center justify-center text-center text-white px-6">
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}