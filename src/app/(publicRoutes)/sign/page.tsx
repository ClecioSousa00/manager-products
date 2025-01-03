import { FormSign } from '../components/FormSign'
import { InfosTitleContent } from '../components/InfosTitleContent'

export default function Page() {
  return (
    <>
      <section className="mt-7">
        <InfosTitleContent
          title="bem vindo 👋"
          subtitle="Organize e controle seus recursos com facilidade."
        />
      </section>
      <section className="pt-5">
        <FormSign />
      </section>
    </>
  )
}
