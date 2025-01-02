'use client'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { ButtonTable } from '../../ButtonTable'

import { IconEdit } from '@/iconsSvg/IconEdit'
import { IconDelete } from '@/iconsSvg/IconDelete'
import { itemsProductsTable } from './productsTable'
// import { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { ChevronsUpDown } from 'lucide-react'

type Props = {
  hasEditTable?: boolean
}

export const TableContent = ({ hasEditTable = false }: Props) => {
  // const [quantityProductsPerPage, setQuantityProductsPerPage] = useState(10)

  // const handleSelectShowProducts = (option: string) => {
  //   setQuantityProductsPerPage(parseInt(option))
  // }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {/* {itemsTableHeader.map((item, index) => (
              <TableHead
                key={item.title}
                className={cn(
                  'bg-input text-gray-dark  text-xs md:h-14 w-[250px] ',
                  index === itemsTableHeader.length - 1 && !hasEditTable
                    ? 'text-right'
                    : '',
                )}
              >
                {item.title}
              </TableHead>
            ))} */}
            <TableHead className="bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              Nome
            </TableHead>

            <TableHead className="bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              Imagem
            </TableHead>

            <TableHead className="bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              Categoria
            </TableHead>

            <TableHead className="  bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              <div className="flex gap-1">
                Preço
                <ChevronsUpDown className="cursor-pointer " size={14} />
              </div>
            </TableHead>

            <TableHead className=" bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              <div className="flex gap-1">
                Quantidade
                <ChevronsUpDown className="cursor-pointer " size={14} />
              </div>
            </TableHead>

            {hasEditTable && (
              <TableHead
                className={'bg-input text-gray-dark w-[80px] text-xs md:h-14'}
              >
                Ações
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {itemsProductsTable.map((product) => (
            <TableRow
              key={product.id}
              className="text-xs capitalize text-nowrap "
            >
              <TableCell>{product.name}</TableCell>
              <TableCell className="p-1 ">
                <div className="w-16 h-16 aspect-square">
                  <Image
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                    priority
                  />
                </div>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{`R$ ${product.price}`}</TableCell>
              <TableCell
                className={cn(hasEditTable ? 'text-left' : 'text-center ')}
              >
                {product.quantity}
              </TableCell>
              {hasEditTable && (
                <TableCell>
                  <div className="flex items-center gap-1 justify-end">
                    <ButtonTable className="bg-blue-dark hover:scale-105 transition-all">
                      <IconEdit />
                    </ButtonTable>
                    <ButtonTable className="bg-danger hover:scale-105 transition-all">
                      <IconDelete />
                    </ButtonTable>
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {hasEditTable && (
        <>
          <Separator />
          <div className="flex flex-wrap items-center justify-between w-full  mt-3">
            {/* <div className="flex items-center  gap-2">
            <p className="text-sm text-gray-light font-light">Mostrando</p>
            <Select onValueChange={handleSelectShowProducts}>
              <SelectTrigger className="w-16 h-11">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
            <p className="text-sm text-gray-light text-center font-light">
              Mostrando 20 de 50 Produtos
            </p>
            <Pagination className="w-full md:w-auto">
              <PaginationContent>
                <PaginationItem className="">
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}
    </>
  )
}
