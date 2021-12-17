import React, { FC, memo } from 'react';
import clsx from 'clsx';

import NesProgressPropTypes from './NesProgressPropTypes';

const NesProgress: FC<NesProgressPropTypes> = ({
  value = 1,
  maxValue = 10,
  variant = 'normal',
}) => (
  <progress
    className={clsx(
      'nes-progress is-dark',
      {
        [`is-${variant}`]: variant !== 'normal',
      },
    )}
    value={value}
    max={maxValue}
  />
);

export default memo(NesProgress);
