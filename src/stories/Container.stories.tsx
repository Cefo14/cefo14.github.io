/* eslint-disable react/jsx-props-no-spreading */

import { ComponentMeta } from '@storybook/react';

import Container from '../components/Container';
import { MAX_WIDTH_TYPES } from '../components/Container/constants';

export const Main = ({
  children,
  ...props
}: any) => (
  <Container
    {...props}
  >
    <div
      style={{
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      { children }
    </div>
  </Container>
);

export default {
  title: 'Container',
  args: {
    noPadding: false,
    children: 'TEXT',
  },

  argTypes: {
    maxWidth: {
      options: Object.keys(MAX_WIDTH_TYPES),
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Container>;
