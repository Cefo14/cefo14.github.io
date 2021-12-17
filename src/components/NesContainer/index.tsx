import React, { FC, memo } from 'react';
import clsx from 'clsx';

import NesContainerPropTypes from './NesContainerPropTypes';

const NesCointainer: FC<NesContainerPropTypes> = ({
  title,
  rounded = false,
  className = '',
  children,
}) => (
  <div
    className={clsx(
      'nes-container is-dark',
      className,
      {
        'with-title': Boolean(title),
        'is-rounded': rounded,
      },
    )}
  >
    { title && (
      <p className="title">
        { title }
      </p>
    )}
    <div>
      { children }
    </div>
  </div>
);

export default memo(NesCointainer);
