import styled from 'styled-components';
import { ToggleProps } from './toggle.types';

export const Toggle = styled.div<ToggleProps>`
  position: relative;
  width: 100%;
  max-width: 30px;

  display: inline-flex;
  align-items: center;

  padding: 8px 12px;

  background-color: ${({ theme }) => theme.colors.marineBlue};

  border-radius: 10px;

  cursor: pointer;

  &::before {
    content: '';

    position: absolute;
    left: ${({ active = false }) => (active ? 'calc(100% - 14px)' : '4px')};

    width: 10px;
    height: 10px;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.white};

    transition: left 0.5s;
  }
`;
