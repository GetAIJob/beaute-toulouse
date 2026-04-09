# Site Plan — Ongles & Beauté Toulouse

**Client:** Ongles et Beauté St Georges, Toulouse FR  
**Slug:** beaute-toulouse  
**Demo:** beaute-toulouse.risesitelab.com  
**Stack:** Vite + React 18 + TypeScript + Three.js/R3F + Framer Motion + GSAP  

---

## Design System

| Token | Value |
|-------|-------|
| Primary | Sage Green `#D1D5BE` |
| Secondary | Warm Sand `#C4B59A` |
| Background | Creamy White `#F8F5EE` |
| Text | Espresso `#2C2520` |
| Display font | Cormorant Garamond (serif) |
| Body font | Raleway (sans-serif) |

---

## Architecture

| Page | Route | Component |
|------|-------|-----------|
| Home | `/` | Hero → Services → Before/After → Gallery → Testimonials → Booking |
| Mentions légales | `/mentions-legales` | MentionsLegales.tsx |
| Politique remboursement | `/politique-de-remboursement` | PolitiqueDeRemboursement.tsx |
| CGV | `/conditions-generales` | ConditionsGenerales.tsx |

---

## Sections

1. **HeroSection** — 3D floating blobs (R3F + MeshDistortMaterial), Framer Motion word-by-word reveal
2. **ServicesSection** — 6 service cards with GSAP scroll reveal, icons, prices
3. **BeforeAfterSlider** — Draggable clip-path slider, CSS nail art art
4. **GallerySection** — 6-item masonry grid, hover "breath" animation
5. **TestimonialsSection** — 3 client reviews, star ratings
6. **BookingSection** — Contact form (Web3Forms), hours, address, Instagram
7. **Footer** — Links, legal pages, copyright

---

## Build Status

- [x] Dependencies installed
- [x] TypeScript build: PASS
- [x] Bundle chunking: three-vendor / motion-vendor / react-vendor
- [x] Legal pages: 3 FR pages
- [ ] Replace `YOUR_WEB3FORMS_ACCESS_KEY` in BookingSection.tsx
- [ ] Replace placeholder phone/address with real client data
- [ ] Deploy to beaute-toulouse.risesitelab.com

---

## Deployment Checklist

- [ ] GitHub repo created: GetAIJob/beaute-toulouse
- [ ] Cloudflare Pages project connected
- [ ] DNS CNAME: beaute-toulouse.risesitelab.com
- [ ] og:image screenshot taken
