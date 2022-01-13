import React from 'react';
import { ComponentMeta } from '@storybook/react';

import SkillBadge from '../components/SkillBadge';

export const Main = ({
  title,
  icon,
  rate,
}: any) => (
  <SkillBadge
    title={title}
    icon={icon}
    rate={rate}
  />
);

export default {
  title: 'SkillBadge',
  args: {
    title: 'Angular',
    icon: 'angular',
    rate: 1,
  },
} as ComponentMeta<typeof SkillBadge>;
