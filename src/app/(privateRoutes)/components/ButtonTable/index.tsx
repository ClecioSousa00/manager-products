import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonTable = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        'rounded-lg w-7 h-7 flex items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
