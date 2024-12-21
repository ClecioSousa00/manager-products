import { NavBarMenu } from './components/NavBarMenu'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-2 flex h-screen items-start">
      <NavBarMenu />
      {children}
    </main>
  )
}
