import { ComponentMeta } from '@storybook/react';
import Toggle from '../src/components/toggle';

const ToggleMeta: ComponentMeta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
};

export const Default = {
  args: {
    active: false,
  },
};

export default ToggleMeta;
