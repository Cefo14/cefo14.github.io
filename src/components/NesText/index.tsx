import React, { FC, memo } from 'react';
import clsx from 'clsx';

import NesTextProps from './NesTextPropTypes';

const NesText: FC<NesTextProps> = ({
  children,
  variant = 'text',
  component = 'div',
}) => {
  const TextTagComponent = component;

  return (
    <TextTagComponent
      className={clsx(
        'nes-text',
        {
          [`is-${variant}`]: Boolean(variant),
          'text-color': variant === 'text',
        },
      )}
    >
      { children }
    </TextTagComponent>
  );
};

export default memo(NesText);
