import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Prestations', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-card shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-sage-deep/30 flex items-center justify-center group-hover:bg-sage-deep/50 transition-colors">
              <span className="text-xs font-serif text-espresso">✦</span>
            </div>
            <div>
              <span className="font-serif text-xl text-espresso tracking-wide">
                Ongles & <em>Beauté</em>
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-bark font-sans font-light -mt-0.5">
                Toulouse
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm tracking-[0.12em] uppercase font-sans font-light text-bark hover:text-espresso transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage-deep group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:flex btn-glow items-center gap-2 px-5 py-2.5 rounded-full text-sm tracking-[0.1em] uppercase font-sans font-medium"
          >
            Réserver
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-espresso"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 glass-card flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link.href)}
                className="font-serif text-3xl text-espresso hover:text-sage-deep transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              onClick={() => scrollTo('#contact')}
              className="btn-glow mt-4 px-8 py-3 rounded-full text-sm tracking-[0.15em] uppercase font-sans"
            >
              Réserver en ligne
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
