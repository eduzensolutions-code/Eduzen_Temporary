const timelineItems = [
  {
    title: 'Academy Establishment',
    year: '2019',
    description:
      'Established the Eduzen learning ecosystem to deliver practical, career-first training for students and early professionals.',
  },
  {
    title: 'International Accreditation',
    year: '2021',
    description:
      'Expanded quality benchmarks through global-aligned frameworks and strategic partnerships for modern skill development.',
  },
  {
    title: 'Digital Expansion',
    year: '2023',
    description:
      'Scaled online-first delivery with mentorship-driven cohorts, enabling broader access to industry-relevant education.',
  },
]

const valueCards = [
  {
    title: 'Our Mission',
    highlightedWord: 'Mission',
    content:
      'To equip learners with practical, industry-ready capabilities through mentorship, technology-enabled learning, and outcome-focused programs.',
  },
  {
    title: 'Our Voice',
    highlightedWord: 'Voice',
    content:
      'We believe premium education should be clear, actionable, and inclusive. Every learning experience is designed for confidence, employability, and measurable growth.',
  },
]

function TimelineItem({ item, isLast }) {
  return (
    <li className="flex gap-4 md:gap-6">
      <div className="relative flex w-12 shrink-0 justify-center">
        {!isLast && <span className="absolute bottom-[-12px] top-12 w-[2px] bg-[#333333]" />}
        <span className="mt-0 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#ffc300] bg-[#111111]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc300]" />
        </span>
      </div>

      <article className="relative flex-1 rounded-xl border border-[#ffc300]/20 bg-[#111111]/70 p-5 backdrop-blur-[5px] md:p-8">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 md:mb-4">
          <h3 className="text-xl font-bold leading-8 text-white md:text-2xl">{item.title}</h3>
          <span className="rounded-full border border-[#ffc300] px-3 py-1 text-sm tracking-[0.35px] text-[#ffc300]">
            {item.year}
          </span>
        </div>
        <p className="max-w-[68ch] text-[15px] leading-[1.65] text-[#a3a3a3] md:text-base md:leading-[26px]">
          {item.description}
        </p>
        <span className="absolute bottom-0 left-0 top-0 w-1 bg-[#ffc300]/50" />
      </article>
    </li>
  )
}

function ValueCard({ card }) {
  const [prefix, suffix] = card.title.split(card.highlightedWord)

  return (
    <article className="rounded-2xl border border-[#ffc300]/20 bg-[#111111]/70 p-6 backdrop-blur-[5px] md:p-8">
      <h3 className="mb-4 text-[28px] font-bold leading-9 text-white">
        {prefix}
        <span className="text-[#ffc300]">{card.highlightedWord}</span>
        {suffix}
      </h3>
      <p className="text-[16px] leading-[1.65] text-[#a3a3a3] md:text-[18px] md:leading-[29px]">
        {card.content}
      </p>
    </article>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="px-5 py-16 md:px-10 md:py-20 lg:px-8 lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-16 md:gap-20">
        <header className="text-center">
          <h2 className="text-4xl font-bold leading-[1.15] md:text-5xl md:leading-[48px]">
            <span className="text-[#ffc300]">About </span>
            <span className="text-white">Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[672px] text-base leading-7 text-[#a3a3a3] md:text-[18px]">
            Key milestones in our commitment to learner excellence
          </p>
        </header>

        <ol className="m-0 flex w-full list-none flex-col gap-8 p-0 md:gap-8">
          {timelineItems.map((item, index) => (
            <TimelineItem key={item.title} item={item} isLast={index === timelineItems.length - 1} />
          ))}
        </ol>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          {valueCards.map((card) => (
            <ValueCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
