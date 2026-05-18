const variants = {
  primary:
    'bg-[#ffc300] px-7 text-black shadow-[0_0_7.5px_rgba(212,175,55,0.3)] hover:bg-[#ffd23f] lg:px-8',
  secondary:
    'border border-[#ffc300] px-6 text-[#ffc300] hover:bg-[#ffc300] hover:text-black lg:px-[33px]',
}

export default function ButtonLink({ href, children, variant = 'primary', className = '', ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex h-[52px] items-center justify-center rounded-[8px] text-base font-bold transition-colors duration-200 lg:h-[58px] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
