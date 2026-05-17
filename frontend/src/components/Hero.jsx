const stats = [
  { value: '50000+', label: 'Students Trained', icon: '/student_icon_hero.png' },
  { value: '500+', label: 'Workshops', icon: '/university_hero.png' },
  { value: 'Industry', label: 'Mentors', icon: '/briefcase_hero.png' },
]

export default function Hero() {
  return (
    <section className="relative px-5 pb-8 pt-4 md:px-10 md:pb-10 lg:px-[45px] lg:pb-[52px]">
      <div className="mx-auto w-full max-w-[1440px]">
<div className="relative lg:flex lg:items-start lg:justify-start lg:gap-10 xl:gap-16">
          {/* ── MOBILE ONLY: full-bleed background image that sits behind text ── */}
          <div
            className="absolute inset-0 -mx-5 -mt-4 overflow-hidden lg:hidden"
            aria-hidden="true"
          >
            <img
              src="/hero_image.png"
              alt=""
              className="h-full w-full object-cover object-[70%_center]"
            />
            {/* layered gradients to keep text readable like the screenshot */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>

          {/* ── TEXT CONTENT (both layouts share this) ── */}
          <div className="relative z-10 flex flex-col items-start">

            {/* Tagline row */}
            <div className="mb-6 flex w-full max-w-[781px] items-center justify-center gap-[15px] lg:mb-[44px]">
              <span className="h-[2px] w-12 bg-[#ffc300] md:w-24 lg:w-[160px]" />
              <p className="whitespace-nowrap text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#ffc300] sm:text-[13px] md:text-[16px] lg:text-[23.8px] lg:tracking-[1.19px]">
                Empowering Student Careers
              </p>
              <span className="h-[2px] w-12 bg-[#ffc300] md:w-24 lg:w-[160px]" />
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
              <a
                href="#programs"
                className="inline-flex h-[52px] items-center justify-center rounded-[8px] bg-[#ffc300] px-7 text-base font-bold text-black shadow-[0_0_7.5px_rgba(212,175,55,0.3)] transition-colors duration-200 hover:bg-[#ffd23f] lg:h-[58px] lg:px-8"
              >
                Explore Programs
              </a>
              <a
                href="#get-started"
                className="inline-flex h-[52px] items-center justify-center rounded-[8px] border border-[#ffc300] px-6 text-base font-bold text-[#ffc300] transition-colors duration-200 hover:bg-[#ffc300] hover:text-black lg:h-[58px] lg:px-[33px]"
              >
                Get Started
              </a>
            </div>

            {/* Stats bar */}
            <dl className="grid w-full grid-cols-3 border-y border-white/30 py-5 md:py-[33px]">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 md:gap-4 ${
                    index > 0 ? 'border-l border-white/30 pl-3 sm:pl-5 md:pl-8' : ''
                  }`}
                >
                  {/* THE YELLOW BOX */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ffc300]/70 bg-[#ffc300]/10 md:h-11 md:w-11">
                    {/* YOUR PNG ICON (Sits exactly inside the yellow box) */}
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-4 w-4 object-contain md:h-5 md:w-5"
                    />
                  </div>
                  <div>
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
              w-[500px] xl:w-[1000px]
              h-[600px] xl:h-[800px]
              shrink-0 self-start
              overflow-hidden rounded-[16px]
              shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            "
          >
            <img
              src="/hero_image.png"
              alt="Student working in focused low-light environment"
              className="h-full w-full object-cover object-[34%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </div>

        </div>
      </div>
    </section>
  )
}