import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // blue 300 y 600
    "staggi-blue": {
      50: "#dcf7ff",
      100: "#b0e3ff",
      200: "#82cffc",
      300: "#53bcf9",
      400: "#29a9f6",
      500: "#148fdc",
      600: "#066fac",
      700: "#004f7c",
      800: "#00304d",
      900: "#00111f",
    },
    // pink 100 y 200
    "staggi-pink": {
      50: "#ffe4eb",
      100: "#fcb5c4",
      200: "#f8859d",
      300: "#f55677",
      400: "#f32b51",
      500: "#da1938",
      600: "#aa112b",
      700: "#7a0a1f",
      800: "#4a0312",
      900: "#1d0005",
    },
  },
  layerStyles: {
    card: {
      bg: "white",
      boxShadow: "md",
      rounded: "xl",
      paddingX: "1rem",
      paddingY: ".8rem",
    },
  },
  textStyles: {
    cardHeader: {
      fontSize: "1.1rem",
      fontWeight: "normal",
      lineHeight: "110%",
      letterSpacing: "-2%",
      cursor: "default"
    },
  },
  shadows: { outline: '0 0 0 0px var(--chakra-colors-green-500)' },
  // components: {
  //   Progress: {
  //     baseStyle: {
  //       filledTrack: {
  //         bg: '#d4f3e7'
  //       },
        
  //     }
  //   }
  // }
});

export default theme;
