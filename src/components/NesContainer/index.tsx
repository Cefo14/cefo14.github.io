import React, { FC, memo } from 'react';
import clsx from 'clsx';

import NesContainerPropTypes from './NesContainerPropTypes';

const NesCointainer: FC<NesContainerPropTypes> = ({ title, children }) => (
  <div
    className={clsx(
      'nes-container is-dark',
      { 'with-title': Boolean(title) },
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
