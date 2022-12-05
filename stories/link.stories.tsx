import { ComponentMeta } from '@storybook/react';
import Link from '../src/components/link';

const LinkMeta: ComponentMeta<typeof Link> = {
  title: 'Link',
  component: Link,
};

export const Default = {
  args: {
    href: '#',
    color: 'coolGray',
    children: 'Link',
  },
};

export default LinkMeta;
