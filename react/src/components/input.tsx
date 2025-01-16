import { ComponentPropsWithRef } from 'react'

import { cn } from '@/utils/cn'

interface InputProps extends ComponentPropsWithRef<'input'> {
  error?: string
  label: string
}

export function Input({ className, label, error, ...props }: InputProps) {
  return (
    <div className="w-full space-y-1 flex flex-col">
      <label 
        htmlFor={props.id}
        className="font-semibold text-sm"
      >
        {label}
      </label>

      <input 
        className={cn(
          'w-full h-10 px-3 py-1 text-sm rounded-md border border-zinc-800 bg-transparent disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />

      {error && (
        <span className="text-[13px] font-semibold text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}