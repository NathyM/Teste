import { extendTheme, StyleProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  manager: {
    50: "#E3F2FD", //list
    200: "#90CAF9", //background and header
    300: "#82B1FF", //btn-cad
    500: "#1976D2", //btn-general
    600: "#1E40AF", //btn-hover
  },
  red: {
    50: "#EF5350", //btn-cancel
  },
  gray: {
    50: "#fafafa", // light mode background
    75: "#f0f0f0", // light mode content background
    100: "#e3e3e3", // dark mode text
    200: "#c9c9c9",
    300: "#a7a7a7",
    400: "#858585",
    500: "#4a4a4a",
    600: "#444444", // light mode text
    700: "#1F2029", // dark mode content background
    800: "#181B23", // dark mode background
    900: "#13161c",
  },
};
const fonts = {
  heading: "Comfortaa",
  body: "Comfortaa",
};
const styles = {
  global: (props: StyleProps) => ({
    body: {
      color: mode("gray.75", "gray.100")(props),
      bg: mode("manager.200", "blue.600")(props),
    },
  }),
};

const customTheme = {
  colors,
  fonts,
  styles,
};

const theme = extendTheme(customTheme);

export default theme;
