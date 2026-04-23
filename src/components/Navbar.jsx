import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import logo from "/images/logo/logo-hevia.jpg"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (path) =>
    `transition ${
      location.pathname === path
        ? "text-[#CBA18B]"
        : "text-[#1E2A38] hover:text-[#CBA18B]"
    }`

  return (
    <header>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[94%] md:w-[86%] rounded-full transition-all duration-500
        px-6 py-3 flex items-center justify-between border
        ${
          scrolled
            ? "bg-[#E4DED7]/95 backdrop-blur-xl shadow-xl border-[#A79B7C]/30 scale-[0.97]"
            : "bg-[#E4DED7]/80 backdrop-blur-md border-transparent"
        }`}
      >

        <div className="flex items-center justify-start w-1/3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <span className="hidden md:block font-semibold text-[#1E2A38] tracking-wide">
              HEVIA
            </span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-12 text-[15px] font-medium w-1/3">
          <li>
            <Link to="/about" className={linkClass("/about")}>
              À propos
            </Link>
          </li>

          <li>
            <Link to="/collections" className={linkClass("/collections")}>
              Collections
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center justify-end gap-4 w-1/3">
          <Link
            to="/contact"
            className="inline-block bg-[#2B2B2B] text-white font-semibold px-6 py-2.5 rounded-2xl shadow-lg
            hover:bg-[#CBA18B] hover:text-[#2B2B2B] transition-all duration-300"
          >
            Nous contacter
          </Link>

          <div className="flex gap-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="p-2 rounded-full bg-white/60 hover:bg-[#CBA18B]/20 transition-all duration-300"
            >
              <FaInstagram className="text-[#1E2A38]" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="p-2 rounded-full bg-white/60 hover:bg-[#CBA18B]/20 transition-all duration-300"
            >
              <FaFacebookF className="text-[#1E2A38]" />
            </a>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-[#1E2A38]"></span>
          <span className="w-6 h-0.5 bg-[#1E2A38]"></span>
          <span className="w-6 h-0.5 bg-[#1E2A38]"></span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300
        ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-semibold text-[#1E2A38]"
        >
          À propos
        </Link>

        <Link
          to="/collections"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-semibold text-[#1E2A38]"
        >
          Collections
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="inline-block bg-[#2B2B2B] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg
          hover:bg-[#CBA18B] hover:text-[#2B2B2B] transition-all duration-300"
        >
          Nous contacter
        </Link>
      </div>
    </header>
  )
}