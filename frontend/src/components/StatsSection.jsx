import { impactStats } from '../data/impact'
import { sectionCopy } from '../data/sections'
import Card from './ui/Card'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

function StatCard({ item }) {
  return (
    <Card className="rounded-[8px] border border-white bg-black p-5 md:p-7 lg:p-[36px]">
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
    </Card>
  )
}

export default function StatsSection() {
  return (
    <section id="impact" className="px-5 py-16 md:px-10 md:py-20 lg:px-[35px] lg:py-[80px]">
      <Container className="flex max-w-[1254px] flex-col items-center gap-12 lg:gap-[62px]">
        <SectionHeading
          className="max-w-[1104px] text-center"
          title={
            <>
            The <span className="text-[#ffc300]">Impact</span> We Have{' '}
            <span className="text-[#ffc300]">Made</span>
            </>
          }
          titleClassName="text-4xl leading-[1.2] text-[#f3f4f6] md:text-5xl md:leading-[48px]"
          description={sectionCopy.programsDescription}
          descriptionClassName="mx-auto mt-6 max-w-[1180px] text-base font-semibold leading-7 text-[#d1d5db] md:mt-8 md:text-[20px]"
        />

        <div className="flex w-full flex-col gap-8 lg:gap-[50px]">
          {impactStats.map((item) => (
            <StatCard key={item.value} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
