import { createTheme, rem } from "@mantine/core";

export const themeProperties = createTheme({
  colors: {
    "ocean_blue": [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#128797",
      "#147885",
    ],
    "bright_pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },

  fontSizes: {
    xs: rem(0.8),
    sm: rem(1),
    md: rem(1),
    lg: rem(1.25),
    xl: rem(1.35),
  },

  fontFamily: "Syne, sans-serif",

  headings: {
    fontWeight: "600",
    fontFamily: "Poppins",

    // properties for individual headings, all of them are optional
    sizes: {
      h1: {
        fontWeight: "600",
        fontSize: rem(5),
        lineHeight: "1.4",
      },
      h2: { fontSize: rem(4.5), lineHeight: "1.4" },
      h3: { fontSize: rem(4), lineHeight: "1.4" },
      h4: { fontSize: rem(3.5), lineHeight: "1.4" },
      h5: { fontSize: rem(2.5), lineHeight: "1.4" },
      h6: { fontSize: rem(2), lineHeight: "1.4" },
    },
  },
});


export const toastOptions: any = {
  autoClose: 3000,
  hideProgressBar: true,
  style: { fontSize: "16px" },
};