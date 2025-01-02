import { useState } from 'react'

import * as DialogUi from '@/components/ui/dialog'
import * as FormUi from '@/components/ui/form'
import { DualRangeSlider } from '@/components/ui/dual-range-slider'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { IconFilter } from '@/iconsSvg/IconFilter'

import { optionsCategory } from '../TableProducts/optionsCategory'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CheckboxWithLabel } from '../CheckboxWithLabel'

const FormSchema = z.object({
  items: z.array(z.string()).optional(),
})

export const FormFilter = () => {
  const [pricesSlider, setPricesSlider] = useState([0, 10000])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  })

  const onSubmit = (checkboxesData: z.infer<typeof FormSchema>) => {
    console.log(checkboxesData)
    console.log(pricesSlider)
  }

  return (
    <DialogUi.Dialog>
      <DialogUi.DialogTrigger asChild>
        <Button variant={'outline'}>
          <IconFilter />
          <span className="hidden md:block" title="Filtro">
            Filtro
          </span>
        </Button>
      </DialogUi.DialogTrigger>
      <DialogUi.DialogContent className="max-w-80 w-full" aria-describedby="">
        <DialogUi.DialogHeader>
          <DialogUi.DialogTitle>Filtros</DialogUi.DialogTitle>
        </DialogUi.DialogHeader>
        <div className="h-full">
          <Separator />
          <p className="font-bold text-xs text-gray-light my-4">Categoria</p>

          <FormUi.Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormUi.FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormUi.FormItem>
                    {optionsCategory.map((item) => (
                      <FormUi.FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          const currentValues = field.value ?? []
                          return (
                            <FormUi.FormItem
                              key={item.id}
                              // className="flex flex-row items-center space-x-2 space-y-0"
                            >
                              <FormUi.FormControl>
                                <CheckboxWithLabel
                                  id={item.id}
                                  label={item.label}
                                  checked={currentValues.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    field.onChange(
                                      checked
                                        ? [...currentValues, item.id]
                                        : currentValues.filter(
                                            (value) => value !== item.id,
                                          ),
                                    )
                                  }}
                                />
                              </FormUi.FormControl>
                              {/* <FormUi.FormLabel className="text-xs font-medium">
                                {item.label}
                              </FormUi.FormLabel> */}
                            </FormUi.FormItem>
                          )
                        }}
                      />
                    ))}
                    <FormUi.FormMessage />
                  </FormUi.FormItem>
                )}
              />
              <p className="font-bold mt-4 text-xs mb-8 text-gray-light">
                Preço
              </p>

              <DualRangeSlider
                label={(priceSlider) => priceSlider}
                value={pricesSlider}
                onValueChange={setPricesSlider}
                min={0}
                max={10000}
                step={1}
              />
              <div className="flex items-center justify-center gap-2 mt-4">
                <DialogUi.DialogClose asChild>
                  <Button className="w-full" variant={'outline'}>
                    Cancelar
                  </Button>
                </DialogUi.DialogClose>

                <DialogUi.DialogClose asChild>
                  <Button className="w-full" type="submit">
                    Aplicar
                  </Button>
                </DialogUi.DialogClose>
              </div>
            </form>
          </FormUi.Form>
        </div>
      </DialogUi.DialogContent>
    </DialogUi.Dialog>
  )
}

// import { useState } from 'react'
// import * as DialogUi from '@/components/ui/dialog'
// import { DualRangeSlider } from '@/components/ui/dual-range-slider'
// import { IconFilter } from '@/iconsSvg/IconFilter'
// import { CheckboxWithLabel } from '../CheckboxWithLabel'

// import { Button } from '@/components/ui/button'
// import { Separator } from '@/components/ui/separator'
// import { optionsCategory } from '../TableProducts/optionsCategory'
// export const FormFilter = () => {
//   const [pricesSlider, setPricesSlider] = useState([0, 10000])

//   return (
//     <DialogUi.Dialog>
//       <DialogUi.DialogTrigger asChild>
//         <Button variant={'outline'}>
//           <IconFilter />
//           <span className="hidden md:block" title="Filtro">
//             Filtro
//           </span>
//         </Button>
//       </DialogUi.DialogTrigger>
//       <DialogUi.DialogContent className="max-w-80 w-full">
//         <DialogUi.DialogHeader>
//           <DialogUi.DialogTitle>Filtros</DialogUi.DialogTitle>
//         </DialogUi.DialogHeader>
//         <div className="h-full">
//           <Separator className="mb-4" />
//           <p className="font-bold text-xs text-gray-light">Categoria</p>

//           <div className="pl-2 mt-4 space-y-2">
//             {optionsCategory.map((category) => (
//               <CheckboxWithLabel
//                 key={category.id}
//                 id={category.id}
//                 label={category.label}
//               />
//             ))}
//           </div>
//           {/* <Separator className="my-4" /> */}
//           <p className="font-bold mt-4 text-xs mb-8 text-gray-light">Preço</p>

//           <DualRangeSlider
//             label={(priceSlider) => priceSlider}
//             value={pricesSlider}
//             onValueChange={setPricesSlider}
//             min={0}
//             max={10000}
//             step={1}
//           />
//         </div>
//         <div className="flex items-center justify-center gap-2">
//           <Button className="w-full" variant={'outline'}>
//             Cancelar
//           </Button>
//           <Button className="w-full">Aplicar</Button>
//         </div>
//       </DialogUi.DialogContent>
//     </DialogUi.Dialog>
//   )
// }
