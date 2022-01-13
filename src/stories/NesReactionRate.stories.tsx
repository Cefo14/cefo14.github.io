import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesReactionRate from '../components/NesReactionRate';

export const Main = ({
  type,
  size,
  rate,
  maxRate,
}: any) => (
  <NesReactionRate
    type={type}
    size={size}
    rate={rate}
    maxRate={maxRate}
  />
);

export default {
  title: 'NesReactionRate',
  args: {
    rate: 1,
    maxRate: 5,
  },
  argTypes: {
    type: {
      options: ['heart', 'star'],
      control: { type: 'radio' },
      defaultValue: 'heart',
    },
    size: {
      options: ['is-small', 'is-medium', 'is-large'],
      control: { type: 'radio' },
      defaultValue: 'is-medium',
    },
  },
} as ComponentMeta<typeof NesReactionRate>;
