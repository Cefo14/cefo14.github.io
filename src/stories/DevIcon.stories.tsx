import { ComponentMeta } from '@storybook/react';

import DevIcon from '../components/DevIcon';

export const Main = ({
  icon,
}: any) => (
  <h1>
    <DevIcon
      icon={icon}
    />
  </h1>
);

export default {
  title: 'DevIcon',
  args: {
    icon: 'github',
  },
} as ComponentMeta<typeof DevIcon>;
