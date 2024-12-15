import { z } from 'zod'

export const FormSchemaSignup = z
  .object({
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

export type FormSchemaSignupProps = z.infer<typeof FormSchemaSignup>
