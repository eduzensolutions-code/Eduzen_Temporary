const founder = {
  name: 'Founder, Eduzen Solutions',
  role: 'Founding Director',
  image:
    '/foundersnote.png',
}

const noteText =
  'Eduzen was built on a simple conviction: education should produce capability, not just certificates. We work to create practical, career-defining pathways where ambition is met with structured mentorship, modern skill-building, and real industry readiness. Our commitment is to ensure every learner moves forward with clarity, confidence, and measurable growth.'

export default function FoundersNoteSection() {
  return (
    <section id="founders-note" className="px-5 py-12 md:px-10 md:py-14">
      <div className="mx-auto w-full max-w-[1104px] border-y border-white/25 py-7 md:py-9">
        <article className="grid items-start gap-6 md:grid-cols-[260px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <figure className="m-0">
            <img
              src={founder.image}
              alt="Portrait of Eduzen founder"
              className="h-[220px] w-full rounded-[6px] border border-white/20 object-cover md:h-[250px] lg:h-[280px]"
            />
          </figure>

          <div className="md:pt-1">
            <header className="border-b border-white/20 pb-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#ffc300]">Founder&apos;s Note</p>
              <h2 className="mt-1 text-[30px] leading-[1.05] text-white md:text-[38px]">
                A Message From The Founder
              </h2>
            </header>

            <blockquote className="m-0 border-b border-white/20 py-4 text-[15px] leading-[1.72] text-[#e5e7eb] md:text-[16px] md:leading-[1.78]">
              <p>{noteText}</p>
            </blockquote>

            <footer className="pt-3">
              <p className="text-[15px] font-semibold text-[#ffc300]">{founder.name}</p>
              <p className="mt-0.5 text-[13px] text-[#9ca3af]">{founder.role}</p>
            </footer>
          </div>
        </article>
      </div>
    </section>
  )
}
