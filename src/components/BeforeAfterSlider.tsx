import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// CSS gradient art representing nail art states
const beforeStyle: React.CSSProperties = {
  background: `
    radial-gradient(ellipse at 50% 100%, #E8DDD4 0%, #D4C5B4 40%, #C8B8A5 100%)
  `,
}

const afterStyle: React.CSSProperties = {
  background: `
    radial-gradient(ellipse at 50% 100%, #3D2B2E 0%, #5C3D42 25%, #8B5C64 50%, #C4A0A8 75%, #E8D5D8 100%)
  `,
}

// Nail shape SVG overlay for both panels
function NailArtOverlay({ variant }: { variant: 'before' | 'after' }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === 'before' ? (
        <>
          {/* Natural/bare nails — subtle matte finish */}
          <ellipse cx="120" cy="280" rx="32" ry="70" fill="rgba(220,200,185,0.6)" />
          <ellipse cx="180" cy="260" rx="28" ry="80" fill="rgba(215,195,180,0.6)" />
          <ellipse cx="240" cy="255" rx="26" ry="78" fill="rgba(210,190,175,0.6)" />
          <ellipse cx="295" cy="265" rx="24" ry="72" fill="rgba(212,192,177,0.6)" />
          <ellipse cx="345" cy="285" rx="20" ry="55" fill="rgba(215,195,182,0.6)" />
          {/* Subtle nail line details */}
          <ellipse cx="120" cy="222" rx="30" ry="12" fill="rgba(200,175,158,0.3)" />
          <ellipse cx="180" cy="200" rx="26" ry="11" fill="rgba(200,175,158,0.3)" />
          <ellipse cx="240" cy="197" rx="24" ry="10" fill="rgba(200,175,158,0.3)" />
          <ellipse cx="295" cy="208" rx="22" ry="10" fill="rgba(200,175,158,0.3)" />
          <ellipse cx="345" cy="245" rx="18" ry="8" fill="rgba(200,175,158,0.3)" />
          <text x="50%" y="430" textAnchor="middle" fill="rgba(120,100,88,0.5)" fontSize="13" fontFamily="'Cormorant Garamond', serif" fontStyle="italic">
            Avant — Ongles naturels
          </text>
        </>
      ) : (
        <>
          {/* Gel nails — deep burgundy with gold shimmer */}
          <defs>
            <linearGradient id="nailGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B3A42" />
              <stop offset="50%" stopColor="#6B2A32" />
              <stop offset="100%" stopColor="#4A1A20" />
            </linearGradient>
            <linearGradient id="shineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,215,150,0.6)" />
              <stop offset="100%" stopColor="rgba(255,215,150,0)" />
            </linearGradient>
            <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(218,165,32,0)" />
              <stop offset="50%" stopColor="rgba(218,165,32,0.8)" />
              <stop offset="100%" stopColor="rgba(218,165,32,0)" />
            </linearGradient>
          </defs>
          {/* Nail shapes */}
          <ellipse cx="120" cy="280" rx="32" ry="70" fill="url(#nailGrad)" />
          <ellipse cx="180" cy="260" rx="28" ry="80" fill="url(#nailGrad)" />
          <ellipse cx="240" cy="255" rx="26" ry="78" fill="url(#nailGrad)" />
          <ellipse cx="295" cy="265" rx="24" ry="72" fill="url(#nailGrad)" />
          <ellipse cx="345" cy="285" rx="20" ry="55" fill="url(#nailGrad)" />
          {/* Shine highlights */}
          <ellipse cx="112" cy="240" rx="12" ry="22" fill="url(#shineGrad)" opacity="0.7" />
          <ellipse cx="172" cy="220" rx="10" ry="20" fill="url(#shineGrad)" opacity="0.7" />
          <ellipse cx="232" cy="216" rx="9" ry="19" fill="url(#shineGrad)" opacity="0.7" />
          <ellipse cx="287" cy="225" rx="8" ry="17" fill="url(#shineGrad)" opacity="0.7" />
          <ellipse cx="337" cy="248" rx="7" ry="14" fill="url(#shineGrad)" opacity="0.7" />
          {/* Gold accent lines */}
          <rect x="95" y="338" width="52" height="2" rx="1" fill="url(#goldLine)" />
          <rect x="155" y="328" width="46" height="2" rx="1" fill="url(#goldLine)" />
          <rect x="217" y="323" width="42" height="2" rx="1" fill="url(#goldLine)" />
          <rect x="274" y="329" width="38" height="2" rx="1" fill="url(#goldLine)" />
          <rect x="328" y="333" width="32" height="2" rx="1" fill="url(#goldLine)" />
          {/* Tiny gold dots */}
          {[110, 170, 230, 285, 338].map((x, i) => (
            <circle key={i} cx={x + 5} cy={295 + i * 2} r="2" fill="rgba(218,165,32,0.7)" />
          ))}
          <text x="50%" y="430" textAnchor="middle" fill="rgba(220,185,185,0.6)" fontSize="13" fontFamily="'Cormorant Garamond', serif" fontStyle="italic">
            Après — Shellac Bordeaux Doré
          </text>
        </>
      )}
    </svg>
  )
}

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.ba-title-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ba-title-anim',
            start: 'top 85%',
          },
        }
      )
      gsap.fromTo(
        '.ba-slider-anim',
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ba-slider-anim',
            start: 'top 80%',
          },
        }
      )
    },
    { scope: sectionRef }
  )

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const pos = ((clientX - rect.left) / rect.width) * 100
      setSliderPos(Math.max(2, Math.min(98, pos)))
    },
    []
  )

  const onMouseDown = () => setIsDragging(true)
  const onMouseUp = () => setIsDragging(false)
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 ba-title-anim">
          <span className="text-xs tracking-[0.35em] uppercase font-sans text-sage-deep font-medium">
            Résultats
          </span>
          <div className="organic-divider" />
          <h2 className="font-serif text-5xl md:text-6xl text-espresso mb-3">
            Avant / <em>Après</em>
          </h2>
          <p className="font-sans text-bark font-light text-sm max-w-sm mx-auto">
            Glissez pour découvrir la transformation. Laissez-vous inspirer.
          </p>
        </div>

        {/* Slider */}
        <div className="ba-slider-anim max-w-2xl mx-auto">
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden select-none aspect-[4/3] md:aspect-[16/9] cursor-ew-resize"
            style={{ boxShadow: '0 30px 80px rgba(44,37,32,0.12)' }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* After (full width underneath) */}
            <div className="absolute inset-0" style={afterStyle}>
              <NailArtOverlay variant="after" />
            </div>

            {/* Before (clipped to left side) */}
            <div
              className="absolute inset-0"
              style={{
                ...beforeStyle,
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <NailArtOverlay variant="before" />
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/80"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            />

            {/* Handle */}
            <div
              className="ba-handle"
              style={{ left: `${sliderPos}%` }}
              onMouseDown={onMouseDown}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              <div className="flex gap-0.5">
                <ChevronLeft size={10} className="text-sage-deep" />
                <ChevronRight size={10} className="text-sage-deep" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs tracking-[0.15em] uppercase font-sans text-espresso">
              Avant
            </div>
            <div className="absolute top-4 right-4 bg-espresso/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs tracking-[0.15em] uppercase font-sans text-cream">
              Après
            </div>
          </div>

          {/* Hint text */}
          <p className="text-center mt-4 text-xs font-sans text-bark/50 tracking-[0.15em] uppercase">
            ← Glissez pour comparer →
          </p>
        </div>
      </div>
    </section>
  )
}
