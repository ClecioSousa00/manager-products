'use client'

import { Search } from 'lucide-react'

import { colors } from '@/styles/colors'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { IconPlus } from '@/iconsSvg/IconPlus'
import { IconFilter } from '@/iconsSvg/IconFilter'

import { ContainerTable } from '../Table/ContainerTable'
import { TableContent } from '../Table/TableContent'
import { Separator } from '@/components/ui/separator'

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
          <Button>
            <IconPlus />
            <span className="hidden md:block" title="Adicionar Produto">
              Adicionar Produto
            </span>
          </Button>
          <Button variant={'outline'}>
            <IconFilter />
            <span className="hidden md:block" title="Filtro">
              Filtro
            </span>
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <TableContent hasEditTable />
    </ContainerTable>
  )
}
