import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  titleTable: string
  children: ReactNode
  path: string
}

export const ContainerTableDashboard = ({
  titleTable,
  path,
  children,
}: Props) => {
  return (
    <div className="w-full p-3 border border-input rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm  font-bold">{titleTable}</h3>
        <Link href={path} className="text-xs text-blue-dark capitalize">
          ver todos
        </Link>
      </div>
      <Separator className="my-4" />
      {children}
    </div>
  )
}
