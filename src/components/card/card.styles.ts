import styled from 'styled-components';
import { CardProps } from './card.types';

export const CardContainer = styled.article<
  Pick<CardProps, 'width' | 'variant' | 'selected'>
>`
  width: ${({ width = 'auto' }) => width};

  display: inline-flex;
  flex-direction: ${({ variant }) =>
    variant === 'horizontal' ? 'row' : 'column'};
  gap: ${({ variant }) => (variant === 'horizontal' ? '16px' : '60px')};

  padding: 16px;

  border: 1px solid
    ${({ theme, selected = false }) =>
      selected ? theme.colors.marineBlue : theme.colors.lightGray};
  border-radius: 6px;

  background-color: ${({ theme, selected = false }) =>
    selected ? theme.colors.alabaster : 'transparent'};

  transition: border 0.5s, background-color 0.5s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.marineBlue};
  }
`;
