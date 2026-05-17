const services = [
  {
    title: 'Industry Skills',
    description:
      'Project-based learning focusing on modern tech stacks and frameworks demanded by top-tier organizations.',
    icon: '../industry_skills.png',
  },
  {
    title: 'Social Impact',
    description:
      'Executing high-value initiatives that channel resources into skill development and employability for underserved communities.',
    icon: '../social_impact.png',
  },
  {
    title: 'Guided Admissions',
    description:
      'Streamlined college selection and application support to secure placements in premium, career-aligned institutions.',
    icon: '../guided_admission.png',
  },
  {
    title: 'Career Roadmapping',
    description:
      'Personalized blueprints to identify core strengths and map a definitive strategy for long-term success.',
    icon: '../career_roadmap.png',
  },
  {
    title: 'Corporate Placements',
    description:
      'Direct access to exclusive internships and full-time roles through our premium hiring partner network.',
    icon: '../corporate_placements.png',
  },
  {
    title: 'Campus Partnerships',
    description:
      'Integrating industry-led upskilling programs directly into campuses to improve student corporate readiness.',
    icon: '../campus_parternships.png',
  },
  {
    title: 'Research & Consulting',
    description:
      'Data-backed advisory and capability-building tracks for institutions focused on measurable learner outcomes.',
    icon: '../research_consulting.png',
  },
  {
    title: 'Expert Mentorship',
    description:
      'Structured guidance from seasoned practitioners to accelerate clarity, confidence, and execution.',
    icon: '../expert_mentorship.png',
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
