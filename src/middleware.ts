import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAuthenticate = false // Simulação de autenticação

  const rootPath = '/'
  const dashboardPath = '/inventory/dashboard'

  const currentPath = request.nextUrl.pathname

  // Usuário não autenticado
  if (!userAuthenticate) {
    if (currentPath !== rootPath) {
      // Redireciona para a página inicial se o usuário não estiver autenticado
      return NextResponse.redirect(new URL(rootPath, request.url))
    }
  }

  // Usuário autenticado e no caminho raiz
  if (userAuthenticate && currentPath === rootPath) {
    // Redireciona para o dashboard
    return NextResponse.redirect(new URL(dashboardPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/inventory/:path*'], // Define os caminhos onde o middleware será aplicado
}
