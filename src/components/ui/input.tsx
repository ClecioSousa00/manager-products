import * as React from 'react'
import { cn } from '@/lib/utils'

type InputProps = {
  icon?: React.ReactNode
  handleClickIcon?: () => void
} & React.ComponentProps<'input'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, handleClickIcon, ...props }, ref) => {
    return (
      <div className="flex items-center relative w-full">
        <input
          className={cn(
            `flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 ${Icon ? 'pr-10' : ''} text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-primary font-medium disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
            className,
          )}
          ref={ref}
          {...props}
        />
        {Icon && (
          <button
            className="absolute right-3"
            onClick={handleClickIcon}
            type="button"
          >
            {Icon}
          </button>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
