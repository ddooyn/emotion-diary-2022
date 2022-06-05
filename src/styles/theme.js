const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(48),
  subtitle: pixelToRem(36),
  paragraph: pixelToRem(24),
  button: pixelToRem(20),
};

const colors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#ececec",
  green: "#65c964",
  red: "#fd565f",
  line: "#e2e2e2",
};

const flex = {
  center: `
    display: flex;
    align-items: center;
  `,
  centerCol: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const theme = {
  fontSizes,
  colors,
  flex,
};

export default theme;
