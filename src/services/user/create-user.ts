import { baseUrl } from "../baseUrl";
import { CreateUserRequest } from "../types/user/create-user-request";


export const createUser = async (props: CreateUserRequest) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(props),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new Error(errorData?.message || 'Erro ao criar usuário')
  }

  return response.json()
}
