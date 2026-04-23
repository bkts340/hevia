import { useEffect, useRef } from "react"

export default function Terms() {
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
          Conditions Générales de <span className="text-[#CBA18B]">Vente</span>
        </h1>

        <p className="text-lg text-[#2B2B2B]/80 mb-10 leading-relaxed max-[768px]:text-sm">
          Les présentes Conditions Générales de Vente régissent les commandes effectuées auprès de{" "}
          <span className="font-semibold text-[#85796D]">
            HEVIA Béziers – Maison, Vie & Extérieur
          </span>.  
          Elles définissent les droits et obligations du vendeur et du client.
        </p>

        <div className="text-left space-y-10">

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              1. Produits
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Les produits sont décrits avec la plus grande précision possible.  
              Les photos sont non contractuelles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              2. Prix
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Les prix sont exprimés en euros TTC.  
              HEVIA peut modifier ses tarifs à tout moment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              3. Commande
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Toute commande devient ferme après validation.  
              Le client est responsable des informations fournies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              4. Paiement
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Le paiement valide définitivement la commande.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              5. Livraison & Retrait
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Les délais sont indicatifs et peuvent varier.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              6. Réclamations & Retours
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed mb-2">
              Les produits doivent être retournés en état neuf.
            </p>
            <p className="text-[#85796D] text-sm">
              Certains produits ne sont ni repris ni échangés.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              7. Garantie
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Garantie légale en vigueur.  
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
              8. Responsabilité
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              HEVIA ne peut être tenue responsable en cas de mauvaise utilisation ou retard indépendant.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1E2A38] mb-3">
              9. Droit applicable
            </h2>
            <p className="text-[#2B2B2B]/80 leading-relaxed">
              Droit français.  
              Solution amiable privilégiée avant toute action.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}