import { z } from 'zod'

export const FormSchemaSign = z.object({
  email: z.string().email({ message: 'Informe um Email válido.' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' }),
})

export type FormSchemaSignProps = z.infer<typeof FormSchemaSign>
