import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" onClick={close}>
          <img src="/SE_logo.PNG" alt="Stitches Embroidery" className="navbar__logo-img" />
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="mailto:stitches.embroidery@yahoo.com" className="btn-primary navbar__cta">
          Get a Quote
        </a>

        <button
          className={`navbar__hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a
          href="mailto:stitches.embroidery@yahoo.com"
          className="btn-primary navbar__mobile-cta"
          onClick={close}
        >
          Get a Quote
        </a>
      </div>
    </nav>
  )
}
