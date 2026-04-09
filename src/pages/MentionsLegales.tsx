import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

export default function MentionsLegales() {
  return (
    <>
      <main className="min-h-screen bg-cream pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-bark hover:text-espresso transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans text-sm tracking-[0.1em] uppercase font-medium">Retour</span>
          </Link>

          <span className="text-xs tracking-[0.3em] uppercase font-sans text-sage-deep">Informations légales</span>
          <h1 className="font-serif text-5xl text-espresso mt-2 mb-8">Mentions Légales</h1>
          <div className="w-12 h-0.5 bg-sage-deep mb-10" />

          <div className="space-y-8 font-sans text-bark font-light leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">1. Éditeur du site</h2>
              <p>
                <strong className="font-medium text-espresso">Ongles & Beauté</strong><br />
                Institut de beauté — entreprise individuelle<br />
                14 Place Saint-Georges, 31000 Toulouse<br />
                Téléphone : +33 5 61 XX XX XX<br />
                Email : contact@ongles-beaute-toulouse.fr<br />
                SIRET : XXX XXX XXX XXXXX
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">2. Hébergement</h2>
              <p>
                Ce site est hébergé par Cloudflare Pages<br />
                Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes) est protégé par le droit d'auteur.
                Toute reproduction, même partielle, est strictement interdite sans autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">4. Protection des données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit
                d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit,
                contactez-nous à l'adresse email ci-dessus.
              </p>
              <p className="mt-3">
                Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos
                demandes de réservation et ne sont pas transmises à des tiers.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">5. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de traçage ou publicitaires. Les seuls cookies éventuels sont
                strictement nécessaires au fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">6. Responsabilité</h2>
              <p>
                L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès
                ou de l'utilisation de ce site, y compris l'inaccessibilité, les pertes de données ou détériorations.
              </p>
            </section>

            <p className="text-xs text-bark/50 mt-8">Dernière mise à jour : janvier 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
