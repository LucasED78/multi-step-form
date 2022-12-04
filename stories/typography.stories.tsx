import { ComponentMeta } from '@storybook/react';
import Typography from '../src/components/typography';
import { theme } from '../src/theme';

const TypographyMeta: ComponentMeta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    fontWeight: {
      options: ['400', '500', '700'],
      control: { type: 'radio' },
    },
    size: {
      options: Object.keys(theme.fontSize),
      control: { type: 'radio' },
    },
    lineHeight: {
      options: Object.keys(theme.lineHeight),
      control: { type: 'radio' },
    },
    color: {
      options: Object.keys(theme.colors),
      control: { type: 'select' },
    },
  },
};

export const Default = {
  args: {
    color: 'marineBlue',
    fontWeight: '500',
    lineHeight: '500',
    size: 'XS',
    children: 'Typography',
  },
};

export default TypographyMeta;
