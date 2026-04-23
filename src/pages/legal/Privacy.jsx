import { useEffect, useRef } from "react"

export default function Privacy() {
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
    <section className="pt-48 pb-40 max-[768px]:pt-36 max-[768px]:pb-20">
      <div
        ref={ref}
        className="max-w-[1000px] mx-auto px-6 text-center opacity-0 translate-y-10 transition-all duration-700"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-14 max-[768px]:text-3xl">
          Politique de <span className="text-[#CBA18B]">confidentialité</span>
        </h1>

        <p className="text-lg text-[#2B2B2B]/80 mb-10 leading-relaxed max-[768px]:text-sm">
          Cette politique explique comment{" "}
          <span className="font-semibold text-[#85796D]">
            HEVIA– Maison, Vie & Extérieur
          </span>{" "}
          collecte, utilise et protège vos données personnelles conformément au{" "}
          <span className="font-semibold">
            Règlement Général sur la Protection des Données (RGPD)
          </span>{" "}
          et à la législation française en vigueur.
        </p>

        <div className="text-left space-y-10">

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              1. Données collectées
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Lorsque vous nous contactez via notre site, nous pouvons recueillir :
            </p>
            <ul className="list-disc pl-6 text-[#2B2B2B]/80 mt-3 space-y-1">
              <li>Nom, prénom</li>
              <li>Adresse e-mail et numéro de téléphone</li>
              <li>Message ou informations relatives à votre demande</li>
              <li>Données techniques anonymes (cookies, IP, navigateur)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              2. Finalité du traitement
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-[#2B2B2B]/80 mt-3 space-y-1">
              <li>Répondre à vos demandes (contact / devis)</li>
              <li>Assurer le suivi client</li>
              <li>Améliorer l’expérience utilisateur</li>
              <li>Garantir la sécurité du site</li>
            </ul>
          </div>


          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              3. Durée de conservation
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Les données sont conservées uniquement le temps nécessaire.  
              Les demandes de contact sont conservées jusqu’à{" "}
              <span className="font-semibold">3 ans</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              4. Cookies et traceurs
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed mb-2">
              Le site peut utiliser des cookies techniques et analytiques.
            </p>
            <p className="text-[#85796D] text-sm">
              Aucun cookie publicitaire tiers n’est utilisé.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              5. Partage des données
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Vos données ne sont <span className="font-semibold">jamais revendues</span>.  
              Elles peuvent être transmises uniquement à des prestataires techniques.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              6. Vos droits
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed mb-3">
              Conformément au RGPD :
            </p>
            <ul className="list-disc pl-6 text-[#2B2B2B]/80 space-y-1">
              <li>Droit d’accès, rectification, suppression</li>
              <li>Droit à la portabilité</li>
              <li>Droit d’opposition</li>
            </ul>
            <p className="mt-3 text-[#85796D] text-sm">
              Contact :{" "}
              <a
                href="mailto:maison.hevia@gmail.com"
                className="text-[#CBA18B] font-semibold hover:underline"
              >
                contact@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              7. Hébergement
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Le site est hébergé sur des serveurs sécurisés en Europe via{" "}
              <span className="font-semibold">Netlify</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              8. Mise à jour
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Cette politique peut évoluer selon la législation.  
              Dernière mise à jour :{" "}
              <span className="font-semibold text-[#CBA18B]">
                Octobre 2025
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}