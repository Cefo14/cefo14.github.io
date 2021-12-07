import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesContainer from '../components/NesContainer';

export const Main = ({ title, text }: any) => (
  <NesContainer title={title}>
    { text }
  </NesContainer>
);

export default {
  title: 'NesContainer',
  args: {
    title: 'TITLE',
    text: 'TEXT',
  },
} as ComponentMeta<typeof NesContainer>;
