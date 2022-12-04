import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Ubuntu;
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.magnolia};
  }
`;
