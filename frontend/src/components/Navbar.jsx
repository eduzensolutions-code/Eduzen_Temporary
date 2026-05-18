import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data/navigation'

const logoUrl = '/logo.webp'

function MobileMenuIcon({ open }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-all duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
      />
      <span
        className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition-all duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition-all duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
      />
    </span>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const firstNavLink = navRef.current?.querySelector('a')
    firstNavLink?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="relative z-40 w-full bg-black/95 px-5 py-5 md:px-10 md:py-8 lg:px-[45px] lg:py-[45px]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-5 lg:gap-[70px]">
        <a href="/" aria-label="Eduzen home" className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]">
          <img
            src={logoUrl}
            alt=""
            aria-hidden="true"
            className="h-[66px] w-[66px] object-cover md:h-[90px] md:w-[90px] lg:h-[137px] lg:w-[137px]"
          />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white shadow-[0_6px_6px_rgba(27,27,27,0.16)] transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <MobileMenuIcon open={menuOpen} />
        </button>

        <nav
          ref={navRef}
          id="primary-navigation"
          aria-label="Primary"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full z-30 mt-2 max-h-[calc(100vh-120px)] flex-col gap-3 overflow-y-auto rounded-2xl border border-white/25 bg-black/95 p-4 backdrop-blur-xl md:max-h-[calc(100vh-150px)] lg:static lg:z-auto lg:mt-0 lg:flex lg:max-h-none lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="m-0 flex list-none flex-col gap-2 p-0 lg:mx-auto lg:flex-row lg:items-center lg:gap-[29px] lg:rounded-[67px] lg:border-[1.676px] lg:border-white lg:bg-white/8 lg:px-[30px] lg:py-[20px] lg:backdrop-blur-[33px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="inline-flex rounded-full px-4 py-2 text-[15px] font-bold leading-6 tracking-[0.01em] text-white transition-colors duration-200 hover:bg-white/15 hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300] lg:px-0 lg:py-0 lg:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="inline-flex h-[47.829px] items-center justify-center rounded-[22.143px] border-[1.329px] border-white bg-white/8 px-5 text-[11.575px] font-bold leading-[15.434px] text-white transition-colors duration-200 hover:bg-white/20 hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}
