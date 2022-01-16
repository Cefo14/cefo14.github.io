import { ComponentMeta } from '@storybook/react';

import NesButton from '../components/NesButton';

export const Main = ({ variant, text }: any) => (
  <div>
    <NesButton
      variant={variant}
    >
      { text }
    </NesButton>
  </div>
);

export default {
  title: 'NesButton',
  args: {
    text: 'TEXT',
  },
  argTypes: {
    variant: {
      options: ['', 'primary', 'success', 'warning', 'error', 'disabled'],
      control: { type: 'radio' },
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof NesButton>;
