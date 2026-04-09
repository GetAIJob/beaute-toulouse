import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const hours = [
  { day: 'Mardi — Vendredi', time: '10h00 – 19h00' },
  { day: 'Samedi', time: '09h00 – 18h00' },
  { day: 'Dimanche & Lundi', time: 'Fermé' },
]

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  useGSAP(
    () => {
      gsap.fromTo(
        '.contact-anim',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      )
    },
    { scope: sectionRef }
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `Nouvelle demande de réservation — ${form.service}`,
          from_name: form.name,
          ...form,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-espresso overflow-hidden relative">
      {/* Decorative blob */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D1D5BE 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #C4B59A 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 contact-anim">
          <span className="text-xs tracking-[0.35em] uppercase font-sans text-sage font-medium">
            Contact & Réservation
          </span>
          <div
            className="w-12 h-px mx-auto my-5"
            style={{ background: 'linear-gradient(90deg, transparent, #D1D5BE, transparent)' }}
          />
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-3">
            Réservez votre <em>Moment</em>
          </h2>
          <p className="font-sans text-cream/60 font-light text-sm max-w-sm mx-auto">
            Prenez rendez-vous en ligne ou contactez-nous directement. Réponse sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="contact-anim space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-cream mb-6 italic">
                Venez nous rendre visite
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={15} className="text-sage" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-sans text-cream font-light text-sm">14 Place Saint-Georges</div>
                    <div className="font-sans text-cream/50 font-light text-xs mt-0.5">31000 Toulouse</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-sage" strokeWidth={1.5} />
                  </div>
                  <a
                    href="tel:+33561XXXXXX"
                    className="font-sans text-cream font-light text-sm hover:text-sage transition-colors"
                  >
                    +33 5 61 XX XX XX
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-sage" strokeWidth={1.5} />
                  </div>
                  <a
                    href="mailto:contact@ongles-beaute-toulouse.fr"
                    className="font-sans text-cream font-light text-sm hover:text-sage transition-colors"
                  >
                    contact@ongles-beaute-toulouse.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={14} className="text-sage" strokeWidth={1.5} />
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-sage/80 font-medium">
                  Horaires d'ouverture
                </h4>
              </div>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-white/8"
                  >
                    <span className="font-sans text-cream/70 font-light text-sm">{h.day}</span>
                    <span className="font-serif text-cream text-sm italic">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-cream/60 hover:text-cream transition-colors group"
              >
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-sage transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="font-sans text-sm font-light tracking-wide">
                  @ongles.beaute.toulouse
                </span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-anim">
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase font-sans text-cream/50 mb-1.5 font-medium">
                    Prénom & Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-cream text-sm font-sans font-light placeholder-white/30 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Marie Dupont"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase font-sans text-cream/50 mb-1.5 font-medium">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-cream text-sm font-sans font-light placeholder-white/30 focus:outline-none focus:border-sage transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-sans text-cream/50 mb-1.5 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-cream text-sm font-sans font-light placeholder-white/30 focus:outline-none focus:border-sage transition-colors"
                  placeholder="marie@exemple.fr"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-sans text-cream/50 mb-1.5 font-medium">
                  Prestation souhaitée
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-cream text-sm font-sans font-light focus:outline-none focus:border-sage transition-colors"
                >
                  <option value="" className="bg-espresso">Choisir une prestation…</option>
                  <option value="Manucure Classique" className="bg-espresso">Manucure Classique — 35€</option>
                  <option value="Pédicure Soin" className="bg-espresso">Pédicure Soin — 45€</option>
                  <option value="Shellac & Gel" className="bg-espresso">Shellac & Gel — 55€</option>
                  <option value="Nail Art Créatif" className="bg-espresso">Nail Art Créatif — dès 60€</option>
                  <option value="Soin Kératine" className="bg-espresso">Soin Kératine — 30€</option>
                  <option value="Extensions Gel" className="bg-espresso">Extensions Gel — 75€</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-sans text-cream/50 mb-1.5 font-medium">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-cream text-sm font-sans font-light placeholder-white/30 focus:outline-none focus:border-sage transition-colors resize-none"
                  placeholder="Vos préférences, disponibilités…"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-sage hover:bg-sage-deep text-espresso font-sans font-medium text-sm tracking-[0.1em] uppercase py-4 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span>Envoi en cours…</span>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <Send size={14} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-center font-sans text-sage text-sm font-light">
                  ✓ Votre demande a été envoyée. Nous vous répondrons sous 24h.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center font-sans text-red-400 text-sm font-light">
                  Une erreur est survenue. Veuillez nous appeler directement.
                </p>
              )}

              <p className="text-center text-xs font-sans text-white/30 font-light">
                En soumettant ce formulaire, vous acceptez notre{' '}
                <a href="/mentions-legales" className="underline hover:text-white/60 transition-colors">
                  politique de confidentialité
                </a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
