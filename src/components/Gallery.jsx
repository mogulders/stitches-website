import { useState, useEffect } from 'react'
import './Gallery.css'

const images = [
  { src: '/gallery/wildcat-cliffs-bags.jpeg', alt: 'Wildcat Cliffs embroidered bags' },
  { src: '/gallery/thermal-club-bags.jpeg', alt: 'Thermal Club leather bags' },
  { src: '/gallery/thunderbird.jpeg', alt: 'Thunderbird embroidered leather' },
  { src: '/gallery/atssa-2025.jpeg', alt: 'ATSSA Arizona Chapter 2025 embroidery' },
  { src: '/gallery/palmbrook-back-dtf.jpeg', alt: 'Palmbrook Golf Club DTF shirt back' },
  { src: '/gallery/the-farms-bag.jpeg', alt: 'The Farms embroidered bags' },
  { src: '/gallery/pga-west-bag.jpeg', alt: 'PGA West embroidered bag' },
  { src: '/gallery/bull-shooters-dart-master.jpeg', alt: 'Bull Shooters Dart Master embroidery' },
  { src: '/gallery/modern-group-back.jpeg', alt: 'Modern Group shirt back close-up' },
  { src: '/gallery/3-amigos-tee.jpeg', alt: '3 Amigos Tequila embroidered tee' },
  { src: '/gallery/sonnenalp-scarves.jpeg', alt: 'Sonnenalp embroidered scarves' },
  { src: '/gallery/saddlebrooke-ranch.jpeg', alt: 'Saddlebrooke Ranch Golf Club embroidery' },
  { src: '/gallery/modern-group-lc.jpeg', alt: 'Modern Group logo close-up' },
  { src: '/gallery/stitches-dtf-full-back.jpeg', alt: 'Stitches Embroidery DTF full back shirt' },
  { src: '/gallery/bull-shooters-full-back.jpeg', alt: 'Bull Shooters full back shirt' },
  { src: '/gallery/bull-shooters-skull.jpeg', alt: 'Bull Shooters skull design' },
  { src: '/gallery/bull-shooters-cap.jpeg', alt: 'Bull Shooters embroidered cap' },
  { src: '/gallery/palmbrook-lc-dtf.jpeg', alt: 'Palmbrook Golf Club DTF logo close-up' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    if (lightboxIndex === null) return
    function handleKey(e) {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex])

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <div className="gallery__header">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-title">Gallery</h2>
          <p className="section-body">
            A sample of our embroidery and decoration work across apparel, headwear, bags, and custom projects.
          </p>
        </div>
        <div className="gallery__grid">
          {images.map((img, i) => (
            <div
              className="gallery-card"
              key={img.src}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.alt} className="gallery-card__img" />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox__close" onClick={() => setLightboxIndex(null)}>×</button>
          <button
            className="lightbox__arrow lightbox__arrow--left"
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + images.length) % images.length) }}
          >
            ‹
          </button>
          <div className="lightbox__img-wrap" onClick={e => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="lightbox__img"
            />
            <p className="lightbox__caption">{images[lightboxIndex].alt}</p>
          </div>
          <button
            className="lightbox__arrow lightbox__arrow--right"
            onClick={e => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % images.length) }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
