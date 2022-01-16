import { ComponentMeta } from '@storybook/react';

import NesText from '../components/NesText';

export const Main = ({ variant, component, text }: any) => (
  <div>
    <NesText
      variant={variant}
      component={component}
    >
      { text }
    </NesText>
  </div>
);

export default {
  title: 'NesText',
  args: {
    text: 'TEXT',
  },
  argTypes: {
    variant: {
      options: ['normal', 'primary', 'success', 'warning', 'error', 'disabled'],
      control: { type: 'radio' },
    },

    component: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'div'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof NesText>;
