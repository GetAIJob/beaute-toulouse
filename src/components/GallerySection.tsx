import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const galleryItems = [
  {
    src: '/images/gallery-1.jpg',
    label: 'French Élégante',
    description: 'French classique raffinée',
    alt: 'Manucure french élégante - Ongles & Beauté Toulouse',
  },
  {
    src: '/images/gallery-2.jpg',
    label: 'Bordeaux Doré',
    description: 'Shellac bordeaux & détails or',
    alt: 'Shellac bordeaux doré - Ongles & Beauté Toulouse',
  },
  {
    src: '/images/gallery-3.jpg',
    label: 'Nude Rosé',
    description: 'Nude naturel & brillant',
    alt: 'Nail art nude rosé - Ongles & Beauté Toulouse',
  },
  {
    src: '/images/gallery-4.jpg',
    label: 'Nail Art Délicat',
    description: 'Motifs floraux sur gel',
    alt: 'Nail art délicat motifs floraux - Ongles & Beauté Toulouse',
  },
  {
    src: '/images/gallery-5.jpg',
    label: 'Corail Été',
    description: 'Corail vibrant shellac',
    alt: 'Ongles corail été shellac - Ongles & Beauté Toulouse',
  },
  {
    src: '/images/gallery-6.jpg',
    label: 'Pose Gel Premium',
    description: 'Extensions gel naturelles',
    alt: 'Pose gel premium extensions - Ongles & Beauté Toulouse',
  },
]

function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  return (
    <motion.div
      className="gallery-item group relative overflow-hidden rounded-3xl cursor-pointer w-full h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        width={800}
        height={900}
        loading="lazy"
      />

      {/* Hover label overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <span className="font-serif text-lg text-white">{item.label}</span>
        <span className="font-sans text-xs text-white/75 font-light tracking-wide mt-0.5">
          {item.description}
        </span>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.gallery-title-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-title-anim', start: 'top 85%' },
        }
      )
      gsap.fromTo(
        '.gallery-card-anim',
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 78%' },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section id="galerie" ref={sectionRef} className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 gallery-title-anim">
          <span className="text-xs tracking-[0.35em] uppercase font-sans text-sage-deep font-medium">
            Galerie
          </span>
          <div className="organic-divider" />
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-3">
            Nos <em>Créations</em>
          </h2>
          <p className="font-sans text-bark font-light text-sm max-w-sm mx-auto">
            Chaque création est unique, réalisée avec soin et passion.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {/* Large card spans 2 rows */}
          <div className="gallery-card-anim col-span-2 md:col-span-1 row-span-2 md:row-span-2 h-64 md:h-auto md:min-h-[420px]">
            <GalleryCard item={galleryItems[0]} />
          </div>
          <div className="gallery-card-anim h-48 md:h-52">
            <GalleryCard item={galleryItems[1]} />
          </div>
          <div className="gallery-card-anim h-48 md:h-52">
            <GalleryCard item={galleryItems[2]} />
          </div>
          <div className="gallery-card-anim h-52 md:h-56">
            <GalleryCard item={galleryItems[3]} />
          </div>
          <div className="gallery-card-anim h-52 md:h-56">
            <GalleryCard item={galleryItems[4]} />
          </div>
          <div className="gallery-card-anim col-span-2 md:col-span-1 h-48 md:h-48">
            <GalleryCard item={galleryItems[5]} />
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans text-bark hover:text-espresso transition-colors group"
          >
            <span className="tracking-[0.12em] uppercase font-medium">
              Voir plus sur Instagram
            </span>
            <span className="w-8 h-px bg-sage-deep group-hover:w-12 transition-all duration-300 block" />
          </a>
        </div>
      </div>
    </section>
  )
}
