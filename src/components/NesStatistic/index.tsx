import React, { FC, memo } from 'react';

import NesText from '../NesText';
import NesProgressStatus from '../NesProgressStatus';

import NesStatisticPropTypes from './NesStatisticPropTypes';

const NesStatistic: FC<NesStatisticPropTypes> = ({ name, value, maxValue }) => (
  <div>
    <NesText>
      { `${name} (${value}/${maxValue})` }
    </NesText>
    <NesProgressStatus
      value={value}
      maxValue={maxValue}
    />
  </div>
);

export default memo(NesStatistic);
