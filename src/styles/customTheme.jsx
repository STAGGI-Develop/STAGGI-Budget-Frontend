import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#ee0303",
      // ...
      900: "#1a202c",
    },
  },
})

// const color = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const text = {
//   textStyles: {
//     h1: {
//       // you can also use responsive styles
//       fontSize: ["48px", "72px"],
//       fontWeight: "bold",
//       lineHeight: "110%",
//       letterSpacing: "-2%",
//     },
//     h2: {
//       fontSize: ["36px", "48px"],
//       fontWeight: "semibold",
//       lineHeight: "110%",
//       letterSpacing: "-1%",
//     },
//   },
// };

// const customTheme = {
//   ...color,
//   ...text,
// };

export default theme;
