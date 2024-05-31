interface InputProps {
  placeholder: string
  width?: number
  block?: boolean
}

export function Input({ placeholder, width, block }: InputProps) {
  const widthClass = width ? `w-[${width}px]` : 'w-full'
  const displayClass = block ? 'block' : 'inline-block'

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`mb-2 h-[42px] rounded border border-base-button bg-base-input px-3 text-s placeholder-base-label ${widthClass} ${displayClass}`}
    />
  )
}
