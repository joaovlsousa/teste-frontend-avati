import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(
        'w-full p-4 rounded-lg bg-[#e9f035] inline-flex border-none justify-center text-base font-semibold disabled:cursor-not-allowed disabled:opacity-80',
        className
      )}
      {...props}
    />
  )
}