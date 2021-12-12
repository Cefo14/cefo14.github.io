import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesProgress from '../components/NesProgress';

export const Main = ({ value, max, variant }: any) => (
  <NesProgress
    value={value}
    max={max}
    variant={variant}
  />
);

export default {
  title: 'NesProgress',
  args: {
    value: 1,
    max: 1,
  },
  argTypes: {
    variant: {
      options: ['primary', 'success', 'warning', 'error', 'disabled', 'normal'],
      control: { type: 'radio' },
      defaultValue: 'normal',
    },
  },
} as ComponentMeta<typeof NesProgress>;
