import { ContainerTableDashboard } from '../../components/ContainerTableDashboard'
import { TableProducts } from '../../components/TableProducts'

export default function Page() {
  return (
    <section className="mt-10 ">
      <div className="space-y-4 md:flex md:items-center md:space-x-4 md:space-y-0">
        <ContainerTableDashboard
          titleTable="Lista de Produtos"
          path="/inventory/products"
        >
          <TableProducts />
        </ContainerTableDashboard>
        <ContainerTableDashboard
          titleTable="Vendas Recentes"
          path="/inventory/sale-products"
        >
          <TableProducts />
        </ContainerTableDashboard>
      </div>
    </section>
  )
}
