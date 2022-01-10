import { ReactChild } from 'react';

interface NesContainerPropTypes {
  title?: string;
  rounded?: Boolean;
  className?: string;
  children?: ReactChild | ReactChild[] | Element | Element[];
}

export default NesContainerPropTypes;
