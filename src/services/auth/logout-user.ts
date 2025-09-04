"use server";

import { cookies } from "next/headers";
import { cookiesKeys } from "@/utils/local-storage-keys";

export const logoutUser = async () => {
  await cookies().set({
    name: cookiesKeys.accessToken,
    value: "",
    path: "/",
    httpOnly: true,
    maxAge: 0,
  });
};
