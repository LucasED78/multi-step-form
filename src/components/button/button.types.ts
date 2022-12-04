import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'ghost';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};
