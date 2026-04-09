import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Droplets, Gem, Brush, Heart, Flower2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const services = [
  {
    icon: Sparkles,
    name: 'Manucure Classique',
    description: 'Soin complet des ongles et des mains : limage, cuticules et vernis de votre choix.',
    price: '35',
    duration: '45 min',
  },
  {
    icon: Droplets,
    name: 'Pédicure Soin',
    description: 'Beauté et confort de vos pieds. Soin complet, limage, hydratation intense et vernis.',
    price: '45',
    duration: '60 min',
  },
  {
    icon: Gem,
    name: 'Pose Shellac & Gel',
    description: 'Tenue parfaite 3 semaines garantie. Semi-permanent brillant et résistant aux chocs.',
    price: '55',
    duration: '75 min',
  },
  {
    icon: Brush,
    name: 'Nail Art Créatif',
    description: 'Créations personnalisées sur mesure : French, géométrie, motifs floraux, ombré.',
    price: 'dès 60',
    duration: '90 min',
  },
  {
    icon: Heart,
    name: 'Soin Kératine',
    description: 'Masque kératine profond, gommage sucré et massage des mains pour une douceur exquise.',
    price: '30',
    duration: '30 min',
  },
  {
    icon: Flower2,
    name: 'Extensions Gel',
    description: 'Ongles longs et naturels par modélisation gel. Forme et longueur selon vos désirs.',
    price: '75',
    duration: '120 min',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.service-title-anim',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.service-title-anim',
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        '.service-card-anim',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-cream-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 service-title-anim">
          <span className="text-xs tracking-[0.35em] uppercase font-sans text-sage-deep font-medium">
            Nos Soins
          </span>
          <div className="organic-divider" />
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-4">
            L'Excellence à votre <em>Service</em>
          </h2>
          <p className="font-sans text-bark font-light max-w-lg mx-auto text-base">
            Chaque prestation est un moment de soin pensé pour sublimer votre beauté avec des produits haut de gamme.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="service-card service-card-anim bg-cream rounded-2xl p-8 border border-sage-light"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-full bg-sage-light flex items-center justify-center mb-5">
                  <Icon size={18} className="text-sage-deep" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-espresso mb-2">
                  {service.name}
                </h3>
                <p className="font-sans text-bark font-light text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Meta */}
                <div className="flex items-end justify-between pt-4 border-t border-sage-light">
                  <div>
                    <span className="font-serif text-3xl text-espresso">{service.price}</span>
                    <span className="font-sans text-sm text-bark ml-0.5">€</span>
                  </div>
                  <span className="text-xs tracking-[0.15em] uppercase font-sans text-bark/60">
                    {service.duration}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-sm font-sans text-bark/60 font-light tracking-wide">
          Tous les tarifs incluent les soins et finitions. Consultation personnalisée offerte.
        </p>
      </div>
    </section>
  )
}
