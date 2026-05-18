import { heroActions, heroStats } from '../data/hero'
import ButtonLink from './ui/ButtonLink'
import Container from './ui/Container'

export default function Hero() {
  return (
    <section className="relative px-5 pb-8 pt-4 md:px-10 md:pb-10 lg:px-[45px] lg:pb-[52px]">
      <Container className="max-w-[1440px]">
        <div className="relative grid min-w-0 lg:grid-cols-[minmax(0,680px)_minmax(360px,1fr)] lg:items-start lg:gap-10 xl:gap-16 2xl:grid-cols-[minmax(0,700px)_minmax(420px,1fr)]">
          {/* ── MOBILE ONLY: full-bleed background image that sits behind text ── */}
          <div
            className="absolute inset-0 -mx-5 -mt-4 overflow-hidden lg:hidden"
            aria-hidden="true"
          >
            <img
              src="/hero_image.webp"
              alt=""
              className="h-full w-full object-cover object-[70%_center]"
            />
            {/* layered gradients to keep text readable like the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>

          {/* ── TEXT CONTENT (both layouts share this) ── */}
          <div className="relative z-10 flex min-w-0 flex-col items-start">

            {/* Tagline row */}
            <div className="mb-6 flex w-full max-w-[781px] items-center justify-center gap-[15px] lg:mb-[44px]">
              <span aria-hidden="true" className="h-[2px] w-12 bg-[#ffc300] md:w-24 lg:w-[160px]" />
              <p className="whitespace-nowrap text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#ffc300] sm:text-[13px] md:text-[16px] lg:text-[23.8px] lg:tracking-[1.19px]">
                Empowering Student Careers
              </p>
              <span aria-hidden="true" className="h-[2px] w-12 bg-[#ffc300] md:w-24 lg:w-[160px]" />
            </div>

            {/* H1 */}
            <h1 className="mb-5 max-w-[680px] text-left font-['Gideon_Roman'] text-[38px] leading-[1.05] text-white sm:text-[44px] md:text-[54px] lg:mb-[35px] lg:text-[72px] lg:leading-[72px]">
              Build <span className="text-[#ffc300]">Industry-Ready</span> Skills For The Real
              World
            </h1>

            {/* Body copy */}
            <p className="mb-7 max-w-[680px] text-left text-[15px] leading-[1.55] text-white/90 md:text-[18px] lg:mb-[38px] lg:text-[20px] lg:leading-[28px]">
              Eduzen Solutions empowers students with practical, industry-focused learning
              designed for the real world. Through mentorship, modern technology training,
              workshops, and career-driven programs, we help bridge the gap between academics and
              professional success.
            </p>

            {/* CTA buttons */}
            <div className="mb-8 flex flex-wrap items-center gap-4 lg:mb-[48px]">
              {heroActions.map((action) => (
                <ButtonLink key={action.label} href={action.href} variant={action.variant}>
                  {action.label}
                </ButtonLink>
              ))}
            </div>

            {/* Stats bar */}
            <dl className="grid w-full grid-cols-1 border-y border-white/30 py-5 min-[420px]:grid-cols-3 md:py-[33px]">
              {heroStats.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex min-w-0 items-center gap-3 py-3 first:pt-0 last:pb-0 min-[420px]:py-0 md:gap-4 ${
                    index > 0
                      ? 'border-t border-white/30 pt-4 min-[420px]:border-l min-[420px]:border-t-0 min-[420px]:pl-3 min-[420px]:pt-0 sm:pl-5 md:pl-8'
                      : ''
                  }`}
                >
                  {/* THE YELLOW BOX */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ffc300]/70 bg-[#ffc300]/10 md:h-11 md:w-11">
                    {/* YOUR PNG ICON (Sits exactly inside the yellow box) */}
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain md:h-5 md:w-5"
                    />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-base font-bold leading-6 text-white sm:text-lg md:text-2xl md:leading-8">
                      {item.value}
                    </dt>
                    <dd className="text-[11px] leading-4 text-[#9ca3af] sm:text-xs md:text-sm md:leading-5">
                      {item.label}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* ── DESKTOP ONLY: side image card ── */}
          <div
            className="
              hidden lg:block
              relative
              h-[560px] xl:h-[700px] 2xl:h-[760px]
              w-full min-w-0 max-w-[620px] xl:max-w-[720px] 2xl:max-w-[760px]
              justify-self-end self-start
              overflow-hidden rounded-[16px]
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            "
          >
            <img
              src="/hero_image.webp"
              alt="Student working in focused low-light environment"
              className="h-full w-full object-cover object-[34%_center]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"
              aria-hidden="true"
            />
          </div>

        </div>
      </Container>
    </section>
  )
}
