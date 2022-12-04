import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Stepper from '../src/components/stepper';
import { theme } from '../src/theme';

const StepperMeta: ComponentMeta<typeof Stepper> = {
  title: 'Stepper',
  component: props => (
    <div
      style={{ backgroundColor: theme.colors.purplishBlue, padding: '1rem' }}
    >
      <Stepper {...props} />
    </div>
  ),
  argTypes: {
    variant: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
};

export const Default = {
  args: {
    step: 1,
    variant: 'horizontal',
    steps: ['Your info', 'Select plan', 'add-ons', 'summary'],
  },
};

export default StepperMeta;
