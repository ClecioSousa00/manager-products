'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { colors } from '@/styles/colors'
import { Eye, EyeOff, Mail, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  isActive: boolean
  handleLogin: () => Promise<void>
}

export const BoxLogin = ({ isActive, handleLogin }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }
  return (
    <div
      className={cn(
        "absolute w-full h-full before:content-[''] before:absolute before:-left-[250%] before:w-[300%] before:h-full before:bg-blue-dark before:rounded-[150px] before:z-20 before:transition-all before:duration-1800 before:ease-in-out",
        isActive ? 'before:left-1/2' : '',
      )}
    >
      <div
        className={cn(
          'absolute right-0 w-1/2 h-full bg-white flex items-center text-center text-[#333] p-10 z-10 transition-all duration-600 ease-in-out delay-1200',
          isActive ? 'right-1/2' : '',
        )}
      >
        <form action="#" className="w-full space-y-3">
          <h1 className="text-3xl font-extrabold mb-4">Entrar</h1>

          <Input
            placeholder="Email"
            icon={<Mail size={20} color={colors['gray-light']} />}
          />
          {/* <div className="my-3"></div> */}
          <Input
            placeholder="Digite sua senha"
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
          <Button type="submit" className="w-full">
            entrar
          </Button>
        </form>
      </div>

      <div
        className={cn(
          'absolute right-0 w-1/2 h-full bg-white flex items-center text-[#333] text-center p-10 z-10 transition-all duration-600 ease-in-out delay-1200',
          isActive ? 'opacity-100 visible right-1/2' : 'opacity-0 invisible',
        )}
      >
        <form action="#" className="w-full space-y-3">
          <h1 className="text-3xl font-extrabold mb-4">Criar Conta</h1>

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
            placeholder="Digite sua senha"
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
          <Button type="submit" className="w-full">
            criar conta
          </Button>
        </form>
      </div>
      {/* {"toggle-panel toggle-left} */}
      <div
        className={cn(
          'absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-20 transition duration-1000 ease-in-out left-0 delay-1200',
          isActive ? '-left-1/2 delay-600 opacity-0' : '',
        )}
      >
        <h1 className="text-3xl font-extrabold">Bem Vindo de Volta!</h1>
        <p className="text-sm mt-1 mb-4">Não possui uma conta?</p>
        <button
          className="w-40 h-11 bg-transparent border-2 border-white shadow-none rounded-lg"
          onClick={handleLogin}
        >
          Criar Conta
        </button>
      </div>

      <div
        className={cn(
          'absolute w-1/2 h-full opacity-0 text-white flex flex-col justify-center items-center z-20 transition duration-1000 ease-in-out -right-1/2 delay-600',
          isActive ? 'right-0 delay-1200 opacity-100' : '',
        )}
      >
        <h1 className="text-3xl font-extrabold">Olá, Bem Vindo!</h1>
        <p className="text-sm mt-1 mb-4">Já possui uma conta?</p>
        <button
          className="w-40 h-11 bg-transparent border-2 border-white shadow-none rounded-lg"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
