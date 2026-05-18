export default function SectionHeading({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}) {
  return (
    <header className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </header>
  )
}
