import { FC, memo } from 'react';
import clsx from 'clsx';

import ContainerPropTypes from './ContainerPropTypes';
import { MAX_WIDTH_TYPES } from './constants';

import './Container.css';

const Container:FC<ContainerPropTypes> = ({
  className,
  maxWidth = 'lg',
  noPadding,
  children,
}) => {
  const maxWidthClassName = MAX_WIDTH_TYPES[maxWidth];
  return (
    <section
      className={clsx(
        'Container__root',
        { 'Container__root--no-padding': noPadding },
        maxWidthClassName,
        className,
      )}
    >
      { children }
    </section>
  );
};

export default memo(Container);
