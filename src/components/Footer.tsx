import BrandLogo from '../assets/images/Blogo.png'
import './Footer.css'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/bonandrei.atienza',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 9h3l-.4 3h-2.6V21h-3.2v-9H8V9h1.8V7.2C9.8 5.3 10.9 4 13.2 4h2.3v3h-2c-.7 0-1.1.4-1.1 1.1V9Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bonandrei_atienza?igsh=bHcyeGZxN211aGJz',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3.5h8a4.5 4.5 0 0 1 4.5 4.5v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm0 2A2.5 2.5 0 0 0 5.5 8v8A2.5 2.5 0 0 0 8 18.5h8a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 16 5.5Zm4 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.25-2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/andreiatienza',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.2-3.36-1.2-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.93.83.09-.65.35-1.09.63-1.34-2.22-.26-4.56-1.11-4.56-4.94 0-1.09.4-1.98 1.04-2.68-.1-.26-.45-1.3.1-2.7 0 0 .85-.27 2.8 1.03a9.7 9.7 0 0 1 5.1 0c1.93-1.3 2.78-1.03 2.78-1.03.57 1.4.22 2.44.11 2.7.65.7 1.04 1.59 1.04 2.68 0 3.84-2.34 4.68-4.58 4.94.36.31.69.91.69 1.84v2.72c0 .27.17.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bon-andrei-atienza-41343537b/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.34 9H3.8v12h2.54Zm.18-3.75A1.59 1.59 0 0 0 4.9 3.63 1.6 1.6 0 0 0 4.88 6a1.59 1.59 0 0 0 1.6 0 1.59 1.59 0 0 0 .04-2.75ZM20.5 21v-6.55c0-3.5-1.87-5.13-4.36-5.13A3.76 3.76 0 0 0 13 11.32h-.05V9h-2.5v12H13v-6.36c0-1.68.32-3.3 2.4-3.3 2.04 0 2.1 1.88 2.1 3.4V21Z" />
      </svg>
    ),
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-layout">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={BrandLogo} alt="Bon Andrei Logo" />
          </div>
          <div>
            <p className="footer-name">Bon Andrei Atienza</p>
            <p className="footer-tagline">Aspiring Web Developer</p>
          </div>
        </div>

        <div className="footer-divider" aria-hidden />

        <div className="footer-links">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="footer-copy">© {currentYear} Bon Andrei Atienza. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

