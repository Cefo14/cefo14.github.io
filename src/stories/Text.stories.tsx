import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Text from '../components/Text';

export const Main = ({ variant, component, text }: any) => (
  <div>
    <Text
      variant={variant}
      component={component}
    >
      { text }
    </Text>
  </div>
);

export default {
  title: 'Text',
  args: {
    text: 'TEXT',
  },
  argTypes: {
    variant: {
      options: ['', 'primary', 'success', 'warning', 'error', 'disabled'],
      control: { type: 'radio' },
    },

    component: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'div'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Text>;
