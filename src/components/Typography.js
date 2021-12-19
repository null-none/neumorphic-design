import styled from "styled-components";
import { color, typography, space } from "styled-system";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.extraLarge};
  text-shadow: -8px -8px 12px rgba(255,255,255,0.4), 8px 8px 12px rgba(0,0,0,0.08); 
  caret-color: #262626;
  font-weight: 700;
  outline: none;
  ${space};
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.larger};
  font-weight: 700;
  text-shadow: -8px -8px 12px rgba(255,255,255,0.4), 8px 8px 12px rgba(0,0,0,0.08); 
  caret-color: #262626;
  outline: none;
  ${space};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
  text-shadow: -8px -8px 12px rgba(255,255,255,0.4), 8px 8px 12px rgba(0,0,0,0.08); 
  caret-color: #262626;
  outline: none;
  ${space};
`;

export const Subtitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
  text-shadow: -8px -8px 12px rgba(255,255,255,0.4), 8px 8px 12px rgba(0,0,0,0.08); 
  caret-color: #262626;
  outline: none;
  ${space};
`;

export const P = styled.p`
  text-shadow: -8px -8px 12px rgba(255,255,255,0.4), 8px 8px 12px rgba(0,0,0,0.08); 
  caret-color: #262626;
  outline: none;
  ${typography};
  ${color};
  ${space};
`;