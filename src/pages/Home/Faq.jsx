import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "Quels types de carrelage propose HEVIA ?",
    answer:
      "Chez HEVIA, nous proposons des produits de qualité sélectionnés pour leur durabilité, leur design et leur finition. Notre objectif est de rendre le carrelage haut de gamme accessible sans compromis.",
  },
  {
    question: "Proposez-vous un service de pose ?",
    answer:
      "Nous ne réalisons pas directement la pose, mais nous vous mettons en relation avec des artisans partenaires qualifiés et vous accompagnons à chaque étape.",
  },
  {
    question: "Comment se déroule un devis personnalisé ?",
    answer:
      "Vous pouvez demander un devis gratuitement. Nous analysons vos besoins et vous envoyons une estimation claire sous 48h.",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous intervenons principalement autour de Montpellier, Nîmes, Béziers et leurs alentours.",
  },
  {
    question: "Proposez-vous d'autres produits que le carrelage ?",
    answer:
      "Oui, nous proposons aussi faïences, accessoires, colles, joints et solutions d’entretien.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-32 max-[768px]:py-16">
      <div className="max-w-[900px] mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-bold text-center text-[#1E2A38] mb-20 max-[768px]:text-3xl">
          Questions fréquentes
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = open === index

            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300
                ${isOpen
                  ? "bg-white shadow-2xl border-[#CBA18B]/40"
                  : "bg-white/60 hover:bg-white hover:shadow-lg border-[#A79B7C]/20"
                }`}
              >

                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left px-6 py-6 max-[768px]:px-4 max-[768px]:py-4"
                >

                  <span className="text-lg md:text-xl font-semibold text-[#1E2A38] max-[768px]:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`ml-6 flex items-center justify-center w-10 h-10 rounded-full border
                    transition-all duration-300
                    ${isOpen
                      ? "bg-[#CBA18B] text-white border-[#CBA18B] rotate-45"
                      : "text-[#CBA18B] border-[#CBA18B]"
                    }`}
                  >
                    +
                  </span>

                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-6 pb-6 text-[#2B2B2B]/80 leading-relaxed text-base max-[768px]:text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}