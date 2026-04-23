import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import image from "/images/logo/logo_hevia.png"

export default function AboutSection() {
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
      className="py-36 max-[768px]:py-20 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#CBA18B]/40 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition"></div>

          <img
            src={image}
            alt="HEVIA"
            className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover
            transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-6 max-[768px]:text-3xl">
            Une vision moderne du{" "}
            <span className="text-[#CBA18B]">carrelage haut de gamme</span>
          </h2>

          <p className="text-lg text-[#2B2B2B]/80 leading-relaxed mb-6 max-[768px]:text-sm">
            Basée à <span className="font-semibold text-[#85796D]">///</span>, HEVIA
            réinvente l’univers du carrelage en alliant{" "}
            <span className="font-semibold">design, qualité et innovation</span>.
          </p>

          <p className="text-lg text-[#2B2B2B]/80 leading-relaxed mb-6 max-[768px]:text-sm">
            Chaque collection est pensée pour répondre aux exigences actuelles :
            esthétique forte, durabilité et facilité d’entretien.
          </p>

          <p className="text-lg text-[#2B2B2B]/80 leading-relaxed mb-10 max-[768px]:text-sm">
            Notre mission : transformer vos espaces en lieux uniques,
            élégants et intemporels.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            <Link
              to="/collections"
              className="inline-block bg-[#2B2B2B] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg
              hover:bg-[#CBA18B] hover:text-[#2B2B2B] transition-all duration-300
              max-[768px]:px-6 max-[768px]:py-2 max-[768px]:text-sm"
            >
              Découvrir le catalogue
            </Link>

            <Link
              to="/about"
              className="inline-block border border-[#2B2B2B]/30 text-[#2B2B2B] px-8 py-3 rounded-2xl font-semibold
              hover:bg-[#2B2B2B] hover:text-white transition-all duration-300
              max-[768px]:px-6 max-[768px]:py-2 max-[768px]:text-sm"
            >
              En savoir plus
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  )
}