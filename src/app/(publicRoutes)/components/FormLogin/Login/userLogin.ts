import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { AuthUsrService } from "@/services/auth";
import { getErrorMessage } from "@/utils/get-error-message";
import { LoginFormSchema, type LoginFormSchemaProps } from "./schema";

export const UseLogin = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaProps>({
    resolver: zodResolver(LoginFormSchema),
  });
  const router = useRouter();

  const handleForm = async (dataForm: LoginFormSchemaProps) => {
    setIsLoading((prevState) => !prevState);
    const { email, password } = dataForm;

    try {
      await AuthUsrService.authUser({
        email,
        password,
      });
      router.push("/inventory/dashboard");
    } catch (error) {
      toast.error("Credenciais inválidas.", {
        description: getErrorMessage(error) ?? "Tente Novamente Mais Tarde.",
        position: "top-left",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return {
    isLoading,
    register,
    handleSubmit,
    errors,
    handleForm,
    handleShowPassword,
    isShowPassword,
  };
};
