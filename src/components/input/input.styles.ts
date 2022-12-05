import styled from 'styled-components';
import { InputProps } from './input.types';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;
`;

export const Input = styled.input<Pick<InputProps, 'hasError'>>`
  color: ${({ theme }) => theme.colors.marineBlue};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.XS};

  border: 1px solid
    ${({ theme, hasError = false }) =>
      hasError ? theme.colors.strawberryRed : theme.colors.lightGray};
  border-radius: 6px;

  padding: 12px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.coolGray};

    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.XS};
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.marineBlue};
  font-size: ${({ theme }) => theme.fontSize.XS};
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.strawberryRed};

  font-size: ${({ theme }) => theme.fontSize.XS};
  font-weight: 700;
`;
