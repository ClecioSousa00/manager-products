'use client'
import { useState } from 'react'

import { InfosLogin } from '../InfosLogin'
import { Login } from '../Login'
import { Register } from '../Register'
import { cn } from '@/lib/utils'

export const BoxLogin = () => {
  const [isActive, setIsActive] = useState(false)

  const handleLogin = async () => {
    setIsActive(!isActive)
  }
  return (
    <div
      className={cn(
        "absolute w-full h-full before:content-[''] before:absolute before:-left-[250%] before:w-[300%] before:h-full before:bg-blue-dark before:rounded-[150px] before:z-20 before:transition-all before:duration-1800 before:ease-in-out",
        isActive ? 'before:left-1/2' : '',
      )}
    >
      <Login isActive={isActive} />
      <Register isActive={isActive} />

      <InfosLogin
        className={cn(
          'left-0 delay-1200',
          isActive ? '-left-1/2 delay-600 opacity-0' : '',
        )}
        title="Bem Vindo de Volta!"
        subtitle="Não possui uma conta?"
        buttonName="Criar Conta"
        handleLogin={handleLogin}
      />

      <InfosLogin
        className={cn(
          'opacity-0 -right-1/2 delay-600',
          isActive ? 'right-0 delay-1200 opacity-100' : '',
        )}
        title="Olá, Bem Vindo!"
        subtitle="Já possui uma conta?"
        buttonName="Entrar"
        handleLogin={handleLogin}
      />
    </div>
  )
}
