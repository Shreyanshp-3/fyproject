// import { extendTheme } from "@chakra-ui/react";

// const colors = {
//   primary: {
//     100: "#E5FCF1",
//     200: "#E39FF6",
//     300: "#E39FF6",
//     400: "#E39FF6",
//     500: "#E39FF6", // the button
//     600: "#E39FF6",
//     700: "#AC2CC4", // the name links in the navbar
//     800: "#E39FF6",
//     900: "#E39FF6"
//   }
// };
// const fonts = {
//   heading: "Inter, sans-serif",
//   body: "Inter, sans-serif",
// };
// const transitions = {
//   easing: {
//     // Define easing functions here
//     standard: "cubic-bezier(.4, 0, .2, 1)",
//     in: "cubic-bezier(0.0, 0, 0.2, 1)",
//     out: "cubic-bezier(0.4, 0, 1, 1)",
//   },
//   duration: {
//     // Define transition durations here
//     fast: "0.2s",
//     normal: "0.4s",
//     slow: "0.6s",
//   },
//   create: (property) => `0.4s ${property} standard`,
// };
// const palette = {};
// // const transitions.duration={1000};
// const typography = {
//   h1: {
//     fontSize: "2xl",
//     fontWeight: "bold",
//     color: "primary.700",
//   },
//   h2: {
//     fontSize: "xl",
//     fontWeight: "bold",
//     color: "primary.700",
//   },
//   h3: {
//     fontSize: "lg",
//     fontWeight: "bold",
//     color: "primary.700",
//   },
//   h4: {
//     fontSize: "md", // Adjust the font size as needed
//     fontWeight: "semibold", // Adjust the font weight as needed
//     color: "primary.700", // Use the primary color for h4
//   },
//   // ... (customize other heading levels)
//   body: {
//     fontSize: "md",
//     color: "gray.700",
//   },
//   // ... (customize other text styles)
// };
// const customTheme = extendTheme({ palette, colors, fonts, typography, transitions });
// export default customTheme;
import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#E39FF6",
    300: "#E39FF6",
    400: "#E39FF6",
    500: "#E39FF6", // the button
    600: "#E39FF6",
    700: "#AC2CC4" , // the name links in the navbar
    800: "#E39FF6",
    900: "#E39FF6"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;