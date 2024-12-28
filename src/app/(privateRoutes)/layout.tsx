import { Header } from './components/Header'
import { NavBarMenu } from './components/NavBarMenu'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-2  h-screen  2xl:container mx-auto">
      <div className="flex gap-2 w-ful md:h-full items-start">
        <NavBarMenu />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </main>
  )
}
