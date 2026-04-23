import { useEffect, useRef } from "react"
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
  const ref = useRef(null)

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".fade")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10")
              entry.target.classList.add("opacity-100", "translate-y-0")
            }, i * 120)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-44 pb-32 max-[768px]:pt-32 max-[768px]:pb-16">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="fade opacity-0 translate-y-10 transition-all duration-700">

            <h2 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-8 max-[768px]:text-3xl">
              Contactez <span className="text-[#CBA18B]">HEVIA</span>
            </h2>

            <p className="text-[#2B2B2B]/80 text-lg mb-10 max-[768px]:text-sm">
              Une question, un projet ou un devis ? Notre équipe vous répond rapidement et vous accompagne à chaque étape.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md group-hover:bg-[#CBA18B] transition">
                  <FaPhoneAlt className="text-[#1E2A38] group-hover:text-white" />
                </div>
                <a
                  href="tel:"
                  className="text-[#1E2A38] font-medium hover:text-[#CBA18B] transition"
                >
                  07 ******
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md group-hover:bg-[#CBA18B] transition">
                  <FaEnvelope className="text-[#1E2A38] group-hover:text-white" />
                </div>
                <a
                  href="mailto:contact@hevia.fr"
                  className="text-[#1E2A38] font-medium hover:text-[#CBA18B] transition"
                >
                  contact@hevia.fr
                </a>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md group-hover:bg-[#CBA18B] transition">
                  <FaMapMarkerAlt className="text-[#1E2A38] group-hover:text-white" />
                </div>
                <p className="text-[#85796D] leading-relaxed">
                  HEVIA<br />
                  2 Rue ///<br />
                  34000 ****
                </p>
              </div>

            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md hover:bg-[#CBA18B] transition"
              >
                <FaInstagram className="text-[#1E2A38] hover:text-white" />
              </a>

              <a
                href=""
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md hover:bg-[#CBA18B] transition"
              >
                <FaFacebookF className="text-[#1E2A38] hover:text-white" />
              </a>
            </div>

          </div>

          <div className="fade opacity-0 translate-y-10 transition-all duration-700">

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#A79B7C]/20 h-[420px]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92442.5267766341!2d3.791596750833308!3d43.61010273155888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0xad8756742894e802!2sMontpellier!5e0!3m2!1sfr!2sfr!4v1776973329149!5m2!1sfr!2sfr"
                className="w-full h-full border-0"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent pointer-events-none"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}