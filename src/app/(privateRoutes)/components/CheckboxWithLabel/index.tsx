import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type Props = {
  id: string
  label: string
} & CheckboxProps
export const CheckboxWithLabel = ({ id, label, ...props }: Props) => {
  return (
    <div className="items-center flex gap-2">
      <Checkbox id={id} {...props} />

      <label
        htmlFor={id}
        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
}
