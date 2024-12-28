import { colors } from '@/styles/colors'
import { ElementType } from 'react'

type Props = {
  icon: ElementType
  label: string
}

export const ItemDropdown = ({ icon: Icon, label }: Props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p>{label}</p> <Icon width={18} color={colors['gray-dark']} />
    </div>
  )
}
