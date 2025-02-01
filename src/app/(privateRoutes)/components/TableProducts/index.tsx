// 'use client'

import { Search } from 'lucide-react'

import { colors } from '@/styles/colors'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { ContainerTable } from '../Table/ContainerTable'
import { TableContent } from '../Table/TableContent'
import { FormFilter } from '../FormFilter'
import { FormAddProduct } from '../FormAddProduct'
import { itemsProductsTable } from '../Table/TableContent/productsTable'

import { IconPlus } from '@/iconsSvg/IconPlus'

export const TableProducts = () => {
  return (
    <ContainerTable>
      <div className="flex items-center justify-between gap-2">
        <Input
          className="h-10 w-full max-w-80 placeholder:text-gray-light"
          placeholder="Buscar Produto"
          icon={<Search width={18} color={colors['gray-dark']} />}
          // handleClickIcon={() => console.log('search')}
        />
        <div className="space-x-2 flex items-center">
          <FormAddProduct>
            <Button>
              <IconPlus />
              <span className="hidden md:block" title="Adicionar Produto">
                Adicionar Produto
              </span>
            </Button>
          </FormAddProduct>
          <FormFilter />
        </div>
      </div>
      <Separator className="my-4" />
      <TableContent hasEditTable itemsProductsTable={itemsProductsTable} />
    </ContainerTable>
  )
}
