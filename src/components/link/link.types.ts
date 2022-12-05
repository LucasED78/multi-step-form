import { AnchorHTMLAttributes } from 'react';
import { TypographyProps } from '../typography/typography.types';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  TypographyProps;
