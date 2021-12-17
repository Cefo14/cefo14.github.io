import React, { FC, memo, useMemo } from 'react';

import NesProgress from '../NesProgress';
import { NesProgressVariant } from '../NesProgress/NesProgressPropTypes';

import NesProgressStatusPropTypes from './NesProgressStatusPropTypes';

const NesProgressStatus: FC<NesProgressStatusPropTypes> = ({
  value = 1,
  maxValue = 10,
}) => {
  const variant = useMemo<NesProgressVariant>(() => {
    let progress = (value * 100) / maxValue;
    progress = Math.floor(progress);

    if (progress <= 25) return 'error';
    if (progress <= 50) return 'warning';
    return 'success';
  }, [value, maxValue]);

  return (
    <NesProgress
      value={value}
      maxValue={maxValue}
      variant={variant}
    />
  );
};

export default memo(NesProgressStatus);
