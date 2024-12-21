import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type Props = {
  active?: boolean
  children: ReactNode
} & LinkProps

export const LinkNavBarMenu = ({
  active = false,
  children,
  ...props
}: Props) => {
  return (
    <Link
      className={cn(
        'flex gap-2 items-center pl-3 py-2 rounded-r-lg transition-all duration-150',
        active
          ? 'bg-blue-link border-l-2 border-l-blue-dark text-blue-dark font-bold '
          : 'hover:bg-blue-link/65 hover:border-l-2 hover:border-l-blue-dark/65 hover:text-blue-dark/65 hover:-translate-y-1',
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
