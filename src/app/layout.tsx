import './globals.css'

import { Toaster } from '@/components/ui/toaster'

import { manrope } from '../Fonts/fonts'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory',
  description:
    'Gerencie os produtos da sua loja de forma prática e eficiente. Ferramenta completa para controle de estoque e cadastro de produtos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${manrope.variable} antialiased font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
