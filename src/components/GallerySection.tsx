import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// CSS-art gallery items (no external image URLs per project rules)
const galleryItems = [
  {
    label: 'French Élégante',
    bg: 'linear-gradient(135deg, #F8F0E8 0%, #EDE0D0 40%, #D4C8BC 100%)',
    accent: 'rgba(255,255,255,0.9)',
    description: 'French classique raffinée',
    size: 'large',
  },
  {
    label: 'Bordeaux Doré',
    bg: 'linear-gradient(135deg, #5C2530 0%, #7A3040 30%, #A05060 60%, #C4909A 100%)',
    accent: 'rgba(218,165,32,0.6)',
    description: 'Shellac bordeaux & détails or',
    size: 'small',
  },
  {
    label: 'Nude Rosé',
    bg: 'linear-gradient(135deg, #F0DDD5 0%, #E0C8C0 40%, #D0B5AC 100%)',
    accent: 'rgba(240,220,210,0.7)',
    description: 'Nude naturel & brillant',
    size: 'small',
  },
  {
    label: 'Noir Velours',
    bg: 'linear-gradient(135deg, #1A1218 0%, #2A1E24 40%, #3D2D35 100%)',
    accent: 'rgba(200,180,210,0.4)',
    description: 'Gel noir velour matte',
    size: 'medium',
  },
  {
    label: 'Corail Été',
    bg: 'linear-gradient(135deg, #E8604C 0%, #D94C38 30%, #C84838 60%, #E07860 100%)',
    accent: 'rgba(255,200,150,0.5)',
    description: 'Corail vibrant shellac',
    size: 'medium',
  },
  {
    label: 'Céleste',
    bg: 'linear-gradient(135deg, #9EC5D4 0%, #7AAFCC 35%, #5A9AB8 70%, #3D84A0 100%)',
    accent: 'rgba(180,225,240,0.5)',
    description: 'Bleu céleste aquarelle',
    size: 'small',
  },
]

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  return (
    <motion.div
      className="gallery-item group relative overflow-hidden rounded-3xl cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background art */}
      <div
        className="gallery-bg w-full h-full absolute inset-0"
        style={{ background: item.bg }}
      />

      {/* Shimmer accent overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${item.accent} 0%, transparent 60%)`,
        }}
      />

      {/* Decorative nail art SVG elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-25">
          <ellipse cx="100" cy="130" rx="18" ry="40" fill="rgba(255,255,255,0.5)" />
          <ellipse cx="60" cy="140" rx="16" ry="35" fill="rgba(255,255,255,0.4)" />
          <ellipse cx="140" cy="135" rx="15" ry="35" fill="rgba(255,255,255,0.4)" />
          <ellipse cx="30" cy="155" rx="13" ry="30" fill="rgba(255,255,255,0.3)" />
          <ellipse cx="168" cy="150" rx="12" ry="28" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>

      {/* Label overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <span className="font-serif text-lg text-white">{item.label}</span>
        <span className="font-sans text-xs text-white/70 font-light tracking-wide mt-0.5">
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
          {/* Row 1: large + 2 small */}
          <div className="gallery-card-anim col-span-2 md:col-span-1 row-span-2 md:row-span-2 h-64 md:h-auto md:min-h-[420px]">
            <GalleryCard item={galleryItems[0]} index={0} />
          </div>
          <div className="gallery-card-anim h-48 md:h-52">
            <GalleryCard item={galleryItems[1]} index={1} />
          </div>
          <div className="gallery-card-anim h-48 md:h-52">
            <GalleryCard item={galleryItems[2]} index={2} />
          </div>

          {/* Row 2: 2 medium */}
          <div className="gallery-card-anim h-52 md:h-56">
            <GalleryCard item={galleryItems[3]} index={3} />
          </div>
          <div className="gallery-card-anim h-52 md:h-56">
            <GalleryCard item={galleryItems[4]} index={4} />
          </div>
          <div className="gallery-card-anim col-span-2 md:col-span-1 h-48 md:h-48">
            <GalleryCard item={galleryItems[5]} index={5} />
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
