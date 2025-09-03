import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type Props = {
  title: string
  subtitle: string
  buttonName: string
  handleSwitchLogin: () => void
} & HTMLAttributes<HTMLDivElement>

export const InfosLogin = ({
  className,
  handleSwitchLogin,
  title,
  subtitle,
  buttonName,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        'absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-20 transition duration-1000 ease-in-out ',
        className,
      )}
      {...props}
    >
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="text-sm mt-1 mb-4">{subtitle}</p>
      <Button
        className="w-40 h-11 bg-transparent border-2 border-white shadow-none rounded-lg"
        onClick={handleSwitchLogin}
      >
        {buttonName}
      </Button>
    </div>
  )
}
