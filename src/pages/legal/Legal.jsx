import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export default function Legal() {
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
    <section className="pt-48 pb-40 max-[768px]:pt-32 max-[768px]:pb-20">
      <div
        ref={ref}
        className="max-w-[1000px] mx-auto px-6 text-center opacity-0 translate-y-10 transition-all duration-700"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-14 max-[768px]:text-3xl">
          Mentions <span className="text-[#CBA18B]">légales</span>
        </h1>

        <p className="text-lg text-[#2B2B2B]/80 mb-10 leading-relaxed max-[768px]:text-sm">
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN),  
          voici les informations légales relatives au site{" "}
          <span className="font-semibold text-[#85796D]">HEVIA</span>.
        </p>

        <div className="text-left space-y-10">

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              1. Éditeur du site
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Le site{" "}
              <span className="font-semibold text-[#85796D]">
                
              </span>{" "}
              est édité par :
              <br /><br />
              <span className="font-semibold">
                HEVIA
              </span>
              <br />
              Siège social : 2 Rue ///, 34000 Montpellier
              <br />
              Téléphone :{" "}
              <a
                href="tel:+*******"
                className="text-[#CBA18B] font-semibold hover:underline"
              >
                06 *******
              </a>
              <br />
              Email :{" "}
              <a
                href="mailto:maison.hevia@gmail.com"
                className="text-[#CBA18B] font-semibold hover:underline"
              >
                contact@gmail.com
              </a>
              <br />
              Responsable de la publication :{" "}
              <span className="font-semibold">HEVIA</span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              2. Hébergement
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Le site est hébergé par :
              <br /><br />
              <span className="font-semibold">Netlify, Inc.</span>
              <br />
              2325 3rd Street, Suite 215, San Francisco, CA 94107, USA
              <br />
              Site web :{" "}
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBA18B] font-semibold hover:underline"
              >
                www.netlify.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              3. Conception et développement
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Design, développement et intégration réalisés par{" "}
              <span className="font-semibold text-[#85796D]">
                HEVIA
              </span>{" "}
              dans le cadre du développement web interne.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              4. Propriété intellectuelle
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Tous les éléments du site (textes, visuels, logos, images, code
              source) sont la propriété exclusive de{" "}
              <span className="font-semibold text-[#85796D]">
                HEVIA 
              </span>
              . Toute reproduction, distribution ou modification sans
              autorisation écrite est strictement interdite.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              5. Données personnelles
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Les informations collectées via le site font l’objet d’un
              traitement conforme au RGPD.  
              Pour en savoir plus, consultez notre{" "}
              <Link
                to="/privacy"
                className="text-[#CBA18B] font-semibold hover:underline"
              >
                Politique de confidentialité
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              6. Liens externes
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Le site peut contenir des liens vers d’autres sites.{" "}
              <span className="font-semibold text-[#85796D]">
                HEVIA 
              </span>{" "}
              ne saurait être tenue responsable du contenu de ces sites tiers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              7. Responsabilité
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Malgré tout le soin apporté à la rédaction du contenu,{" "}
              <span className="font-semibold text-[#85796D]">
                HEVIA
              </span>{" "}
              ne peut garantir l’absence totale d’erreurs. L’utilisateur reste
              responsable de l’usage qu’il fait du site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              8. Droit applicable
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Le présent site est soumis au droit français.  
              En cas de litige, les tribunaux compétents seront ceux du ressort
              du siège social de{" "}
              <span className="font-semibold text-[#85796D]">
                HEVIA 
              </span>.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}