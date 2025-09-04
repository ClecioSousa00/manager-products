"use server";

import { cookies } from "next/headers";
import { cookiesKeys } from "@/utils/local-storage-keys";
import { baseUrl } from "../baseUrl";
import type { AuthUserRequest } from "../types/auth/auth-user-request";
import type { AuthUserResponse } from "../types/auth/auth-user-response";

export async function authUser(props: AuthUserRequest) {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(props),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Email ou Senha inválidos");
  }

  const data: AuthUserResponse = await response.json();

  cookies().set({
    name: cookiesKeys.accessToken,
    value: data.accessToken,
    httpOnly: true,
    path: "/",
  });
}
