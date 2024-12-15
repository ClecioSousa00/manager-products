import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
type Props = {
  label: string
} & HTMLAttributes<HTMLSpanElement>

export const Label = ({ label, className, ...props }: Props) => {
  return (
    <span
      className={cn('text-gray-dark text-sm capitalize font-bold', className)}
      {...props}
    >
      {label}
    </span>
  )
}
