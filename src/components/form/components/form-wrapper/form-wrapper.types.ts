import React from 'react';
import { FormHeadingProps } from '../form-heading/form-heading.types';

export interface FormWrapperProps extends FormHeadingProps {
  children: React.ReactNode;
}
