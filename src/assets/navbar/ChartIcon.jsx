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
      d="M573.333 466.673C582.566 466.673 587.183 466.673 590.926 468.723C594.013 470.413 596.883 473.59 598.26 476.83C599.926 480.757 599.506 484.937 598.666 493.297C594.32 536.63 579.406 578.387 555.06 614.823C525.756 658.677 484.11 692.857 435.383 713.04C386.656 733.223 333.037 738.503 281.309 728.217C229.581 717.927 182.065 692.527 144.771 655.233C107.477 617.94 82.0798 570.423 71.7905 518.697C61.5011 466.967 66.7821 413.35 86.9655 364.623C107.149 315.896 141.328 274.249 185.181 244.947C221.618 220.6 263.375 205.686 306.71 201.338C315.069 200.499 319.248 200.08 323.176 201.746C326.416 203.121 329.592 205.994 331.283 209.081C333.333 212.822 333.333 217.439 333.333 226.672V440.007C333.333 449.34 333.333 454.007 335.15 457.573C336.746 460.707 339.296 463.257 342.433 464.857C346 466.673 350.666 466.673 360 466.673H573.333Z"
      strokeWidth={66.6667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M466.667 93.339C466.667 84.1057 466.666 79.4887 468.716 75.747C470.406 72.6603 473.583 69.7873 476.823 68.4127C480.75 66.746 484.93 67.1653 493.29 68.0037C554.237 74.117 611.533 101.082 655.23 144.777C698.923 188.472 725.89 245.769 732.003 306.716C732.84 315.075 733.26 319.254 731.593 323.182C730.22 326.422 727.347 329.598 724.26 331.289C720.517 333.34 715.9 333.34 706.667 333.34H493.333C484 333.34 479.333 333.34 475.766 331.522C472.63 329.925 470.08 327.375 468.483 324.239C466.666 320.674 466.667 316.007 466.667 306.672V93.339Z"
      strokeWidth={66.6667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
