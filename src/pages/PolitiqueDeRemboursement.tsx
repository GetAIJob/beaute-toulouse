import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

export default function PolitiqueDeRemboursement() {
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

          <span className="text-xs tracking-[0.3em] uppercase font-sans text-sage-deep">Politique</span>
          <h1 className="font-serif text-5xl text-espresso mt-2 mb-8">Politique de Remboursement</h1>
          <div className="w-12 h-0.5 bg-sage-deep mb-10" />

          <div className="space-y-8 font-sans text-bark font-light leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">1. Réservations et annulations</h2>
              <p>
                Les réservations peuvent être annulées ou modifiées sans frais jusqu'à <strong className="font-medium text-espresso">24 heures avant</strong> le rendez-vous prévu.
              </p>
              <p className="mt-3">
                Pour toute annulation effectuée moins de 24 heures avant le rendez-vous, un frais d'annulation
                correspondant à <strong className="font-medium text-espresso">50% du tarif de la prestation</strong> pourra être retenu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">2. Absence sans préavis</h2>
              <p>
                En cas d'absence non justifiée (no-show), la totalité du montant de la prestation réservée sera due.
                En cas de récidive, nous nous réservons le droit de demander un acompte pour toute future réservation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">3. Insatisfaction et réclamations</h2>
              <p>
                Votre satisfaction est notre priorité. Si vous n'êtes pas satisfaite du résultat, contactez-nous
                dans les <strong className="font-medium text-espresso">48 heures suivant la prestation</strong> par
                téléphone ou email.
              </p>
              <p className="mt-3">
                Nous nous engageons à examiner votre réclamation et, le cas échéant, à proposer une correction
                gratuite ou un avoir applicable sur une prochaine prestation.
              </p>
              <p className="mt-3">
                Les remboursements en espèces ne sont pas pratiqués pour les prestations réalisées. Seuls des avoirs
                ou corrections sont proposés.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">4. Produits vendus en salon</h2>
              <p>
                Les produits vendus en salon (vernis, soins) peuvent être échangés dans les <strong className="font-medium text-espresso">7 jours</strong> suivant l'achat,
                dans leur emballage d'origine et non utilisés, contre un avoir.
                Aucun remboursement en espèces n'est effectué sur les produits.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">5. Contact</h2>
              <p>
                Pour toute question relative à cette politique, contactez-nous :<br />
                📞 +33 5 61 XX XX XX<br />
                ✉️ contact@ongles-beaute-toulouse.fr
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
