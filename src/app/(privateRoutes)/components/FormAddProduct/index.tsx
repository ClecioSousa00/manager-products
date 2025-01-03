import { ReactNode } from 'react'

import * as SheetUi from '@/components/ui/sheet'
import * as SelectUi from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { optionsCategory } from '../TableProducts/optionsCategory'

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
              <Label
                htmlFor="category"
                className="text-xs text-left text-gray-light"
              >
                Categoria
                <span className="text-danger"> *</span>
              </Label>
              <SelectUi.Select onValueChange={handleSelectCategory}>
                <SelectUi.SelectTrigger className="w-full  text-gray-light">
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
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="nameProduct"
                className="text-xs text-left text-gray-light"
              >
                Nome
                <span className="text-danger"> *</span>
              </Label>
              <Input
                id="nameProduct"
                placeholder="Informe o nome do produto"
                className="text-sm text-gray-light placeholder:text-gray-light font-normal"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="picture"
                className="text-xs text-left text-gray-light"
              >
                Imagem
              </Label>
              <Input
                id="picture"
                type="file"
                className="file:text-gray-light pl-1 py-0 pt-[5px] -mt-[3px]  px-0 text-gray-light text-xs font-normal file:text-sm  file:font-normal"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="amount"
                className="text-xs text-left text-gray-light"
              >
                Quantidade
                <span className="text-danger"> *</span>
              </Label>
              <Input
                id="amount"
                placeholder="Informe a quantidade"
                className="text-sm text-gray-light placeholder:text-gray-light font-normal"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="price"
                className="text-xs text-left text-gray-light"
              >
                Preço
                <span className="text-danger"> *</span>
              </Label>
              <Input
                id="price"
                placeholder="Informe o preço do produto"
                className="text-sm text-gray-light placeholder:text-gray-light font-normal"
              />
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
