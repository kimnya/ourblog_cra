import { css } from "styled-components";
export const lighten = (value) => css`
  filter: brightness(${value + 1});
`;

export const darken = (value) => css`
  filter: brightness(${1 - value});
`;
export const opacity = (value) => css`
  filter: opacity(${1 - value});
`;
