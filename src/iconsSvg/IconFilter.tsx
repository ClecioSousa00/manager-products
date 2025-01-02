import * as React from 'react'

export const IconFilter = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="#16151C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.5 6h7M3.5 12h9M19.5 12h2M14.5 6h7M13.5 18h7M3.5 18h3"
      ></path>
      <circle
        cx="8.5"
        cy="18"
        r="2"
        stroke="#16151C"
        strokeWidth="1.5"
      ></circle>
      <circle
        cx="17.5"
        cy="12"
        r="2"
        stroke="#16151C"
        strokeWidth="1.5"
      ></circle>
      <circle
        cx="12.5"
        cy="6"
        r="2"
        stroke="#16151C"
        strokeWidth="1.5"
      ></circle>
    </svg>
  )
}
