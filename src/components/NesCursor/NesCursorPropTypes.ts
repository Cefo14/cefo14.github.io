import { ReactChild } from 'react';

interface NesCursorPropTypes {
  from?: 'left' | 'right';
  children: ReactChild | ReactChild[];
}

export default NesCursorPropTypes;
