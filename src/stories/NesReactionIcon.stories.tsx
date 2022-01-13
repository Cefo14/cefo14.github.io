import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesReactionIcon from '../components/NesReactionIcon';

export const Main = ({
  type,
  size,
  fillType,
}: any) => (
  <NesReactionIcon
    type={type}
    size={size}
    fillType={fillType}
  />
);

export default {
  title: 'NesReactionIcon',
  argTypes: {
    type: {
      options: ['heart', 'star', 'like'],
      control: { type: 'radio' },
      defaultValue: 'heart',
    },
    size: {
      options: ['is-small', 'is-medium', 'is-large'],
      control: { type: 'radio' },
      defaultValue: 'is-medium',
    },
    fillType: {
      options: ['', 'is-half', 'is-transparent', 'is-empty'],
      control: { type: 'radio' },
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof NesReactionIcon>;
