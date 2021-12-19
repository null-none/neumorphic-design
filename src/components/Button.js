import styled from "styled-components";
import { variant, space, layout } from "styled-system";

import fonts from "../utils/fonts";

export const Button = styled.button`
  padding: ${(props) =>
    `${props.theme.spaces.medium} ${props.theme.spaces.medium}`};
  border-radius: 8px;
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0.03em;
  display: inline-block;
  border: none;
  text-align: center;
  outline: none;
  cursor: pointer;
  ${variant({
    variants: {
      primary: {
        color: "black",
        bg: "primary",
        border: "none"
      },
      secondary: {
        color: "dark",
        bg: "secondary",
        border: "none"
      },
      tertiary: {
        color: "secondary",
        bg: "white",
        border: `1px solid #ECF1F4`,
      },
    },
  })};
  ${layout};
  ${space};
`;
