import { ReactChild } from 'react';

export type MaxWidthType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface ContainerPropTypes {
  className?: string;
  maxWidth?: MaxWidthType;
  noPadding?: Boolean;
  children?: ReactChild | ReactChild[];
}

export default ContainerPropTypes;
