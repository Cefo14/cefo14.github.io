import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesContainer from '../components/NesContainer';

export const Main = ({ title, text, rounded }: any) => (
  <NesContainer
    title={title}
    rounded={rounded}
  >
    { text }
  </NesContainer>
);

export default {
  title: 'NesContainer',
  args: {
    title: 'TITLE',
    text: 'TEXT',
    rounded: false,
  },
} as ComponentMeta<typeof NesContainer>;
