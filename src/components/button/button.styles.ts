import styled from 'styled-components';
import { Theme } from '../../theme';
import * as css from '../typography/typography.styles';
import { ButtonVariant } from './button.types';

const ColorByHierarchy: Record<ButtonVariant, keyof Theme['colors']> = {
  ghost: 'coolGray',
  primary: 'white',
};

const BackgroundColorByHierarchy: Record<ButtonVariant, keyof Theme['colors']> =
  {
    ghost: 'transparent',
    primary: 'marineBlue',
  };

const BackgroundHoverColorByHierarchy: Record<
  ButtonVariant,
  keyof Theme['colors']
> = {
  ghost: 'transparent',
  primary: 'purplishBlue',
};

const HoverColorByHierarchy: Record<ButtonVariant, keyof Theme['colors']> = {
  ghost: 'marineBlue',
  primary: 'white',
};

const DisabledColorByHierarchy: Record<ButtonVariant, keyof Theme['colors']> = {
  ghost: 'lightGray',
  primary: 'white',
};

const DisabledBackgroundColorByHierarchy: Record<
  ButtonVariant,
  keyof Theme['colors']
> = {
  ghost: 'transparent',
  primary: 'pastelBlue',
};

export const Button = styled.button<{ variant?: ButtonVariant }>`
  cursor: pointer;

  border: 0;
  border-radius: 6px;

  padding: 12px 16px;

  background-color: ${({ theme, variant = 'primary' }) =>
    theme.colors[BackgroundColorByHierarchy[variant]]};
  color: ${({ theme, variant = 'primary' }) =>
    theme.colors[ColorByHierarchy[variant]]};

  transition: background-color 0.5s, color 0.5s;

  &:hover {
    color: ${({ theme, variant = 'primary' }) =>
      theme.colors[HoverColorByHierarchy[variant]]};
    background-color: ${({ theme, variant = 'primary' }) =>
      theme.colors[BackgroundHoverColorByHierarchy[variant]]};
  }

  &:disabled {
    cursor: not-allowed;

    color: ${({ theme, variant = 'primary' }) =>
      theme.colors[DisabledColorByHierarchy[variant]]};
    background-color: ${({ theme, variant = 'primary' }) =>
      theme.colors[DisabledBackgroundColorByHierarchy[variant]]};

    ${css.Typography} {
      color: ${({ theme, variant = 'primary' }) =>
        theme.colors[DisabledColorByHierarchy[variant]]};
    }
  }

  ${css.Typography} {
    color: ${({ theme, variant = 'primary' }) =>
      theme.colors[ColorByHierarchy[variant]]};
  }
`;
