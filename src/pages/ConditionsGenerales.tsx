import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

export default function ConditionsGenerales() {
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

          <span className="text-xs tracking-[0.3em] uppercase font-sans text-sage-deep">Règles d'utilisation</span>
          <h1 className="font-serif text-5xl text-espresso mt-2 mb-8">Conditions Générales de Vente</h1>
          <div className="w-12 h-0.5 bg-sage-deep mb-10" />

          <div className="space-y-8 font-sans text-bark font-light leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">1. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations commerciales
                entre <strong className="font-medium text-espresso">Ongles & Beauté</strong> (ci-après « le Prestataire ») et ses clientes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">2. Prestations de services</h2>
              <p>
                Le Prestataire propose des services de manucure, pédicure, pose de gel, shellac, nail art et extensions
                d'ongles. Les tarifs affichés sont en euros TTC et susceptibles d'être modifiés sans préavis.
              </p>
              <p className="mt-3">
                Toute prestation réalisée est présumée acceptée par la cliente. La réservation d'un rendez-vous
                vaut acceptation des présentes CGV.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">3. Paiement</h2>
              <p>
                Le paiement s'effectue à l'issue de chaque prestation, en espèces ou par carte bancaire.
                Les chèques ne sont pas acceptés.
              </p>
              <p className="mt-3">
                Un acompte de 30% peut être demandé pour les prestations de plus de 90 minutes ou les réservations
                de groupe.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">4. Hygiène et sécurité</h2>
              <p>
                Le Prestataire s'engage à respecter les normes d'hygiène en vigueur. Le matériel est désinfecté
                et/ou stérilisé entre chaque cliente.
              </p>
              <p className="mt-3">
                La cliente est invitée à informer le Prestataire de tout allergie, état de santé particulier ou
                traitement médical pouvant influencer la réalisation des soins. Le Prestataire se réserve le droit
                de refuser une prestation si l'état de santé de la cliente le justifie.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">5. Retard</h2>
              <p>
                En cas de retard supérieur à 15 minutes, le Prestataire se réserve le droit d'adapter la prestation
                au temps restant disponible ou de reporter le rendez-vous, sans modification du tarif initialement prévu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">6. Responsabilité</h2>
              <p>
                Le Prestataire ne saurait être tenu responsable des réactions allergiques non signalées préalablement
                par la cliente. En cas de réaction connue, la cliente en informera obligatoirement le Prestataire
                avant toute prestation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-espresso mb-3">7. Litiges</h2>
              <p>
                En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux
                compétents seront ceux du ressort du siège social du Prestataire (Toulouse).
              </p>
              <p className="mt-3">
                Conformément aux dispositions du Code de la Consommation, vous pouvez recourir à la médiation
                de la consommation en contactant le Centre de Médiation et d'Arbitrage de Paris (CMAP) :
                mediation-conso@cmap.fr
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
