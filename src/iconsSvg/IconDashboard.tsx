import * as React from 'react'

export const IconDashboard = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
        fill="#28303F"
        fillRule="evenodd"
        d="M4 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm14 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-8 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m6-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
