import { ComponentMeta } from '@storybook/react';
import React from 'react';
import CheckableCard from '../src/components/checkable-card';

const CheckableCardMeta: ComponentMeta<typeof CheckableCard> = {
  title: 'CheckableCard',
  component: CheckableCard,
};

export const Default = {
  args: {
    title: 'Online service',
    subtitle: 'Access to multiplayer games',
    trailing: <>+$1/mo</>,
    checkboxProps: {
      checked: false,
    },
  },
};

export default CheckableCardMeta;
