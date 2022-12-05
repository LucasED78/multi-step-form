import styled from 'styled-components';
import * as css from '../typography/typography.styles';

export const Link = styled(css.Typography)`
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.purplishBlue};
  }
`;
