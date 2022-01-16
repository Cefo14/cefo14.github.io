import { ComponentMeta } from '@storybook/react';

import NesProgress from '../components/NesProgress';

export const Main = ({ value, maxValue, variant }: any) => (
  <NesProgress
    value={value}
    maxValue={maxValue}
    variant={variant}
  />
);

export default {
  title: 'NesProgress',
  args: {
    value: 1,
    maxValue: 10,
  },
  argTypes: {
    variant: {
      options: ['primary', 'success', 'warning', 'error', 'pattern', 'normal'],
      control: { type: 'radio' },
      defaultValue: 'normal',
    },
  },
} as ComponentMeta<typeof NesProgress>;
