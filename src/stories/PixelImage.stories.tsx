import { ComponentMeta } from '@storybook/react';

import PixelImage from '../components/PixelImage';

export const Main = ({
  src,
  width,
  height,
  blur,
  scale,
}: any) => (
  <PixelImage
    src={src}
    width={width}
    height={height}
    blur={blur}
    scale={scale}
  />
);

export default {
  title: 'PixelImage',
  args: {
    src: 'https://dummyimage.com/600x400/000000/ffffff&text=Text+Pixel+Image',
    width: 100,
    height: 100,
    blur: 50,
    scale: 0.01,
  },
} as ComponentMeta<typeof PixelImage>;
