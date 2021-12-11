import React, { FC } from 'react';

import NesCursorPropTypes from './NesCursorPropTypes';

const NesCursor: FC<NesCursorPropTypes> = ({ children }) => (
  <div className="nes-balloon from-left nes-pointer is-dark">
    { children }
  </div>
);

export default NesCursor;
