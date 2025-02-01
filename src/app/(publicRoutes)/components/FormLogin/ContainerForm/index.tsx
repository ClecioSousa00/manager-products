import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  textLogin: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const ContainerForm = ({
  textLogin,
  children,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        'absolute right-0 w-1/2 h-full bg-white flex items-center text-center text-[#333] p-10 z-10 transition-all duration-600 ease-in-out delay-1200',
        className,
      )}
      {...props}
    >
      <form action="#" className="w-full space-y-3">
        <h1 className="text-3xl font-extrabold mb-4">{textLogin}</h1>
        {children}
        <Button type="submit" className="w-full">
          {textLogin}
        </Button>
      </form>
    </div>
  )
}
