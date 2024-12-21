import * as React from 'react'

export const IconSales = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
        strokeWidth="1.5"
        d="M6 10h1a2 2 0 0 0 2-2v-.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 0 3 0V12a2 2 0 0 1 2-2h1m-6 8v4m-6-4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4ZM14 22h-4"
      ></path>
    </svg>
  )
}
