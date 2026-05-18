import { footerBrand, footerContactItems, quickLinks } from '../data/footer'
import Container from './ui/Container'

function FooterLink({ href, label }) {
  return (
    <a
      href={href}
      className="inline-flex rounded-sm text-[16px] leading-[26px] text-[#d1d5db] transition-colors hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
    >
      {label}
    </a>
  )
}

export default function FooterSection() {
  return (
    <footer className="mt-8 border-t border-white/20 px-5 pb-8 pt-10 md:px-10 md:pt-14">
      <Container className="max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <section aria-label="Brand information">
            <h2 className="text-[32px] leading-8 text-white">{footerBrand.name}</h2>
            <p className="mt-4 max-w-[252px] text-[16px] leading-[1.6] text-[#9ca3af]">
              {footerBrand.description}
            </p>
          </section>

          <nav aria-label="Quick links">
            <h3 className="text-[32px] leading-8 text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="text-[32px] leading-8 text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              {footerContactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex rounded-sm text-[16px] leading-[26px] text-[#d1d5db] transition-colors hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-center">
          <p className="text-[16px] leading-[26px] text-[#9ca3af]">
            © {new Date().getFullYear()} Eduzen Solutions. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
