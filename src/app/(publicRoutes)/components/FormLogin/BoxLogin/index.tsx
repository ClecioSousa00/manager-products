"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { InfosLogin } from "../InfosLogin";
import { Login } from "../Login";
import { Register } from "../Register";

export const BoxLogin = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSwitchLogin = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={cn(
        "before:-left-[250%] absolute h-full w-full before:absolute before:z-20 before:h-full before:w-[300%] before:rounded-[150px] before:bg-blue-dark before:transition-all before:duration-1800 before:ease-in-out before:content-['']",
        isActive ? "before:left-1/2" : ""
      )}
    >
      <Login isActive={isActive} />
      <Register handleSwitchLogin={handleSwitchLogin} isActive={isActive} />

      <InfosLogin
        buttonName="Criar Conta"
        className={cn(
          "left-0 delay-1200",
          isActive ? "-left-1/2 opacity-0 delay-600" : ""
        )}
        handleSwitchLogin={handleSwitchLogin}
        subtitle="Não possui uma conta?"
        title="Bem Vindo de Volta!"
      />

      <InfosLogin
        buttonName="Entrar"
        className={cn(
          "-right-1/2 opacity-0 delay-600",
          isActive ? "right-0 opacity-100 delay-1200" : ""
        )}
        handleSwitchLogin={handleSwitchLogin}
        subtitle="Já possui uma conta?"
        title="Olá, Bem Vindo!"
      />
    </div>
  );
};
