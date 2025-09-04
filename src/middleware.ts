import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookiesKeys } from "./utils/local-storage-keys";

export function middleware(request: NextRequest) {
  // Pegando o token do cookie
  const token = request.cookies.get(cookiesKeys.accessToken)?.value;

  const rootPath = "/";
  const dashboardPath = "/inventory/dashboard";
  const currentPath = request.nextUrl.pathname;

  const isAuthenticated = Boolean(token);

  // Usuário não autenticado
  if (!isAuthenticated && currentPath !== rootPath) {
    return NextResponse.redirect(new URL(rootPath, request.url));
  }

  // Usuário autenticado e no caminho raiz
  if (isAuthenticated && currentPath === rootPath) {
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/inventory/:path*"],
};
