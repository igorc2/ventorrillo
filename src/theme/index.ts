import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5fed1",
      100: "#e8f4d1",
      200: "#d0e9a3",
      300: "#b9df75",
      400: "#a1d447",
      500: "#8ac919",
      600: "#6ea114",
      700: "#53790f",
      800: "#37500a",
      900: "#1c2805"
    },
  },
  fonts: {
    heading: `var(--montserrat-font), ${base.fonts?.heading}`,
    body: `var(--inter-font), ${base.fonts?.body}`,
  }
})

export default theme


