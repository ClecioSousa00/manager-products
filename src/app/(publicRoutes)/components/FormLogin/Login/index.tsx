import { useState } from 'react'

import { Eye, EyeOff, Mail } from 'lucide-react'

import Link from 'next/link'

import { Input } from '@/components/ui/input'

import { ContainerForm } from '../ContainerForm'

import { colors } from '@/styles/colors'
import { useForm } from 'react-hook-form'
import { LoginFormSchema, LoginFormSchemaProps } from '../schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../../ErrorMessage'

type Props = {
  isActive: boolean
}

export const Login = ({ isActive }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaProps>({
    resolver: zodResolver(LoginFormSchema),
  })

  const handleForm = (dataForm: LoginFormSchemaProps) => {
    console.log(dataForm)
  }

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }
  return (
    <ContainerForm
      onSubmit={handleSubmit(handleForm)}
      textLogin="Entrar"
      className={isActive ? 'right-1/2' : ''}
    >
      <div>
        <Input
          {...register('email')}
          placeholder="Email"
          className="placeholder:text-gray-light"
          icon={<Mail size={20} color={colors['gray-light']} />}
        />
        {errors.email?.message && (
          <ErrorMessage errorMessage={errors.email.message} />
        )}
      </div>
      <div>
        <Input
          {...register('password')}
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
        {errors.password?.message && (
          <ErrorMessage errorMessage={errors.password.message} />
        )}
      </div>

      <Link
        href="/inventory/dashboard"
        className="text-blue-dark text-sm my-3 block capitalize font-bold"
      >
        Esqueceu sua senha?
      </Link>
    </ContainerForm>
  )
}
