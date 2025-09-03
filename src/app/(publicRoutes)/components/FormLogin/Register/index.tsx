import { useState } from 'react'

import { Eye, EyeOff, Mail, User } from 'lucide-react'

import Link from 'next/link'

import { Input } from '@/components/ui/input'

import { ContainerForm } from '../ContainerForm'

import { colors } from '@/styles/colors'
import { useForm } from 'react-hook-form'
import { RegisterFormSchema, RegisterFormSchemaProps } from '../schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../../ErrorMessage'
import { UserService } from '@/services/user'
import { toast } from 'sonner'

type Props = {
  isActive: boolean
  handleSwitchLogin: () =>void
}
export const Register = ({ isActive,handleSwitchLogin }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterFormSchemaProps>({
    resolver: zodResolver(RegisterFormSchema),
  })

 // componente
const handleForm = async (dataForm: RegisterFormSchemaProps) => {
  const { email, password, username } = dataForm
  try {
    await UserService.createUser({ email, password, username })
    showToast(true)
    reset()
     handleSwitchLogin()
  } catch (err: any) {
    showToast(false, err?.message)
  }
}

  const showToast = (success: boolean, message?: string) => {
    if (success) {
      toast('Conta criada com sucesso.',{ 
        position:'top-left'
        }
      )
      return
    }
    
    toast.error('Algo deu Errado.',{
      description: message ?? 'Tente Novamente Mais Tarde.',
      position:'top-left'
    })
  }

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }


  return (
    <ContainerForm
      onSubmit={handleSubmit(handleForm)}
      textLogin="Criar Conta"
      className={
        isActive ? 'opacity-100 visible right-1/2' : 'opacity-0 invisible'
      }
    >
      <div>
        <Input
          {...register('username')}
          placeholder="username"
          icon={<User size={20} color={colors['gray-light']} />}
          className="placeholder:text-gray-light"
        />
        {errors.username?.message && (
          <ErrorMessage errorMessage={errors.username.message} />
        )}
      </div>
      <div>
        <Input
          {...register('email')}
          placeholder="Email"
          icon={<Mail size={20} color={colors['gray-light']} />}
          className="placeholder:text-gray-light"
        />
        {errors.email?.message && (
          <ErrorMessage errorMessage={errors.email.message} />
        )}
      </div>
      <div>
        <Input
          {...register('password')}
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
        />{' '}
        {errors.password?.message && (
          <ErrorMessage errorMessage={errors.password.message} />
        )}
      </div>
      <div>
        <Input
          {...register('confirmPassword')}
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
        {errors.confirmPassword?.message && (
          <ErrorMessage errorMessage={errors.confirmPassword.message} />
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
