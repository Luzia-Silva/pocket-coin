import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
 fonts: { 
   heading: 'Mukta',
   body: 'Mukta' 
  },
  styles: {
    global: {
      body: {
        bg: 'black',
      },
    }
  },
  colors: {
    blue: {
      "700": "#005270",
    },
  }
});