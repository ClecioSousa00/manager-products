import Link from 'next/link'
import { FormSign } from '../components/FormSign'
import { InfosTitleContent } from '../components/InfosTitleContent'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <>
      <section className="mt-7">
        <InfosTitleContent
          title="Crie sua conta 🚀"
          subtitle="Cadastre-se para começar a gerenciar seus recursos agora mesmo."
        />
      </section>

      <section className="pt-5">
        <FormSign />
        <div className="flex justify-end">
          <Link
            href="/sign"
            className="text-blue-dark text-sm mt-4 mb-6 capitalize font-bold"
          >
            recuperar senha
          </Link>
        </div>
        <Button className="w-full">criar conta</Button>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-light">Já possui uma conta? </span>
          <Link href="/sign" className="text-blue-dark text-sm font-bold">
            Entrar
          </Link>
        </div>
      </section>
    </>
  )
}
