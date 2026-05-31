import { footerBrand, footerContactItems, quickLinks } from '../data/footer'
import Container from './ui/Container'

function FooterLink({ href, label }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md text-[15px] leading-[24px] text-[#d1d5db] transition-colors duration-200 hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#ffc300]" />
      {label}
    </a>
  )
}

function FooterContactLink({ href, value }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-md text-[15px] leading-[24px] text-[#d1d5db] transition-colors duration-200 hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
    >
      {value}
    </a>
  )
}

export default function FooterSection() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-white/15 px-5 pb-8 pt-10 md:px-10 md:pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffc300]/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-10 h-44 w-44 -translate-x-1/2 rounded-full bg-[#ffc300]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-8 h-56 w-56 translate-x-1/3 rounded-full bg-white/5 blur-3xl"
      />
      <Container className="max-w-[1200px]">
        <div className="relative grid gap-10 rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm md:grid-cols-2 md:p-10 xl:grid-cols-[1.3fr_0.9fr_0.8fr]">
          <section aria-label="Brand information" className="space-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffc300]">
                Eduzen Solutions
              </p>
              <h2 className="mt-3 text-[32px] leading-[1.05] text-white md:text-[38px]">
                {footerBrand.name}
              </h2>
            </div>

            <p className="max-w-[340px] text-[15px] leading-[1.75] text-[#9ca3af] md:text-[16px]">
              {footerBrand.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#ffc300] px-5 py-2.5 text-[14px] font-semibold text-black transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
              >
                Talk to us
              </a>
              <a
                href="mailto:info@eduzensolutions.in"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:border-[#ffc300] hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
              >
                info@eduzensolutions.in
              </a>
            </div>
          </section>

          <nav aria-label="Quick links" className="space-y-5">
            <h3 className="text-[20px] font-semibold text-white md:text-[22px]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic space-y-5">
            <h3 className="text-[20px] font-semibold text-white md:text-[22px]">Contact</h3>
            <ul className="space-y-3">
              {footerContactItems.map((item) => (
                <li key={item.label}>
                  <FooterContactLink href={item.href} value={item.value} />
                </li>
              ))}
            </ul>
            <p className="max-w-[240px] text-[14px] leading-[1.7] text-[#9ca3af]">
              We respond quickly during business hours and can help with programs, partnerships,
              and training inquiries.
            </p>
          </address>
        </div>

        {/* Updated Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-5 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-[14px] leading-[22px] text-[#9ca3af] md:text-left md:text-[15px]">
            © {new Date().getFullYear()} Eduzen Solutions. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            
            <a
              href="https://auriksha.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#000000] px-5 py-2 text-[14px] font-semibold text-[#000000] transition-colors duration-200 hover:bg-[#000000] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000000]"
            >
              Visit Auriksha
            </a>

            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-[14px] font-semibold text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
            >
              Back to top
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ffc300] px-5 py-2 text-[14px] font-semibold text-black transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}