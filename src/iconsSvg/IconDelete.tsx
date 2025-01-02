import * as React from 'react'

export const IconDelete = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.667 3a.167.167 0 0 0-.167.167v1.5h3v-1.5A.167.167 0 0 0 9.333 3zm-2.79 2.667.621 7.458.002.042a.833.833 0 0 0 .833.833h5.333a.833.833 0 0 0 .834-.833q0-.021.002-.042l.621-7.458zm9.25 0-.627 7.522A1.833 1.833 0 0 1 10.666 15H5.333A1.833 1.833 0 0 1 3.5 13.19l-.627-7.523h-.207a.5.5 0 0 1 0-1H5.5v-1.5A1.167 1.167 0 0 1 6.667 2h2.666A1.167 1.167 0 0 1 10.5 3.167v1.5h2.833a.5.5 0 0 1 0 1zm-6.46 1.666a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5m2.666 0a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
