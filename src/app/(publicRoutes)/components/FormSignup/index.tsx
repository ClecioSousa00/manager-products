'use client'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Link from 'next/link'

import { Eye, EyeOff, Mail } from 'lucide-react'

import { FormSchemaSignup, FormSchemaSignupProps } from './schema'

import { Label } from '../Label'
import { ErrorMessage } from '../ErrorMessage'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { colors } from '@/styles/colors'

export const FormSignup = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaSignupProps>({
    resolver: zodResolver(FormSchemaSignup),
  })

  const handleForm = (dataForm: FormSchemaSignupProps) => {
    console.log(dataForm)
  }

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowPassword)
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

      <Label label="Confirmar senha" className="mt-4 block" />
      <Input
        {...register('confirmPassword')}
        placeholder="Confirme sua senha"
        className="my-1"
        type={`${isShowConfirmPassword ? 'text' : 'password'}`}
        icon={
          isShowConfirmPassword ? (
            <EyeOff size={20} color={colors['gray-light']} />
          ) : (
            <Eye size={20} color={colors['gray-light']} />
          )
        }
        handleClickIcon={handleShowConfirmPassword}
      />
      {errors.confirmPassword?.message && (
        <ErrorMessage errorMessage={errors.confirmPassword.message} />
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
        criar conta
      </Button>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-light">Já possui uma conta? </span>
        <Link href="/sign" className="text-blue-dark text-sm font-bold">
          Entrar
        </Link>
      </div>
    </form>
  )
}
