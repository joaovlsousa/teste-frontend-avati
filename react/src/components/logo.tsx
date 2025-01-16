import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type LogoProps = ComponentProps<'span'>

export function Logo({ className, ...props }: LogoProps) {
  return (
    <span 
      className={cn('font-semibold text-lg text-[#e9f035]', className)}
      {...props}
    >
      Avati
    </span>
  )
}