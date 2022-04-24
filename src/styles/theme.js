const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(48),
  subtitle: pixelToRem(36),
  paragraph: pixelToRem(24),
  button: pixelToRem(20),
};

const colors = {
  black: "#000000",
  grey: "#ececec",
  green: "#65c964",
  red: "#fd565f",
};

const flex = {
  center: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  centerCol: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  fontSizes,
  colors,
  flex,
};

export default theme;
