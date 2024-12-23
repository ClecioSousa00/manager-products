'use client'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Link from 'next/link'

import { Eye, EyeOff, Mail } from 'lucide-react'

import { FormSchemaSign, FormSchemaSignProps } from './schema'

import { Label } from '../Label'
import { ErrorMessage } from '../ErrorMessage'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { colors } from '@/styles/colors'

export const FormSign = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaSignProps>({
    resolver: zodResolver(FormSchemaSign),
  })

  const handleForm = (dataForm: FormSchemaSignProps) => {
    console.log(dataForm)
  }

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Label label="Email" />
      <Input
        {...register('email')}
        placeholder="Digite seu Email"
        className="my-1 "
        icon={<Mail size={20} color={colors['gray-light']} />}
      />
      {errors.email?.message && (
        <ErrorMessage errorMessage={errors.email.message} />
      )}
      <Label label="Senha" className="mt-4 block" />
      <Input
        {...register('password')}
        placeholder="Digite sua senha"
        className="my-1"
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
      {errors.password?.message && (
        <ErrorMessage errorMessage={errors.password.message} />
      )}

      <div className="flex justify-end">
        <Link
          href="/sign"
          className="text-blue-dark text-sm mt-4 mb-6 capitalize font-bold"
        >
          recuperar senha
        </Link>
      </div>
      <Button type="submit" className="w-full">
        entrar
      </Button>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-light">
          Ainda não possui uma conta?{' '}
        </span>
        <Link href="/signup" className="text-blue-dark text-sm font-bold">
          Inscreva-se
        </Link>
      </div>
    </form>
  )
}
