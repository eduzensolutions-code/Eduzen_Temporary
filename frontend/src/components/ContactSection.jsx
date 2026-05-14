const contactCards = [
  {
    title: 'Mail Us',
    subtitle: "We're here to help.",
    value: 'info@eduzensolutions.in',
    href: 'mailto:info@eduzensolutions.in',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#e0a526]">
        <path
          fill="currentColor"
          d="M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 2v.51l-8 5.33-8-5.33V8h16ZM4 16V10.91l7.45 4.96a1 1 0 0 0 1.1 0L20 10.91V16H4Z"
        />
      </svg>
    ),
  },
  {
    title: 'Location',
    subtitle: 'Come Visit us',
    value: 'google.maps.com',
    href: 'https://google.maps.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#e0a526]">
        <path
          fill="currentColor"
          d="M12 2a7 7 0 0 0-7 7c0 5.01 6.25 12.29 6.51 12.59a.66.66 0 0 0 .98 0C12.75 21.29 19 14.01 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
        />
      </svg>
    ),
  },
  {
    title: 'Contact',
    subtitle: "We're here to help.",
    value: 'upcoming',
    href: '#contact',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#e0a526]">
        <path
          fill="currentColor"
          d="M17.52 14.39c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.15-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.7.3 1.24.49 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
        />
      </svg>
    ),
  },
]

function ContactCard({ card }) {
  return (
    <article className="w-full rounded-lg border border-white bg-[#141414] p-[25px]">
      <div className="flex items-start gap-[17px]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e0a526]/10">
          {card.icon}
        </div>
        <div>
          <h3 className="text-[20px] font-semibold leading-7 text-[#ffc300]">{card.title}</h3>
          <p className="text-sm leading-5 text-white">{card.subtitle}</p>
        </div>
      </div>
      <a
        href={card.href}
        className="mt-[17px] inline-block break-all text-[19.866px] font-medium leading-[29.798px] text-[#e0a526] transition-colors hover:text-[#ffc300] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
      >
        {card.value}
      </a>
    </article>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex w-full max-w-[1168px] flex-col items-center gap-12 md:gap-[68px]">
        <header className="w-full max-w-[768px] text-center">
          <h2 className="font-['Bebas_Neue'] text-[56px] leading-none tracking-[1.8px] md:text-[72px]">
            <span className="text-[#ffc300]">Contact </span>
            <span className="text-white">us</span>
          </h2>
          <p className="mt-6 text-lg leading-7 text-white md:text-[20px]">
            Let us know how we can help.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactCards.map((card) => (
            <ContactCard key={card.title} card={card} />
          ))}
        </div>

        <form
          className="w-full rounded-xl border border-white/25 bg-[#141414] p-6 md:p-8"
          aria-label="Contact us form"
        >
          <fieldset className="m-0 grid border-0 p-0 md:grid-cols-2 md:gap-5">
            <legend className="mb-5 text-left text-xl font-semibold text-[#ffc300]">
              Send a message
            </legend>

            <label className="mb-4 flex flex-col gap-2 md:mb-0">
              <span className="text-sm text-white/90">Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="h-12 rounded-lg border border-white/35 bg-black px-4 text-white placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
                placeholder="Your name"
              />
            </label>

            <label className="mb-4 flex flex-col gap-2 md:mb-0">
              <span className="text-sm text-white/90">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="h-12 rounded-lg border border-white/35 bg-black px-4 text-white placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
                placeholder="you@example.com"
              />
            </label>

            <label className="mb-4 flex flex-col gap-2 md:col-span-2 md:mb-0">
              <span className="text-sm text-white/90">Message</span>
              <textarea
                name="message"
                rows={4}
                className="min-h-32 rounded-lg border border-white/35 bg-black px-4 py-3 text-white placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300]"
                placeholder="Tell us what you need help with"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex h-12 items-center justify-center rounded-lg bg-[#ffc300] px-6 text-base font-semibold text-black transition-colors hover:bg-[#ffd23f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc300] md:col-span-2 md:mt-1 md:w-fit"
            >
              Send Message
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  )
}
