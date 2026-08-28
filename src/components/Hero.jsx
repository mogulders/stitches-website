import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__overlay" />
      <div className="hero__content">
        <img src="/logo.jpeg" alt="Stitches Embroidery" className="hero__logo" />
        <p className="hero__eyebrow">North Phoenix, AZ · Ships Nationwide</p>
        <h1 className="hero__title">
          Crafted with Precision.<br /><em>Stitched with Heart.</em>
        </h1>
        <p className="hero__subtitle">Custom Embroidery · Commercial &amp; Personal Orders</p>
        <div className="hero__actions">
          <a href="mailto:stitches.embroidery@yahoo.com" className="btn-primary">
            Get a Quote
          </a>
          <a href="#about" className="btn-outline">
            Our Story
          </a>
        </div>
      </div>

    </section>
  )
}
