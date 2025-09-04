import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { UserService } from "@/services/user";
import { getErrorMessage } from "@/utils/get-error-message";
import { RegisterFormSchema, type RegisterFormSchemaProps } from "./schema";

type Props = {
  handleSwitchLogin: () => void;
};

export const UseRegister = ({ handleSwitchLogin }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm<RegisterFormSchemaProps>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const handleForm = async (dataForm: RegisterFormSchemaProps) => {
    setIsLoading((prevState) => !prevState);
    const { email, password, username } = dataForm;
    try {
      await UserService.createUser({ email, password, username });
      showToast(true);
      reset();
      handleSwitchLogin();
    } catch (error: unknown) {
      showToast(false, getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (success: boolean, message?: string) => {
    if (success) {
      toast("Conta criada com sucesso.", {
        position: "top-left",
      });
      return;
    }

    toast.error("Algo deu Errado.", {
      description: message ?? "Tente Novamente Mais Tarde.",
      position: "top-left",
    });
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return {
    register,
    handleSubmit,
    errors,
    handleForm,
    handleShowPassword,
    isShowPassword,
    isLoading,
  };
};
