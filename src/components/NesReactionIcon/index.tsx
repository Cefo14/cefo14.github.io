import { FC, memo } from 'react';
import clsx from 'clsx';

import NesReactionIconPropTypes from './NesReactionIconPropTypes';

const NesReactionIcon: FC<NesReactionIconPropTypes> = ({
  type = 'heart',
  size = 'is-medium',
  fillType = '',
  className = '',
}) => (
  <i
    className={clsx(
      'nes-icon',
      type,
      size,
      fillType,
      className,
    )}
  />
);

export default memo(NesReactionIcon);
