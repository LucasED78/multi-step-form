import { InputHTMLAttributes } from 'react';

export type CheckboxProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'checked' | 'onChange'
>;

export interface CheckableCardProps {
  title: string;
  subtitle: string;
  trailing?: JSX.Element;
  checkboxProps?: CheckboxProps;
}
