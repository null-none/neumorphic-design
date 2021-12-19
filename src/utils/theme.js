const fontSizes = ["10px", "12px", "14px", "16px", "24px", "40px", "64px"];

fontSizes.extraSmall = fontSizes[0];
fontSizes.smaller = fontSizes[1];
fontSizes.small = fontSizes[2];
fontSizes.medium = fontSizes[3];
fontSizes.large = fontSizes[4];
fontSizes.larger = fontSizes[5];
fontSizes.extraLarge = fontSizes[6];

const breakpoints = ["600px", "900px", "1200px", "1800px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const spaces = ["4px", "8px", "16px", "32px", "48px", "56px"];

spaces.smaller = spaces[0];
spaces.small = spaces[1];
spaces.medium = spaces[2];
spaces.large = spaces[3];
spaces.larger = spaces[4];

export default {
  colors: {
    primary: "#F9D44F",
    secondary: "#e6e7ee",
    warning: "orange",
    danger: "red",
    success: "green",
    dark: "#333"
  },
  fontSizes,
  breakpoints,
  spaces,
};
