'use client'

import { Input } from '@/components/ui/input'
import { colors } from '@/styles/colors'
import { Search } from 'lucide-react'

export const InputSearch = () => {
  return (
    <Input
      className="h-8 text-sm"
      placeholder="Buscar Produto"
      icon={<Search width={18} color={colors['gray-dark']} />}
      handleClickIcon={() => console.log('search')}
    />
  )
}
