import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const testimonials = [
  {
    quote:
      "Une expérience absolument divine. Mon manucure shellac a tenu trois semaines sans éclat. L'accueil est chaleureux et l'atmosphère si apaisante. Je ne vais plus nulle part ailleurs.",
    author: 'Sophie M.',
    city: 'Toulouse',
    service: 'Shellac Bordeaux',
    rating: 5,
  },
  {
    quote:
      "Le nail art réalisé est exactement ce que je souhaitais — floraux délicats sur fond nude. Un vrai talent artistique, une précision remarquable. Mes ongles ont suscité des compliments toute la semaine.",
    author: 'Camille R.',
    city: 'Albi',
    service: 'Nail Art Créatif',
    rating: 5,
  },
  {
    quote:
      "Ma pédicure soin était parfaite — gommage, massage, vernis OPI. Mes pieds n'ont jamais été aussi doux. Le cadre est élégant et la praticienne vraiment à l'écoute. Je recommande vivement.",
    author: 'Julie L.',
    city: 'Toulouse',
    service: 'Pédicure Soin',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.testi-title-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.testi-title-anim', start: 'top 85%' },
        }
      )
      gsap.fromTo(
        '.testi-card-anim',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.testi-grid', start: 'top 80%' },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section-padding bg-cream overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-12 select-none pointer-events-none">
        <span className="font-serif text-[12vw] text-sage-light/40 font-light whitespace-nowrap leading-none">
          Témoignages
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 testi-title-anim">
          <span className="text-xs tracking-[0.35em] uppercase font-sans text-sage-deep font-medium">
            Avis Clients
          </span>
          <div className="organic-divider" />
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-3">
            Ce qu'elles <em>disent</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="testi-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testi-card-anim bg-cream-dark rounded-2xl p-8 border border-sage-light relative"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-sage-deep/30 leading-none absolute top-4 left-6 select-none">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={12} className="fill-sand text-sand" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base text-espresso leading-relaxed mb-6 italic font-light">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-sage-light">
                <div>
                  <div className="font-sans font-medium text-sm text-espresso">
                    {t.author}
                  </div>
                  <div className="font-sans text-xs text-bark/60 font-light tracking-wide mt-0.5">
                    {t.city}
                  </div>
                </div>
                <span className="text-xs tracking-[0.12em] uppercase font-sans text-sage-deep bg-sage-light px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating */}
        <div className="text-center mt-10 flex items-center justify-center gap-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-sand text-sand" />
            ))}
          </div>
          <span className="font-serif text-xl text-espresso">5.0</span>
          <span className="font-sans text-sm text-bark/60 font-light">
            · 48 avis Google
          </span>
        </div>
      </div>
    </section>
  )
}
