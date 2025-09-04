import { z } from "zod";

const MIN_PASSWORD_LENGTH = 8;

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Informe um Email válido." }),
  password: z.string().min(MIN_PASSWORD_LENGTH, {
    message: "A senha deve ter no mínimo 8 caracteres.",
  }),
});

export type LoginFormSchemaProps = z.infer<typeof LoginFormSchema>;
