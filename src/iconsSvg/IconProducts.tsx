import * as React from 'react'

export const IconProducts = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#28303F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 6v1a3 3 0 1 0 6 0V6"
      ></path>
      <path
        stroke="#28303F"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.611 3H8.388a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.61 3Z"
      ></path>
    </svg>
  )
}
