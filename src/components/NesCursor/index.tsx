import { FC, memo } from 'react';
import clsx from 'clsx';

import NesCursorPropTypes from './NesCursorPropTypes';

const NesCursor: FC<NesCursorPropTypes> = ({
  from = 'left',
  children,
}) => (
  <div
    className={clsx(
      'nes-balloon nes-pointer is-dark',
      `from-${from}`,
    )}
  >
    { children }
  </div>
);

export default memo(NesCursor);
