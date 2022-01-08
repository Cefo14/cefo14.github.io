import React from 'react';
import { ComponentMeta } from '@storybook/react';

import RoundedImage from '../components/RoundedImage';

export const Main = ({
  src,
  diameter,
}: any) => (
  <RoundedImage
    alt="RoundedImage-story"
    src={src}
    diameter={diameter}
  />
);

export default {
  title: 'RoundedImage',
  args: {
    src: 'https://dummyimage.com/600x400/000000/ffffff&text=Rounded+Image',
    diameter: 100,
  },
} as ComponentMeta<typeof RoundedImage>;
