import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Card from '../src/components/card';
import Typography from '../src/components/typography';

const CardMeta: ComponentMeta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {
    variant: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
};

export const Default = {
  args: {
    width: '250px',
    variant: 'horizontal',
    selected: false,
    leading: <>icon</>,
    children: (
      <>
        <Typography>Card content</Typography>
      </>
    ),
  },
};

export default CardMeta;
