'use client'

import { Search } from 'lucide-react'

import { colors } from '@/styles/colors'

import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import { ContainerTable } from '../Table/ContainerTable'
import { TableContent } from '../Table/TableContent'
import { FormFilter } from '../FormFilter'
import { FormAddProduct } from '../FormAddProduct'

export const TableProducts = () => {
  return (
    <ContainerTable>
      <div className="flex items-center justify-between gap-2">
        <Input
          className="h-10 w-full max-w-80 text-sm"
          placeholder="Buscar Produto"
          icon={<Search width={18} color={colors['gray-dark']} />}
          handleClickIcon={() => console.log('search')}
        />
        <div className="space-x-2 flex items-center">
          <FormAddProduct />
          <FormFilter />
        </div>
      </div>
      <Separator className="my-4" />
      <TableContent hasEditTable />
    </ContainerTable>
  )
}
