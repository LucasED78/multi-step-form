import styled from 'styled-components';
import { StepperProps } from './stepper.types';

export const StepperContainer = styled.div<Pick<StepperProps, 'variant'>>`
  display: inline-flex;
  flex-direction: ${({ variant = 'vertical' }) =>
    variant === 'horizontal' ? 'row' : 'column'};
  gap: ${({ variant = 'vertical' }) =>
    variant === 'horizontal' ? '16px' : '30px'};
`;

export const StepItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StepContainer = styled.div<{ selected?: boolean }>`
  width: 20px;
  height: 20px;

  padding: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid
    ${({ theme, selected = false }) =>
      selected ? theme.colors.transparent : theme.colors.white};
  border-radius: 50%;

  background-color: ${({ theme, selected = false }) =>
    selected ? theme.colors.lightBlue : theme.colors.transparent};
  color: ${({ theme, selected = false }) =>
    selected ? theme.colors.marineBlue : theme.colors.white};

  transition: all 0.5s;
`;
