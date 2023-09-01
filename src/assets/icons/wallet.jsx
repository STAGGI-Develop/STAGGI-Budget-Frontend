import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M53.333 40a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.733 2.628c4.579-1.4 9.352 1.51 10.209 6.22l.888 4.883a8.003 8.003 0 0 1 5.503 7.602v7.37A7.98 7.98 0 0 1 64 34.668V40a7.98 7.98 0 0 1-2.667 5.963v7.37a8 8 0 0 1-8 8H10.667a8 8 0 0 1-8-8v-32a8.002 8.002 0 0 1 6.67-7.89L44.732 2.628ZM56 42.667A2.667 2.667 0 0 0 58.666 40v-5.333A2.667 2.667 0 0 0 56 32h-8a2.667 2.667 0 0 0-2.667 2.667V40A2.667 2.667 0 0 0 48 42.667h8ZM56 48v5.333A2.667 2.667 0 0 1 53.333 56H10.667A2.667 2.667 0 0 1 8 53.333v-32a2.667 2.667 0 0 1 2.666-2.666h42.667A2.667 2.667 0 0 1 56 21.315v5.352h-8a8 8 0 0 0-8 8V40a8 8 0 0 0 8 8h8ZM49.854 9.619l.656 3.714H26.667l19.795-5.805a2.667 2.667 0 0 1 3.392 2.09Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent