import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Suspense, lazy } from 'react'

const BlobScene = lazy(() => import('./BlobScene'))

const titleWords = ["L'art", 'de', 'la', 'Beauté', 'à', 'Toulouse']
const subtitleWords = ['Manucure,', 'Pédicure', 'et', 'Soins', "d'Exception."]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const word = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeSlide = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollDown = () => {
    const el = document.querySelector('#services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={scrollRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Background blob canvas — right side, bleeds into left on mobile */}
      <div className="absolute inset-0 md:left-[45%] pointer-events-none select-none">
        <Suspense fallback={null}>
          <BlobScene />
        </Suspense>
      </div>

      {/* Subtle radial gradient veil to blend blobs with background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-sage-deep block" />
            <span className="text-xs tracking-[0.3em] uppercase font-sans text-sage-deep font-medium">
              Institut de Beauté · Toulouse
            </span>
          </motion.div>

          {/* Main title — stagger word reveal */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-serif text-6xl md:text-7xl lg:text-8xl text-espresso leading-[1.05] mb-6"
          >
            {titleWords.map((w, i) => (
              <span
                key={i}
                className="word-clip mr-[0.25em] last:mr-0 inline-block align-bottom"
              >
                <motion.span variants={word} className="inline-block">
                  {w === 'Beauté' ? <em>{w}</em> : w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-serif text-xl md:text-2xl text-bark font-light italic mb-10"
          >
            {subtitleWords.map((w, i) => (
              <span
                key={i}
                className="word-clip mr-[0.3em] last:mr-0 inline-block"
              >
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeSlide}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <button
              onClick={() => scrollDown()}
              className="btn-glow px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-sans font-medium"
            >
              Réserver en ligne
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#prestations')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
                else scrollDown()
              }}
              className="flex items-center gap-2 px-6 py-4 rounded-full border border-sage-deep text-sm tracking-[0.12em] uppercase font-sans text-espresso hover:bg-sage-light transition-colors font-medium"
            >
              Découvrir nos soins
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-12 flex items-center gap-6 text-bark/70"
          >
            {[
              { val: '5+', label: 'Ans d\'expérience' },
              { val: '800+', label: 'Clientes fidèles' },
              { val: '100%', label: 'Produits premium' },
            ].map((stat) => (
              <div key={stat.val} className="text-center">
                <div className="font-serif text-2xl text-espresso">{stat.val}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-sans font-light mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bark/50 hover:text-bark transition-colors group"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
