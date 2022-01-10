import { FC, memo } from 'react';
import clsx from 'clsx';

import NesButtonPropTypes from './NesButtonPropTypes';

const NesButton: FC<NesButtonPropTypes> = ({
  variant,
  children,
  type = 'button',
  ...props
}) => (
  <button
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={clsx(
      'nes-btn',
      {
        [`is-${variant}`]: Boolean(variant),
      },
    )}
  >
    { children }
  </button>
);

export default memo(NesButton);
