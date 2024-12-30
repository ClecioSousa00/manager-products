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

import ImageProduct from './img-monitor.png'

const itemsProductsTable = [
  {
    name: 'monitor',
    image: ImageProduct,
    price: '1.099,99',
    quantity: 1,
  },
  {
    name: 'monitor 2',
    image: ImageProduct,
    price: '1.099,99',
    quantity: 2,
  },
  {
    name: 'monitor 3',
    image: ImageProduct,
    price: '1.099,99',
    quantity: 3,
  },
  {
    name: 'monitor 4',
    image: ImageProduct,
    price: '1.099,99',
    quantity: 4,
  },
]

const itemsTableHeader = [
  {
    title: 'Nome',
  },
  {
    title: 'Imagem',
  },
  {
    title: 'Preço',
  },
  {
    title: 'Qts.',
  },
]

export const TableProducts = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {itemsTableHeader.map((item, index) => (
            <TableHead
              key={item.title}
              className={cn(
                'bg-input text-gray-dark text-xs md:h-14',
                index === itemsProductsTable.length - 1
                  ? ' w-4 text-right '
                  : '',
              )}
            >
              {item.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {itemsProductsTable.map((product, indexProduct) => (
          <TableRow key={indexProduct} className="text-xs capitalize">
            <TableCell>{product.name}</TableCell>
            <TableCell className="p-1 ">
              <div className="w-16 h-16 aspect-square">
                <Image
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </TableCell>
            <TableCell>{`R$ ${product.price}`}</TableCell>
            <TableCell className="text-center">{product.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
