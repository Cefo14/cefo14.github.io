import { ComponentMeta } from '@storybook/react';

import NesCursor from '../components/NesCursor';

export const Main = ({ text, from }: any) => (
  <NesCursor from={from}>
    { text }
  </NesCursor>
);

export default {
  title: 'NesCursor',
  args: {
    text: 'TEXT',
  },
  argTypes: {
    from: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      defaultValue: 'left',
    },
  },
} as ComponentMeta<typeof NesCursor>;
