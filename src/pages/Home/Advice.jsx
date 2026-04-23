import { useEffect, useRef } from "react"
import img from "/images/home/acceuil_home_2.png"

export default function Advice() {
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const elements = [imgRef.current, textRef.current]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10")
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-40 max-[768px]:py-28">
      
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        <div
          ref={imgRef}
          className="flex-1 overflow-hidden rounded-3xl shadow-2xl opacity-0 translate-y-10 transition-all duration-1000"
        >
          <img
            src={img}
            alt="Choisir son carrelage"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          ref={textRef}
          className="flex-1 opacity-0 translate-y-10 transition-all duration-1000"
        >
          
          <h3 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-6 max-[768px]:text-3xl">
            Trouvez le carrelage parfait pour votre espace
          </h3>

          <p className="text-[#85796D] text-lg mb-6 max-[768px]:text-sm">
            Découvrez nos conseils, inspirations et astuces pour sélectionner
            le carrelage qui correspond à votre style et à vos besoins. Que ce
            soit pour une salle de bain, une cuisine ou un extérieur, nous vous
            aidons à faire le meilleur choix.
          </p>

          <a className="inline-block bg-[#2B2B2B] text-white font-semibold text-base px-8 py-3 rounded-2xl shadow-lg hover:bg-[#CBA18B] hover:text-[#2B2B2B] transition-all duration-300 max-[768px]:px-6 max-[768px]:py-2 max-[768px]:text-sm">
            Prenez Contact
          </a>

        </div>

      </div>
    </section>
  )
}