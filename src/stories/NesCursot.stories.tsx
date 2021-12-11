import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesCursor from '../components/NesCursor';

export const Main = ({ text }: any) => (
  <NesCursor>
    { text }
  </NesCursor>
);

export default {
  title: 'NesCursor',
  args: {
    text: 'TEXT',
  },
} as ComponentMeta<typeof NesCursor>;
