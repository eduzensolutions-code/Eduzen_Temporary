const impactStats = [
  {
    value: '50000+',
    title: 'Empowering India’s Future Workforce',
    description:
      'Over 50,000+ ambitious students and young professionals across India have gained access to transformative, industry-focused training programs designed to bridge the gap between education and real-world careers.',
    image: 'https://www.figma.com/api/mcp/asset/c98f79c1-419f-404d-8cb6-d454b6677fe8',
    imageAlt: 'Students collaborating during a workshop',
  },
  {
    value: 'Tier 2 & 3',
    title: 'Mobilizing Underserved Talent',
    description:
      'We maintain a dominant presence in Tier 2 and 3 regions, bringing practical, real-world career readiness to ambitious students in non-metropolitan hubs.',
    image: 'https://www.figma.com/api/mcp/asset/1d1ca188-71ab-45f7-abf1-0ac38c6c8977',
    imageAlt: 'Industrial learning environment',
    reverse: true,
  },
  {
    value: '500+',
    title: 'Designing Career Blueprints',
    description:
      'Through hundreds of interactive workshops and high-impact seminars, we build strategic career awareness and essential financial literacy for India’s youth.',
    image: 'https://www.figma.com/api/mcp/asset/38613d38-9886-413e-9f1f-fd2bbfed3059',
    imageAlt: 'Professional mentoring session',
  },
  {
    value: '8+ States',
    title: 'A Pan-India Strategic Network',
    description:
      'Our expansive institutional and corporate footprint accelerates opportunity across the nation, ensuring local talent meets global industry standards.',
    image: '/indianmap.jpeg',
    imageAlt: 'Contemporary office collaboration space',
    reverse: true,
  },
]

function StatCard({ item }) {
  return (
    <article className="rounded-[8px] border border-white bg-black p-5 md:p-7 lg:p-[36px]">
      <div
        className={`flex flex-col items-center gap-8 lg:gap-[92px] ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-[220px] w-full max-w-[370px] rounded-2xl object-cover shadow-[0_17px_35px_-8px_rgba(0,0,0,0.25)] lg:h-[211px]"
        />
        <div className={`flex-1 ${item.reverse ? 'text-left lg:text-right' : 'text-left'}`}>
          <p className="font-['Gideon_Roman'] text-[48px] leading-[1] text-[#ffc300] md:text-[56px] lg:text-[64px]">
            {item.value}
          </p>
          <h3 className="mt-2 text-[24px] leading-[1.25] text-[#f3f4f6] md:text-[28px]">
            {item.title}
          </h3>
          <p className="mt-5 text-[15px] leading-[1.7] text-white/95 md:text-[16px] md:leading-[27px]">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function StatsSection() {
  return (
    <section id="impact" className="px-5 py-16 md:px-10 md:py-20 lg:px-[35px] lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1254px] flex-col items-center gap-12 lg:gap-[62px]">
        <header className="max-w-[1104px] text-center">
          <h2 className="text-4xl leading-[1.2] text-[#f3f4f6] md:text-5xl md:leading-[48px]">
            The <span className="text-[#ffc300]">Impact</span> We Have{' '}
            <span className="text-[#ffc300]">Made</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[1180px] text-base font-semibold leading-7 text-[#d1d5db] md:mt-8 md:text-[20px]">
            Eduzen Solutions empowers students with practical, industry-focused learning designed
            for the real world. Through mentorship, modern technology training, workshops, and
            career-driven programs, we help bridge the gap between academics and professional
            success.
          </p>
        </header>

        <div className="flex w-full flex-col gap-8 lg:gap-[50px]">
          {impactStats.map((item) => (
            <StatCard key={item.value} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
