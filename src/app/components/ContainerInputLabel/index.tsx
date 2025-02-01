import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const ContainerInputLabel = ({
  children,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      {children}
    </div>
  )
}
