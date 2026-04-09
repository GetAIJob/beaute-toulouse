import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-espresso border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center">
                <span className="text-[8px] text-sage">✦</span>
              </div>
              <span className="font-serif text-lg text-cream">
                Ongles & <em>Beauté</em>
              </span>
            </div>
            <p className="font-sans text-xs font-light text-cream/40 leading-relaxed max-w-xs">
              Institut de beauté spécialisé en manucure, pédicure et nail art d'exception au cœur de Toulouse.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-sans text-sage/70 font-medium mb-4">
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Nos Prestations', href: '#services' },
                { label: 'Galerie', href: '#galerie' },
                { label: 'Réservation', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.href === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else {
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="block font-sans text-sm font-light text-cream/50 hover:text-cream transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-sans text-sage/70 font-medium mb-4">
              Contact
            </h4>
            <div className="space-y-2 font-sans font-light text-sm text-cream/50">
              <p>14 Place Saint-Georges</p>
              <p>31000 Toulouse, France</p>
              <a href="tel:+33561XXXXXX" className="hover:text-cream transition-colors block">
                +33 5 61 XX XX XX
              </a>
              <a
                href="mailto:contact@ongles-beaute-toulouse.fr"
                className="hover:text-cream transition-colors block"
              >
                contact@ongles-beaute-toulouse.fr
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs font-light text-cream/30">
            © {year} Ongles & Beauté Toulouse. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/mentions-legales"
              className="font-sans text-xs font-light text-cream/30 hover:text-cream/60 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              to="/politique-de-remboursement"
              className="font-sans text-xs font-light text-cream/30 hover:text-cream/60 transition-colors"
            >
              Politique de remboursement
            </Link>
            <Link
              to="/conditions-generales"
              className="font-sans text-xs font-light text-cream/30 hover:text-cream/60 transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
