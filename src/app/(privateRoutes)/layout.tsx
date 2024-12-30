import { Header } from './components/Header'
import { NavBarMenu } from './components/NavBarMenu'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3  h-screen  2xl:container mx-auto">
      <div className="flex gap-2 w-ful md:h-full items-start">
        <NavBarMenu />
        <div className="w-full">
          <Header />
          <main className="hidden md:block">{children}</main>
        </div>
      </div>
      <main className="md:hidden">{children}</main>
    </div>
  )
}
// import { Header } from './components/Header'
// import { NavBarMenu } from './components/NavBarMenu'

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <main className="p-2  h-screen  2xl:container mx-auto">
//       <div className="flex gap-2 w-ful md:h-full items-start">
//         <NavBarMenu />
//         <div className="w-full bg-red-500">
//           <Header />
//           {children}
//         </div>
//       </div>
//     </main>
//   )
// }
