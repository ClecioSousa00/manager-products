import { z } from 'zod'

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Informe um Email válido.' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
})

export type LoginFormSchemaProps = z.infer<typeof LoginFormSchema>

export const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'O userName deve ter no mínimo 3 caracteres' }),
    email: z.string().email({ message: 'Informe um Email válido.' }),
    password: z
      .string()
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas devem ser iguais',
  })

export type RegisterFormSchemaProps = z.infer<typeof RegisterFormSchema>
