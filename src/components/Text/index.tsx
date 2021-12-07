import React, { FC, memo } from 'react';
import clsx from 'clsx';

import TextProps from './TextPropTypes';

const Text: FC<TextProps> = ({
  children,
  variant,
  component = 'div',
}) => {
  const TextTagComponent = component;

  return (
    <TextTagComponent
      className={clsx(
        'nes-text',
        { [`is-${variant}`]: Boolean(variant) },
      )}
    >
      { children }
    </TextTagComponent>
  );
};

export default memo(Text);
