const services = [
  {
    title: 'Industry Skills',
    description:
      'Project-based learning focusing on modern tech stacks and frameworks demanded by top-tier organizations.',
    icon: 'https://www.figma.com/api/mcp/asset/5c53eec5-39a5-4f52-b517-6c536eb929ed',
  },
  {
    title: 'Social Impact',
    description:
      'Executing high-value initiatives that channel resources into skill development and employability for underserved communities.',
    icon: 'https://www.figma.com/api/mcp/asset/a5ff6903-a8d6-48f8-84f8-24496ec17cd2',
  },
  {
    title: 'Guided Admissions',
    description:
      'Streamlined college selection and application support to secure placements in premium, career-aligned institutions.',
    icon: 'https://www.figma.com/api/mcp/asset/efb3adf3-ae85-497b-a870-b94710825abb',
  },
  {
    title: 'Career Roadmapping',
    description:
      'Personalized blueprints to identify core strengths and map a definitive strategy for long-term success.',
    icon: 'https://www.figma.com/api/mcp/asset/ff446424-387a-4d31-9186-ebfe0fd63a54',
  },
  {
    title: 'Corporate Placements',
    description:
      'Direct access to exclusive internships and full-time roles through our premium hiring partner network.',
    icon: 'https://www.figma.com/api/mcp/asset/7fe53216-b841-461e-813b-a7b41494735e',
  },
  {
    title: 'Campus Partnerships',
    description:
      'Integrating industry-led upskilling programs directly into campuses to improve student corporate readiness.',
    icon: 'https://www.figma.com/api/mcp/asset/4e8b82d9-d5b3-4f6c-8947-5d4c9911fc39',
  },
  {
    title: 'Research & Consulting',
    description:
      'Data-backed advisory and capability-building tracks for institutions focused on measurable learner outcomes.',
    icon: 'https://www.figma.com/api/mcp/asset/1168c524-98a7-4ba4-8086-dab76e64cc97',
  },
  {
    title: 'Expert Mentorship',
    description:
      'Structured guidance from seasoned practitioners to accelerate clarity, confidence, and execution.',
    icon: 'https://www.figma.com/api/mcp/asset/b209d357-7f55-432b-8eea-71dc632dfc9b',
  },
]

function ServiceCard({ service }) {
  return (
    <article className="group flex h-full min-h-[262px] flex-col items-center rounded-[6px] border border-[#f3f4f6] bg-black px-7 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ffc300] hover:shadow-[0_14px_30px_rgba(255,195,0,0.12)]">
      <img src={service.icon} alt="" aria-hidden="true" className="mb-2 h-[61px] w-[61px]" />
      <h3 className="mb-4 text-[20px] font-semibold leading-7 text-[#ffc300]">{service.title}</h3>
      <p className="text-[14px] font-light leading-[22.75px] text-white/95">{service.description}</p>
    </article>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="px-5 py-16 md:px-10 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1249px]">
        <header className="mx-auto mb-12 max-w-[1180px] text-center md:mb-16">
          <h2 className="text-4xl font-normal leading-[1.2] text-[#f3f4f6] underline decoration-white underline-offset-4 md:text-5xl md:leading-[48px]">
            Our <span className="font-bold text-[#ffc300] decoration-[#ffc300]">Services</span>
          </h2>
          <p className="mx-auto mt-5 text-base font-semibold leading-7 text-[#d1d5db] md:text-[20px]">
            Eduzen Solutions empowers students with practical, industry-focused learning designed
            for the real world. Through mentorship, modern technology training, workshops, and
            career-driven programs, we help bridge the gap between academics and professional
            success.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[70px] xl:gap-y-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
