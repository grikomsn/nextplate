/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  extendTheme,
  Theme,
  theme as defaultTheme,
  ThemeOverride,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/styles.ts
export default <Theme>extendTheme(<ThemeOverride>{
  fonts: {
    body: `'Inter',${defaultTheme.fonts.body}`,
    heading: `'Inter',${defaultTheme.fonts.heading}`,
  },

  styles: {
    global: (props: Dict) => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: mode("white", "gray.800")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
        cursor: "default",
        fontFamily: "body",
        lineHeight: "base",
        transition: "background-color 0.2s",

        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },

      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        bgColor: "dodgerblue",
        h: "2px",
        left: 0,
        pos: "fixed",
        top: 0,
        w: "full",
        zIndex: 2000,
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
    }),
  },
});
