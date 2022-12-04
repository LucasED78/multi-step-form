import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Button from '../src/components/button';
import Typography from '../src/components/typography';

const Metadata: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'ghost'],
      control: { type: 'radio' },
    },
  },
};

export const Default = {
  args: {
    children: <>Button text</>,
    variant: 'primary',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    variant: 'primary',
    disabled: true,
  },
};

export const WithTypography = {
  args: {
    ...Default.args,
    children: (
      <>
        <Typography size="XS">Typography</Typography>
      </>
    ),
  },
};

export default Metadata;
