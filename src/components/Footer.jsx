import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/SE_logo.PNG" alt="Stitches Embroidery" className="footer__logo" />
            <p className="footer__tagline">
              Crafted with Precision.<br />Stitched with Heart.
            </p>
            <span className="footer__female-badge">♀ Female-Owned AZ Business</span>
          </div>

          <div className="footer__contact-col">
            <p className="footer__contact-heading">Contact Us</p>
            <div className="footer__person">
              <p className="footer__person-name">Heidi Wright</p>
              <p className="footer__person-role">Owner / Operator</p>
              <div className="footer__person-links">
                <a href="tel:6026637173">602-663-7173</a>
                <a href="mailto:stitches.embroidery@yahoo.com">stitches.embroidery@yahoo.com</a>
              </div>
            </div>
            <div className="footer__person">
              <p className="footer__person-name">Marty Monaghan</p>
              <p className="footer__person-role">Sales Manager</p>
              <div className="footer__person-links">
                <a href="tel:6026170870">602-617-0870</a>
                <a href="mailto:mmonaghan12@cox.net">mmonaghan12@cox.net</a>
              </div>
            </div>
          </div>

          <div className="footer__nav-col">
            <p className="footer__contact-heading">Navigate</p>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="mailto:stitches.embroidery@yahoo.com">Get a Quote</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Stitches Embroidery &mdash; A{' '}
            <a href="https://neighbored.com" target="_blank" rel="noopener noreferrer">
              Neighbored LLC
            </a>{' '}
            project
          </p>
          <p className="footer__location">North Phoenix, AZ · Ships Nationwide</p>
        </div>
      </div>
    </footer>
  )
}
