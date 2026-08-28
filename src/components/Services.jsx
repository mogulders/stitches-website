import './Services.css'

const services = [
  {
    title: 'Commercial & Business',
    desc: 'Branded uniforms, corporate apparel, and custom workwear for businesses of all sizes. Make your brand unforgettable.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM4 4h16v2H4V4Zm0 14h16v2H4v-2Z"/>
      </svg>
    ),
  },
  {
    title: 'Personal & Custom',
    desc: 'Monograms, personalized gifts, heirlooms, and one-of-a-kind pieces. Every stitch tells your unique story.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/>
      </svg>
    ),
  },
  {
    title: 'Hats & Headwear',
    desc: 'Fitted caps, beanies, trucker hats, and visors — precisely embroidered with logos and custom designs.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.03 3 3 7.03 3 12v1h18v-1c0-4.97-4.03-9-9-9Zm-9 11v2h18v-2H3Zm2 4v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1H5Z"/>
      </svg>
    ),
  },
  {
    title: 'Bulk & Team Orders',
    desc: 'Sports teams, schools, and organizations — consistent quality across every piece, delivered on time.',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__header">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">Services</h2>
          <p className="section-body">
            From single custom pieces to large commercial orders, we bring your vision to life
            with precision embroidery and direct-to-film transfers.
          </p>
        </div>
        <div className="services__grid">
          {services.map(s => (
            <div className="service-card" key={s.title}>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
