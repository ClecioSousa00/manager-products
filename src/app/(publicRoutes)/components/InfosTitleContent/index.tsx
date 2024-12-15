type Props = {
  title: string
  subtitle: string
}

export const InfosTitleContent = ({ title, subtitle }: Props) => {
  return (
    <>
      <h2 className="font-bold text-2xl md:text-3xl capitalize">{title}</h2>
      <p className="text-gray-light">{subtitle}</p>
    </>
  )
}
