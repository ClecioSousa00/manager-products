'use client'
import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { colors } from '@/styles/colors'

import { Input } from '@/components/ui/input'

import { Eye, EyeOff, Mail, User } from 'lucide-react'

import { ContainerForm } from '../ContainerForm'
import { InfosLogin } from '../InfosLogin'
import { Login } from '../Login'
import { Register } from '../Register'

export const BoxLogin = () => {
  const [isActive, setIsActive] = useState(false)
  // const [isShowPassword, setIsShowPassword] = useState(false)

  // const handleShowPassword = () => {
  //   setIsShowPassword(!isShowPassword)
  // }

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
      {/* <ContainerForm textLogin="Entrar" className={isActive ? 'right-1/2' : ''}>
        <Input
          placeholder="Email"
          className="placeholder:text-gray-light"
          icon={<Mail size={20} color={colors['gray-light']} />}
        />
        <Input
          placeholder="Senha"
          className="placeholder:text-gray-light"
          type={`${isShowPassword ? 'text' : 'password'}`}
          icon={
            isShowPassword ? (
              <EyeOff size={20} color={colors['gray-light']} />
            ) : (
              <Eye size={20} color={colors['gray-light']} />
            )
          }
          handleClickIcon={handleShowPassword}
        />

        <Link
          href="#"
          className="text-blue-dark text-sm my-3 block capitalize font-bold"
        >
          Esqueceu sua senha?
        </Link>
      </ContainerForm> */}

      {/* <ContainerForm
        textLogin="Criar Conta"
        className={
          isActive ? 'opacity-100 visible right-1/2' : 'opacity-0 invisible'
        }
      >
        <Input
          placeholder="Username"
          icon={<User size={20} color={colors['gray-light']} />}
          className="placeholder:text-gray-light"
        />
        <Input
          placeholder="Email"
          icon={<Mail size={20} color={colors['gray-light']} />}
          className="placeholder:text-gray-light"
        />
        <Input
          placeholder="Senha"
          type={`${isShowPassword ? 'text' : 'password'}`}
          className="placeholder:text-gray-light"
          icon={
            isShowPassword ? (
              <EyeOff size={20} color={colors['gray-light']} />
            ) : (
              <Eye size={20} color={colors['gray-light']} />
            )
          }
          handleClickIcon={handleShowPassword}
        />
        <Input
          placeholder="Confirmar senha"
          type={`${isShowPassword ? 'text' : 'password'}`}
          className="placeholder:text-gray-light"
          icon={
            isShowPassword ? (
              <EyeOff size={20} color={colors['gray-light']} />
            ) : (
              <Eye size={20} color={colors['gray-light']} />
            )
          }
          handleClickIcon={handleShowPassword}
        />

        <Link
          href="#"
          className="text-blue-dark text-sm my-3 block capitalize font-bold"
        >
          Esqueceu sua senha?
        </Link>
      </ContainerForm> */}

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
