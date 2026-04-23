import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Collections from "./pages/Collections"
import Contact from "./pages/Contact"

import Legal from "./pages/legal/Legal"
import Terms from "./pages/legal/Terms"
import Privacy from "./pages/legal/Privacy"

export default function App() {
  return (
<BrowserRouter>

<ScrollToTop />

<div className="gradient-hevia min-h-screen">

  <Navbar />

  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </main>

  <Footer />

</div>

</BrowserRouter>
  )
}