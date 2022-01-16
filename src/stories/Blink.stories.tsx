import { ComponentMeta } from '@storybook/react';

import Blink from '../components/Blink';

export const Main = ({
  enabled,
  children,
}: any) => (
  <Blink
    enabled={enabled}
  >
    <div style={{ color: 'yellow' }}>
      { children }
    </div>
  </Blink>
);

export default {
  title: 'Blink',
  args: {
    enabled: true,
    children: 'TEXT',
  },
} as ComponentMeta<typeof Blink>;
