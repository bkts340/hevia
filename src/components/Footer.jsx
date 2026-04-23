import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      
      <div className="max-w-[1300px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-2xl font-bold mb-4">HEVIA</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Carrelage haut de gamme, design et durabilité. Nous accompagnons
            chaque projet avec exigence et passion.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4 text-[#CBA18B]">Navigation</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition">Accueil</Link></li>
            <li><Link to="/collections" className="hover:text-white transition">Collections</Link></li>
            <li><Link to="/about" className="hover:text-white transition">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4 text-[#CBA18B]">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Montpellier, France</li>
            <li>contact@hevia.fr</li>
            <li>+33 7 ******</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4 text-[#CBA18B]">Suivez-nous</h3>
          
          <div className="flex space-x-4">
            
           
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CBA18B] transition hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-4.25 1.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5z" />
              </svg>
            </a>

            
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#CBA18B] transition hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

          </div>
        </div>

      </div>

      
      <div className="border-t border-white/10">
        <div className="max-w-[1300px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>© {new Date().getFullYear()} HEVIA — Tous droits réservés</p>

          <div className="flex gap-6 flex-wrap justify-center">
            <Link to="/terms" className="hover:text-white transition">
              Conditions Générales
            </Link>
            <Link to="/privacy" className="hover:text-white transition">
              Confidentialité
            </Link>
            <Link to="/legal" className="hover:text-white transition">
              Mentions légales
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}