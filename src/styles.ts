import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Ubuntu;
    font-weight: 500;

    background-color: ${({ theme }: { theme: Theme }) => theme.colors.magnolia};
  }
`;
