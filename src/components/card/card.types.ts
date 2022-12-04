import React, { HTMLAttributes } from 'react';

export type CardVariant = 'vertical' | 'horizontal';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  width?: string;
  leading?: JSX.Element;
  children: React.ReactNode;
  selected?: boolean;
}
