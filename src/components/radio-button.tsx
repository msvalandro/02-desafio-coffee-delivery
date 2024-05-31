import * as RadioGroup from '@radix-ui/react-radio-group'
import { PropsWithChildren } from 'react'

interface RadioButtonProps extends PropsWithChildren {
  value: string
}

export function RadioButton({ children, value }: RadioButtonProps) {
  return (
    <RadioGroup.Item
      value={value}
      className="flex h-[51px] flex-1 items-center justify-center rounded-md bg-base-button px-4 text-xs font-normal uppercase text-base-text"
    >
      {children}
    </RadioGroup.Item>
  )
}
