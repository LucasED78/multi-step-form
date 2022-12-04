import { ComponentMeta } from '@storybook/react';
import Icon from '../src/components/icon';
import { IconIds } from '../src/components/icon/icon.types';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    iconId: {
      options: ['advanced', 'arcade', 'check', 'pro', 'thanks'] as IconIds[],
      control: { type: 'select' },
    },
  },
};

export const Default = {
  args: {
    iconId: 'pro',
  },
};

export default IconMeta;
