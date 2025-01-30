// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   const userAuthenticate = false

//   const pathNameSign = new URL('/', request.url)
//   const pathNameDashboard = new URL('/inventory/dashboard', request.url)
//   const hasPathNameSign = request.nextUrl.pathname === '/'

//   if (!userAuthenticate) {
//     if (hasPathNameSign) {
//       return NextResponse.next()
//     }
//     return NextResponse.redirect(pathNameSign)
//   }

//   if (hasPathNameSign) {
//     return NextResponse.redirect(pathNameDashboard)
//   }
// }

// export const config = {
//   matcher: ['/', '/inventory/:path*'],
// }
//= ===========
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

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const userAuthenticate = true

//   const pathNameSign = new URL('/sign', request.url)
//   const pathNameDashboard = new URL('/inventory/dashboard', request.url)

//   const isRootPath = request.nextUrl.pathname === '/'

//   if (!userAuthenticate) {
//     if (isRootPath) {
//       return NextResponse.redirect(pathNameSign)
//     }
//     return NextResponse.redirect(pathNameSign)
//   }

//   if (isRootPath) {
//     return NextResponse.redirect(pathNameDashboard)
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/', '/inventory/:path*'],
// }
