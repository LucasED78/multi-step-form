import styled from 'styled-components';
import { TypographyProps } from './typography.types';

export const Typography = styled.div<Omit<TypographyProps, 'as'>>`
  color: ${({ theme, color = 'marineBlue' }) => theme.colors[color]};

  font-weight: ${({ fontWeight = '500' }) => fontWeight};
  font-size: ${({ theme, size = 'SM' }) => theme.fontSize[size]};

  line-height: ${({ theme, lineHeight = 'XS' }) =>
    theme.lineHeight[lineHeight]};
`;
