import Link from 'next/link'
import { ContainerTable } from '../../components/Table/ContainerTable'
import { TableContent } from '../../components/Table/TableContent'
import { Separator } from '@/components/ui/separator'
import { itemsProductsTable } from '../../components/Table/TableContent/productsTable'

export default function Page() {
  return (
    <section className="mt-10 ">
      <div className="space-y-4 md:flex md:items-center md:space-x-4 md:space-y-0">
        <ContainerTable>
          <div className="flex items-center justify-between">
            <h3 className="text-sm  font-bold">Lista de Produtos</h3>
            <Link
              href={'/inventory/products'}
              className="text-xs text-blue-dark capitalize"
            >
              ver todos
            </Link>
          </div>
          <Separator className="my-4" />
          <TableContent itemsProductsTable={itemsProductsTable.slice(0, 5)} />
        </ContainerTable>
        <ContainerTable>
          <div className="flex items-center justify-between">
            <h3 className="text-sm  font-bold">Vendas Recentes</h3>
            <Link
              href={'/inventory/sale-products'}
              className="text-xs text-blue-dark capitalize"
            >
              ver todos
            </Link>
          </div>
          <Separator className="my-4" />
          <TableContent itemsProductsTable={itemsProductsTable.slice(0, 5)} />
        </ContainerTable>
      </div>
      {/* <DatePicker /> */}
    </section>
  )
}
