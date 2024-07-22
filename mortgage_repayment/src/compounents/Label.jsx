export function Label({ children, htmlFor }) {
  return <label
    htmlFor={htmlFor}
    className='text-sm text-slate-500'
  >
    {children}
  </label>;
}
