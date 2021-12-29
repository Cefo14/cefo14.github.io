import React from 'react';
import { ComponentMeta } from '@storybook/react';

import NesRPGDialog from '../components/NesRPGDialog';

export const Main = ({ message }: any) => (
  <NesRPGDialog>
    {message}
  </NesRPGDialog>
);

export default {
  title: 'NesRPGDialog',
  args: {
    message: 'TEXT',
  },
} as ComponentMeta<typeof NesRPGDialog>;
