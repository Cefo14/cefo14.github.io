import { FC, memo } from 'react';

import NesReactionIcon from '../NesReactionIcon';

import NesReactionRatePropTypes, { NesReactionRateFillType } from './NesReactionRatePropTypes';

const NesReactionRate: FC<NesReactionRatePropTypes> = ({
  rate = 1,
  maxRate = 5,
  type = 'star',
  size = 'is-medium',
  className = '',
}) => (
  <div className={className}>
    {
      Array(maxRate).fill(null).map((value, index) => {
        const currentIndexRate = index + 1;
        let fillType: NesReactionRateFillType;

        if (
          rate !== currentIndexRate
          && Math.ceil(rate) === currentIndexRate
        ) {
          fillType = 'is-half';
        }

        else if (rate < currentIndexRate) {
          fillType = 'is-empty';
        }

        return (
          <NesReactionIcon
            key={currentIndexRate}
            type={type}
            size={size}
            fillType={fillType}
          />
        );
      })
    }
  </div>
);

export default memo(NesReactionRate);
