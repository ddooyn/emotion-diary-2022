import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  font-family: 'Nanum Pen Script', cursive;
  /* font-family: 'Yeon Sung', cursive; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f6f6f6;
  font-size: 24px;
}

#root {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.App {
  min-height: 100vh;
  padding: 0 20px 0 20px;
}

@media screen and (min-width: 650px) {
  .App {
    width: 640px;
  }
}

@media screen and (max-width: 650px) {
  .App {
    width: 90vw;
  }
}
`;

export default GlobalStyle;
