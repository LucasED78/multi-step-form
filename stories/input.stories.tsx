import { ComponentMeta } from '@storybook/react';
import Input from '../src/components/input';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default = {
  args: {
    label: 'Test label',
    placeholder: 'Type something',
    helperText: 'This field is required',
    hasError: false,
  },
};

export const WithError = {
  args: {
    ...Default.args,
    hasError: true,
  },
};
