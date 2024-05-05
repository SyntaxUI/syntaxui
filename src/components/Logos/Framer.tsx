import * as React from 'react'
import type { SVGProps } from 'react'

const FramerLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 384"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      fill="#000"
      d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"
    />
  </svg>
)
export default FramerLogo
