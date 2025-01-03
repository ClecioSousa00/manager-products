'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
import * as TableUi from '@/components/ui/table'
import * as PaginationUi from '@/components/ui/pagination'
import * as DialogUi from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

import { ButtonTable } from '../../ButtonTable'

import { itemsProductsTable } from './productsTable'
// import { useState } from 'react'

import { ChevronsUpDown } from 'lucide-react'

import { IconEdit } from '@/iconsSvg/IconEdit'
import { IconDelete } from '@/iconsSvg/IconDelete'
import { useToast } from '@/hooks/use-toast'
import { FormAddProduct } from '../../FormAddProduct'

type Props = {
  hasEditTable?: boolean
}

export const TableContent = ({ hasEditTable = false }: Props) => {
  const { toast } = useToast()
  // const [quantityProductsPerPage, setQuantityProductsPerPage] = useState(10)

  // const handleSelectShowProducts = (option: string) => {
  //   setQuantityProductsPerPage(parseInt(option))
  // }

  const handleDeleteProduct = () => {
    const hasExcludesProduct = false
    showToast(hasExcludesProduct)
  }

  const showToast = (success: boolean) => {
    if (success) {
      toast({
        description: 'Produto Deletado com Sucesso.',
      })
      return
    }
    toast({
      variant: 'destructive',
      title: 'Algo deu Errado.',
      description: 'Tente Novamente Mais Tarde.',
    })
  }

  return (
    <>
      <TableUi.Table>
        <TableUi.TableHeader>
          <TableUi.TableRow>
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
            <TableUi.TableHead className="bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              Nome
            </TableUi.TableHead>

            <TableUi.TableHead className="bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              Imagem
            </TableUi.TableHead>

            <TableUi.TableHead className="bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              Categoria
            </TableUi.TableHead>

            <TableUi.TableHead className="  bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              <div className="flex gap-1">
                Preço
                <ChevronsUpDown className="cursor-pointer " size={14} />
              </div>
            </TableUi.TableHead>

            <TableUi.TableHead className=" bg-input text-gray-dark  text-xs md:h-14 w-[250px] ">
              <div className="flex gap-1">
                Quantidade
                <ChevronsUpDown className="cursor-pointer " size={14} />
              </div>
            </TableUi.TableHead>

            {hasEditTable && (
              <TableUi.TableHead
                className={'bg-input text-gray-dark w-[80px] text-xs md:h-14'}
              >
                Ações
              </TableUi.TableHead>
            )}
          </TableUi.TableRow>
        </TableUi.TableHeader>
        <TableUi.TableBody>
          {itemsProductsTable.map((product) => (
            <TableUi.TableRow
              key={product.id}
              className="text-xs capitalize text-nowrap "
            >
              <TableUi.TableCell>{product.name}</TableUi.TableCell>
              <TableUi.TableCell className="p-1 ">
                <div className="w-16 h-16 aspect-square">
                  <Image
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                    priority
                  />
                </div>
              </TableUi.TableCell>
              <TableUi.TableCell>{product.category}</TableUi.TableCell>
              <TableUi.TableCell>{`R$ ${product.price}`}</TableUi.TableCell>
              <TableUi.TableCell
                className={cn(hasEditTable ? 'text-left' : 'text-center ')}
              >
                {product.quantity}
              </TableUi.TableCell>
              {hasEditTable && (
                <TableUi.TableCell>
                  <div className="flex items-center gap-1 justify-end">
                    <FormAddProduct>
                      <ButtonTable className="bg-blue-dark hover:scale-105 transition-all">
                        <IconEdit />
                      </ButtonTable>
                    </FormAddProduct>

                    <DialogUi.Dialog>
                      <DialogUi.DialogTrigger asChild>
                        <ButtonTable className="bg-danger hover:scale-105 transition-all">
                          <IconDelete />
                        </ButtonTable>
                      </DialogUi.DialogTrigger>
                      <DialogUi.DialogContent className="max-w-80 w-full">
                        <DialogUi.DialogHeader>
                          <DialogUi.DialogTitle>
                            Excluir Produto
                          </DialogUi.DialogTitle>
                        </DialogUi.DialogHeader>
                        <Separator className="" />
                        <DialogUi.DialogDescription>
                          Ao excluir este produto, ele será removido
                          permanentemente do sistema. Confirma a exclusão?
                        </DialogUi.DialogDescription>

                        <div>
                          <div className="flex items-center justify-center gap-2 mt-4">
                            <DialogUi.DialogClose asChild>
                              <Button className="w-full" variant={'outline'}>
                                Cancelar
                              </Button>
                            </DialogUi.DialogClose>

                            <DialogUi.DialogClose asChild>
                              <Button
                                className="w-full"
                                type="submit"
                                variant={'destructive'}
                                onClick={handleDeleteProduct}
                              >
                                Excluir
                              </Button>
                            </DialogUi.DialogClose>
                          </div>
                        </div>
                      </DialogUi.DialogContent>
                    </DialogUi.Dialog>
                  </div>
                </TableUi.TableCell>
              )}
            </TableUi.TableRow>
          ))}
        </TableUi.TableBody>
      </TableUi.Table>
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
            <PaginationUi.Pagination className="w-full md:w-auto">
              <PaginationUi.PaginationContent>
                <PaginationUi.PaginationItem className="">
                  <PaginationUi.PaginationPrevious href="#" />
                </PaginationUi.PaginationItem>
                <PaginationUi.PaginationItem>
                  <PaginationUi.PaginationLink href="#">
                    1
                  </PaginationUi.PaginationLink>
                </PaginationUi.PaginationItem>
                <PaginationUi.PaginationItem>
                  <PaginationUi.PaginationLink href="#">
                    2
                  </PaginationUi.PaginationLink>
                </PaginationUi.PaginationItem>
                <PaginationUi.PaginationItem>
                  <PaginationUi.PaginationEllipsis />
                </PaginationUi.PaginationItem>
                <PaginationUi.PaginationItem>
                  <PaginationUi.PaginationNext href="#" />
                </PaginationUi.PaginationItem>
              </PaginationUi.PaginationContent>
            </PaginationUi.Pagination>
          </div>
        </>
      )}
    </>
  )
}
