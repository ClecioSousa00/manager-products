'use client'
import { ReactNode } from 'react'

import * as SheetUi from '@/components/ui/sheet'
import * as SelectUi from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { optionsCategory } from '../TableProducts/optionsCategory'
import { ContainerInputLabel } from '@/app/components/ContainerInputLabel'

type Props = {
  children: ReactNode
}

export const FormAddProduct = ({ children }: Props) => {
  const handleSelectCategory = (category: string) => {
    console.log(category)
  }
  return (
    <SheetUi.Sheet>
      <SheetUi.SheetTrigger asChild>{children}</SheetUi.SheetTrigger>
      <SheetUi.SheetContent className="w-[90%] md:max-w-[420px] h-full px-0">
        <SheetUi.SheetHeader>
          <SheetUi.SheetTitle className="text-left pl-5">
            Adicionar Novo Produto
          </SheetUi.SheetTitle>
        </SheetUi.SheetHeader>
        <div className="h-full flex flex-col justify-between pt-4">
          <form action="" className=" px-5 flex flex-col  gap-4 ">
            <div className="flex flex-col gap-2 ">
              <Label htmlFor="category">
                Categoria
                <span className="text-danger"> *</span>
              </Label>
              <SelectUi.Select onValueChange={handleSelectCategory}>
                <SelectUi.SelectTrigger className="w-full ">
                  <SelectUi.SelectValue placeholder="Selecione uma categoria"></SelectUi.SelectValue>
                </SelectUi.SelectTrigger>
                <SelectUi.SelectContent>
                  {optionsCategory.map((category) => (
                    <SelectUi.SelectItem key={category.id} value={category.id}>
                      {category.label}
                    </SelectUi.SelectItem>
                  ))}
                </SelectUi.SelectContent>
              </SelectUi.Select>
            </div>

            <div className="flex gap-2">
              <ContainerInputLabel className="w-full">
                <Label htmlFor="nameProduct">
                  Nome do Produto
                  <span className="text-danger"> *</span>
                </Label>
                <Input id="nameProduct" placeholder="Nome" />
              </ContainerInputLabel>
              <ContainerInputLabel className="w-full">
                <Label htmlFor="date">
                  Data
                  <span className="text-danger"> *</span>
                </Label>
                <Input id="date" type={'date'} />
              </ContainerInputLabel>
            </div>
            <ContainerInputLabel>
              <Label htmlFor="picture">Imagem</Label>
              <Input
                id="picture"
                type="file"
                className=" pl-1 py-0 pt-[5px] -mt-[3px]  px-0 "
              />
            </ContainerInputLabel>

            <div className="flex gap-2">
              <ContainerInputLabel>
                <Label htmlFor="amount">
                  Quantidade
                  <span className="text-danger"> *</span>
                </Label>
                <Input id="amount" type="number" min={0} placeholder="0" />
              </ContainerInputLabel>
              <ContainerInputLabel>
                <Label htmlFor="price">
                  Preço
                  <span className="text-danger"> *</span>
                </Label>
                <Input id="price" placeholder="0,00" />
              </ContainerInputLabel>
            </div>
          </form>
          <div className="flex  items-center justify-center shadow-2xl shadow-black/55 gap-2 py-6">
            <SheetUi.SheetClose asChild>
              <Button variant={'outline'}>Cancelar</Button>
            </SheetUi.SheetClose>
            <Button>Adicionar</Button>
          </div>
        </div>
      </SheetUi.SheetContent>
    </SheetUi.Sheet>
  )
}
