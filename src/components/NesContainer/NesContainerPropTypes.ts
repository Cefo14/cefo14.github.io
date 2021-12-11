import { ReactChild } from 'react';

interface NesContainerPropTypes {
  title?: string;
  rounded?: Boolean;
  children: ReactChild | ReactChild[];
}

export default NesContainerPropTypes;
