import styled from "styled-components";
import { space, layout } from "styled-system";

import fonts from "../utils/fonts";

export const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ecf0f3;
  padding: ${(props) =>
    `${props.theme.spaces.medium} ${props.theme.spaces.medium}`};
  padding-left: 20px;
  height: 50px;
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #eee;
  ${layout};
  ${space};
`;
