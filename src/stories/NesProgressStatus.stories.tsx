import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesProgressStatus from '../components/NesProgressStatus';

export const Main = ({ value, maxValue }: any) => (
  <NesProgressStatus
    value={value}
    maxValue={maxValue}
  />
);

export default {
  title: 'NesProgressStatus',
  args: {
    value: 1,
    maxValue: 10,
  },
} as ComponentMeta<typeof NesProgressStatus>;
