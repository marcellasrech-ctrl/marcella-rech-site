import { useEffect, useState } from 'react'
import { Instagram, Menu, X } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#briefing', label: 'Briefing' },
  { href: '#faq', label: 'FAQ' },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.26-8.24 8.26Zm4.52-6.18c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => handleAnchorClick(e, '#hero')}
          className={`font-heading text-lg font-semibold transition-colors ${
            scrolled ? 'text-text' : 'text-white'
          }`}
        >
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={`font-body text-sm transition-colors hover:text-primary ${
                scrolled ? 'text-text' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={scrolled ? 'text-text' : 'text-white'}
          >
            <Instagram size={20} />
          </a>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={scrolled ? 'text-text' : 'text-white'}
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href="#briefing"
            onClick={(e) => handleAnchorClick(e, '#briefing')}
            className="rounded-full bg-primary px-5 py-2 text-sm font-body text-white transition-opacity hover:opacity-90"
          >
            Planejar viagem
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden ${scrolled ? 'text-text' : 'text-white'}`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="bg-background px-4 pb-6 shadow-md md:hidden">
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-body text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#briefing"
              onClick={(e) => handleAnchorClick(e, '#briefing')}
              className="mt-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-body text-white"
            >
              Planejar viagem
            </a>
            <div className="mt-2 flex items-center gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-text">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
