import React, { FC, memo } from 'react';
import clsx from 'clsx';

import useStyles from './useStyles';

import NesTextProps from './NesTextPropTypes';

const NesText: FC<NesTextProps> = ({
  children,
  variant = 'normal',
  component = 'div',
}) => {
  const styles = useStyles();
  const TextTagComponent = component;

  return (
    <TextTagComponent
      className={clsx(
        'nes-text',
        {
          [`is-${variant}`]: variant !== 'normal',
          'text-color': variant === 'normal',
        },
        styles.childFontSize,
      )}
    >
      { children }
    </TextTagComponent>
  );
};

export default memo(NesText);
