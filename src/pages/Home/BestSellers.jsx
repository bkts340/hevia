import { useState } from "react"

import img1 from "/images/carrelage/carrelage_1.jpg"
import img2 from "/images/carrelage/carrelage_2.jpg"
import img3 from "/images/carrelage/carrelage_3.jpg"
import img4 from "/images/carrelage/carrelage_4.jpg"
import img5 from "/images/carrelage/carrelage_5.jpg"
import img6 from "/images/carrelage/carrelage_6.jpg"
import img7 from "/images/carrelage/carrelage_7.jpg"
import img8 from "/images/carrelage/carrelage_8.jpg"
import img9 from "/images/carrelage/carrelage_9.jpg"
import img10 from "/images/carrelage/carrelage_10.jpg"
import img11 from "/images/carrelage/carrelage_11.jpg"

const categories = [
  { id: "salle-bain", label: "Salle de bain" },
  { id: "exterieur", label: "Extérieur" },
  { id: "piscine", label: "Piscine" },
  { id: "pierre", label: "Pierre" },
  { id: "bois", label: "Bois" },
  { id: "beton", label: "Béton" },
  { id: "marbre", label: "Marbre" },
]

const products = [
  { name: "SDB Classic", price: "25€/m²", category: "salle-bain", img: img1 },
  { name: "SDB Épure", price: "28€/m²", category: "salle-bain", img: img2 },
  { name: "SDB Modern", price: "30€/m²", category: "salle-bain", img: img3 },

  { name: "EXT Nature", price: "22€/m²", category: "exterieur", img: img4 },
  { name: "EXT Zen", price: "24€/m²", category: "exterieur", img: img5 },

  { name: "Piscine Bleu", price: "35€/m²", category: "piscine", img: img6 },
  { name: "Piscine Blanc", price: "38€/m²", category: "piscine", img: img7 },

  { name: "Pierre Rustique", price: "32€/m²", category: "pierre", img: img8 },
  { name: "Bois Chêne", price: "29€/m²", category: "bois", img: img9 },
  { name: "Béton Gris", price: "27€/m²", category: "beton", img: img10 },
  { name: "Marbre Blanc", price: "45€/m²", category: "marbre", img: img11 },
]

export default function BestSellers() {
  const [active, setActive] = useState("salle-bain")

  const filtered = products.filter(p => p.category === active)

  return (
    <section className="py-28 max-[768px]:py-14">

      <div className="max-w-[1400px] mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-6 text-center md:text-left">
          Nos best-sellers
        </h2>

        <p className="text-[#2B2B2B]/80 text-lg mb-16 text-center md:text-left">
          Des collections sélectionnées pour sublimer chaque espace.
        </p>

        <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-300
              ${
                active === cat.id
                  ? "bg-[#2B2B2B] text-white shadow-lg"
                  : "bg-white text-[#1E2A38] hover:bg-[#CBA18B] hover:text-[#1E2A38]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filtered.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg
              transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-56 object-cover
                  transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5 space-y-2">
                <p className="font-semibold text-[#2B2B2B]">
                  {item.name}
                </p>
                <p className="text-[#85796D] font-medium">
                  {item.price}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}