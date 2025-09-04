import { useState } from "react";

import { useForm } from "react-hook-form";
import { RegisterFormSchema, type RegisterFormSchemaProps } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { UserService } from "@/services/user";
import { toast } from "sonner";
import { getErrorMessage } from "@/services/utils/get-error-message";

type Props = {
	handleSwitchLogin: () => void;
};

export const UseRegister = ({ handleSwitchLogin }: Props) => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const {
		register,
		handleSubmit,

		formState: { errors },
		reset,
	} = useForm<RegisterFormSchemaProps>({
		resolver: zodResolver(RegisterFormSchema),
	});

	const handleForm = async (dataForm: RegisterFormSchemaProps) => {
		const { email, password, username } = dataForm;
		try {
			await UserService.createUser({ email, password, username });
			showToast(true);
			reset();
			handleSwitchLogin();
		} catch (err: unknown) {
			showToast(false, getErrorMessage(err));
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
	};
};
