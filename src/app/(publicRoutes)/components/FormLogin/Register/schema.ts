import { z } from "zod";

const MIN_USERNAME_CHARACTERS = 3;
const MIN_PASSWORD_LENGTH = 8;

export const RegisterFormSchema = z
  .object({
    username: z.string().min(MIN_USERNAME_CHARACTERS, {
      message: "O username deve ter no mínimo 3 caracteres",
    }),
    email: z.string().email({ message: "Informe um Email válido." }),
    password: z.string().min(MIN_PASSWORD_LENGTH, {
      message: "A senha deve ter no mínimo 8 caracteres.",
    }),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas devem ser iguais",
  });

export type RegisterFormSchemaProps = z.infer<typeof RegisterFormSchema>;
