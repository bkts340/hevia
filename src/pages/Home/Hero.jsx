import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

import img1 from "/images/hero/acceuil_hero1.jpg"
import img2 from "/images/hero/acceuil_hero2.jpg"
import img3 from "/images/hero/acceuil_hero3.png"
import img4 from "/images/hero/acceuil_hero4.png"

const slides = [img1, img2, img3, img4]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      <div className="relative z-10 max-w-4xl w-full px-6 text-center">

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[4px] text-white/80 text-sm mb-4 max-[768px]:text-xs"
        >
          Explorez l’univers HEVIA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight max-[768px]:text-4xl"
        >
          Transformez vos espaces avec élégance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg text-gray-100 mb-10 leading-relaxed drop-shadow-md max-[768px]:text-sm"
        >
          Découvrez notre sélection de{" "}
          <span className="font-semibold text-white">
            carrelages, faïences et mosaïques haut de gamme
          </span>{" "}
          pour sublimer chaque pièce.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >

          <Link
            to="/collections"
            className="bg-[#2B2B2B] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg
            hover:bg-[#CBA18B] hover:text-[#2B22B] transition-all duration-300
            max-[768px]:px-6 max-[768px]:py-2 max-[768px]:text-sm"
          >
            Parcourir le catalogue
          </Link>

          <Link
            to="/contact"
            className="border border-white/40 text-white px-8 py-3 rounded-2xl font-semibold
            hover:bg-white/20 transition-all duration-300
            max-[768px]:px-6 max-[768px]:py-2 max-[768px]:text-sm"
          >
            Prendre contact
          </Link>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex gap-4 mt-6 justify-center"
        >

          <a
            href="https://www.instagram.com"
            target="_blank"
            className="p-3 rounded-full bg-white/10 hover:bg-[#CBA18B] transition"
          >
            <FaInstagram className="text-white" />
          </a>

          <a
            href=""
            target="_blank"
            className="p-3 rounded-full bg-white/10 hover:bg-[#CBA18B] transition"
          >
            <FaFacebookF className="text-white" />
          </a>

        </motion.div>

      </div>
    </section>
  )
}