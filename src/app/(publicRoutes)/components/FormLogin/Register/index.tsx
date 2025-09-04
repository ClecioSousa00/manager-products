import { Eye, EyeOff, Mail, User } from "lucide-react";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { colors } from "@/styles/colors";
import { ErrorMessage } from "../../ErrorMessage";
import { ContainerForm } from "../ContainerForm";
import { UseRegister } from "./userRegister";

type Props = {
  isActive: boolean;
  handleSwitchLogin: () => void;
};
export const Register = ({ isActive, handleSwitchLogin }: Props) => {
  const {
    errors,
    handleForm,
    handleShowPassword,
    handleSubmit,
    register,
    isShowPassword,
    isLoading,
  } = UseRegister({ handleSwitchLogin });

  return (
    <ContainerForm
      className={
        isActive ? "visible right-1/2 opacity-100" : "invisible opacity-0"
      }
      isLoading={isLoading}
      onSubmit={handleSubmit(handleForm)}
      textLogin="Criar Conta"
    >
      <div>
        <Input
          {...register("username")}
          className="placeholder:text-gray-light"
          icon={<User color={colors["gray-light"]} size={20} />}
          placeholder="username"
        />
        {errors.username?.message && (
          <ErrorMessage errorMessage={errors.username.message} />
        )}
      </div>
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
        />{" "}
        {errors.password?.message && (
          <ErrorMessage errorMessage={errors.password.message} />
        )}
      </div>
      <div>
        <Input
          {...register("confirmPassword")}
          className="placeholder:text-gray-light"
          handleClickIcon={handleShowPassword}
          icon={
            isShowPassword ? (
              <EyeOff color={colors["gray-light"]} size={20} />
            ) : (
              <Eye color={colors["gray-light"]} size={20} />
            )
          }
          placeholder="Confirmar senha"
          type={`${isShowPassword ? "text" : "password"}`}
        />
        {errors.confirmPassword?.message && (
          <ErrorMessage errorMessage={errors.confirmPassword.message} />
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
