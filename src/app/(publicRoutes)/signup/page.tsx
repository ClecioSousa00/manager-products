import { InfosTitleContent } from '../components/InfosTitleContent'

import { FormSignup } from '../components/FormSignup'

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
        <FormSignup />
      </section>
    </>
  )
}
