import { zodResolver } from "@hookform/resolvers/zod";

import { Eye, EyeOff, Mail } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { colors } from "@/styles/colors";
import { ErrorMessage } from "../../ErrorMessage";
import { ContainerForm } from "../ContainerForm";
import { LoginFormSchema, type LoginFormSchemaProps } from "./schema";

type Props = {
  isActive: boolean;
};

export const Login = ({ isActive }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaProps>({
    resolver: zodResolver(LoginFormSchema),
  });

  const handleForm = (dataForm: LoginFormSchemaProps) => {
    console.log(dataForm);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <ContainerForm
      className={isActive ? "right-1/2" : ""}
      onSubmit={handleSubmit(handleForm)}
      textLogin="Entrar"
    >
      <div>
        <Input
          {...register("email")}
          className="placeholder:text-gray-light"
          icon={<Mail color={colors["gray-light"]} size={20} />}
          placeholder="Email"
        />
        {errors.email?.message && (
          <ErrorMessage errorMessage={errors.email.message} />
        )}
      </div>
      <div>
        <Input
          {...register("password")}
          className="placeholder:text-gray-light"
          handleClickIcon={handleShowPassword}
          icon={
            isShowPassword ? (
              <EyeOff color={colors["gray-light"]} size={20} />
            ) : (
              <Eye color={colors["gray-light"]} size={20} />
            )
          }
          placeholder="Senha"
          type={`${isShowPassword ? "text" : "password"}`}
        />
        {errors.password?.message && (
          <ErrorMessage errorMessage={errors.password.message} />
        )}
      </div>

      <Link
        className="my-3 block font-bold text-blue-dark text-sm capitalize"
        href="/inventory/dashboard"
      >
        Esqueceu sua senha?
      </Link>
    </ContainerForm>
  );
};
