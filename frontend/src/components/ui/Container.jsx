export default function Container({ as: Component = 'div', className = '', children }) {
  return (
    <Component className={`mx-auto w-full ${className}`}>
      {children}
    </Component>
  )
}
