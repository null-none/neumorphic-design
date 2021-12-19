import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";

export default createGlobalStyle`
 *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.dark};
    font-family: ${fonts.primary};
    max-width: 100%;
  }
`;
