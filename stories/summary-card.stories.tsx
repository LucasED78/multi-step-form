import { ComponentMeta } from '@storybook/react';
import Summary from '../src/components/summary-card';

const SummaryMeta: ComponentMeta<typeof Summary> = {
  title: 'SummaryCard',
  component: Summary,
};

export const Default = {
  args: {
    title: 'Arcade (Monthly)',
    value: '$9/mo',
    additionalFeatures: [],
  },
};
export const WithFeatures = {
  args: {
    ...Default.args,
    additionalFeatures: [
      { title: 'Arcade (Monthly)', value: '+$1/mo' },
      { title: 'Arcade (Monthly)', value: '+$1/mo' },
    ],
  },
};

export default SummaryMeta;
