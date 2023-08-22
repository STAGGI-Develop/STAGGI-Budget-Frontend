import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M450 216.667H656.853C671.14 216.667 678.283 216.667 682.587 219.676C686.343 222.303 688.85 226.362 689.52 230.897C690.287 236.091 687.093 242.481 680.703 255.259L638.96 338.743C636.893 342.88 635.86 344.95 635.42 347.123C635.033 349.047 634.987 351.027 635.287 352.97C635.627 355.16 636.567 357.273 638.443 361.5L683.333 462.503C688.89 475 691.667 481.247 690.757 486.293C689.96 490.7 687.423 494.603 683.72 497.12C679.48 500 672.643 500 658.967 500H403.333C384.663 500 375.33 500 368.2 496.367C361.927 493.17 356.83 488.073 353.633 481.8C350 474.67 350 465.337 350 446.667V366.667M100 700V116.667M100 366.667H396.667C415.337 366.667 424.67 366.667 431.8 363.033C438.073 359.837 443.17 354.74 446.367 348.467C450 341.337 450 332.002 450 313.333V136.667C450 117.998 450 108.664 446.367 101.534C443.17 95.2617 438.073 90.1624 431.8 86.9664C424.67 83.3334 415.337 83.3334 396.667 83.3334H153.333C134.665 83.3334 125.331 83.3334 118.2 86.9664C111.928 90.1624 106.829 95.2617 103.633 101.534C100 108.664 100 117.998 100 136.667V366.667Z"
      strokeWidth={66.6667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent