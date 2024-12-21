import Image from 'next/image'

import { Logo } from '@/iconsSvg/Logo'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center  justify-center min-h-screen w-screen flex-col">
      <div className="flex items-center gap-12  w-full justify-center flex-1 p-7 md:pr-24">
        <div className="hidden md:bg-blue-light md:rounded-2xl  md:flex md:items-center md:justify-center  md:max-h-[600px] md:max-w-[600px]">
          <Image
            src={'/imagen-Inventory.webp'}
            width={434}
            height={434}
            alt="Imagem de Inventário"
          />
        </div>
        <div className="flex-1 max-w-[445px]">
          <div className="flex items-center justify-center  gap-2">
            <Logo />
            <h1 className="text-2xl font-extrabold capitalize">inventory</h1>
          </div>
          <div className="w-full ">{children}</div>
        </div>
      </div>
    </main>
  )
}
