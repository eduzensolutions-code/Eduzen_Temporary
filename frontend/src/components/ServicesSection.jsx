import { services } from '../data/services'
import { sectionCopy } from '../data/sections'
import Card from './ui/Card'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

function ServiceCard({ service }) {
  return (
    <Card className="group flex h-full min-h-[262px] flex-col items-center rounded-[6px] border border-[#f3f4f6] bg-black px-7 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#ffc300] hover:shadow-[0_14px_30px_rgba(255,195,0,0.12)]">
      <img src={service.icon} alt="" aria-hidden="true" className="mb-2 h-[61px] w-[61px]" />
      <h3 className="mb-4 text-[20px] font-semibold leading-7 text-[#ffc300]">{service.title}</h3>
      <p className="text-[14px] font-light leading-[22.75px] text-white/95">{service.description}</p>
    </Card>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="px-5 py-16 md:px-10 md:py-20 lg:px-8 lg:py-24">
      <Container className="max-w-[1249px]">
        <SectionHeading
          className="mx-auto mb-12 max-w-[1180px] text-center md:mb-16"
          title={
            <>
            Our <span className="font-bold text-[#ffc300] decoration-[#ffc300]">Services</span>
            </>
          }
          titleClassName="text-4xl font-normal leading-[1.2] text-[#f3f4f6] underline decoration-white underline-offset-4 md:text-5xl md:leading-[48px]"
          description={sectionCopy.programsDescription}
          descriptionClassName="mx-auto mt-5 text-base font-semibold leading-7 text-[#d1d5db] md:text-[20px]"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-[70px] xl:gap-y-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
