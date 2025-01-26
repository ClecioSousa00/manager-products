import { StaticImageData } from 'next/image'
import ImageProduct from './img-monitor.png'

export type ProductTable = {
  id: number
  name: string
  image: StaticImageData
  category: string
  price: string
  date: string
  quantity: number
}

export const itemsTableHeader = [
  {
    title: 'Nome',
  },
  {
    title: 'Imagem',
  },
  {
    title: 'Categoria',
  },
  {
    title: 'Preço',
  },
  {
    title: 'Quantidade',
  },
]

export const itemsProductsTable: ProductTable[] = [
  {
    id: 1,
    name: 'monitor',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '1.099,99',
    date: '01/01/2025',
    quantity: 1,
  },
  {
    id: 2,
    name: 'monitor 2',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '1.099,99',
    date: '01/01/2025',
    quantity: 2,
  },
  {
    id: 3,
    name: 'monitor 3',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '1.099,99',
    date: '01/01/2025',
    quantity: 3,
  },
  {
    id: 4,
    name: 'monitor 4',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '1.099,99',
    date: '01/01/2025',
    quantity: 4,
  },
  {
    id: 5,
    name: 'teclado',
    image: ImageProduct,
    category: 'Acessório',
    price: '199,99',
    date: '01/01/2025',
    quantity: 10,
  },
  {
    id: 6,
    name: 'mouse',
    image: ImageProduct,
    category: 'Acessório',
    price: '99,99',
    date: '01/01/2025',
    quantity: 15,
  },
  {
    id: 7,
    name: 'impressora',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '799,99',
    date: '01/01/2025',
    quantity: 5,
  },
  {
    id: 8,
    name: 'tablet',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '2.499,99',
    date: '01/01/2025',
    quantity: 3,
  },
  {
    id: 9,
    name: 'notebook',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '4.599,99',
    date: '01/01/2025',
    quantity: 8,
  },
  {
    id: 10,
    name: 'headset',
    image: ImageProduct,
    category: 'Acessório',
    price: '399,99',
    date: '01/01/2025',
    quantity: 12,
  },
  {
    id: 11,
    name: 'smartphone',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '3.299,99',
    date: '01/01/2025',
    quantity: 6,
  },
  {
    id: 12,
    name: 'caixa de som',
    image: ImageProduct,
    category: 'Acessório',
    price: '249,99',
    date: '01/01/2025',
    quantity: 20,
  },
  {
    id: 13,
    name: 'webcam',
    image: ImageProduct,
    category: 'Acessório',
    price: '149,99',
    date: '01/01/2025',
    quantity: 11,
  },
  {
    id: 14,
    name: 'roteador',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '329,99',
    date: '01/01/2025',
    quantity: 7,
  },
  {
    id: 15,
    name: 'carregador portátil',
    image: ImageProduct,
    category: 'Acessório',
    price: '199,99',
    date: '01/01/2025',
    quantity: 14,
  },
  {
    id: 16,
    name: 'cabos HDMI',
    image: ImageProduct,
    category: 'Acessório',
    price: '49,99',
    date: '01/01/2025',
    quantity: 30,
  },
  {
    id: 17,
    name: 'cadeira gamer',
    image: ImageProduct,
    category: 'Mobiliário',
    price: '1.499,99',
    date: '01/01/2025',
    quantity: 4,
  },
  {
    id: 18,
    name: 'monitor ultra-wide',
    image: ImageProduct,
    category: 'Eletrônico',
    price: '2.199,99',
    date: '01/01/2025',
    quantity: 2,
  },
  {
    id: 19,
    name: 'hub USB',
    image: ImageProduct,
    category: 'Acessório',
    price: '79,99',
    date: '01/01/2025',
    quantity: 25,
  },
  {
    id: 20,
    name: 'SSD externo',
    image: ImageProduct,
    category: 'Armazenamento',
    price: '599,99',
    date: '01/01/2025',
    quantity: 9,
  },
]
