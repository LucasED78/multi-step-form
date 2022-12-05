import React from 'react';
import { CSSProperties } from 'styled-components';
import { Theme } from '../../theme';

export interface TypographyProps {
  children: React.ReactNode;
  color?: keyof Theme['colors'];
  size?: keyof Theme['fontSize'];
  lineHeight?: keyof Theme['lineHeight'];
  fontWeight?: '400' | '500' | '700';
  textAlign?: CSSProperties['textAlign'];
  as?: any;
}
