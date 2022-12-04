import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Icon from '../src/components/icon';
import PlanCard from '../src/components/plan-card';

const CardMeta: ComponentMeta<typeof PlanCard> = {
  title: 'PlanCard',
  component: PlanCard,
  argTypes: {
    variant: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
};

export const Default = {
  args: {
    title: 'Arcade',
    subtitle: '$90/yr',
    highlightText: '2 months free',
    width: '250px',
    variant: 'horizontal',
    selected: false,
    leading: <Icon iconId="pro" />,
  },
};

export default CardMeta;
