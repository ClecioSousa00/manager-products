type Props = {
  errorMessage: string
}

export const ErrorMessage = ({ errorMessage }: Props) => {
  return (
    <p className="text-destructive font-medium text-left text-sm">
      {errorMessage}
    </p>
  )
}
