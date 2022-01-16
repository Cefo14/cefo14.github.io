import { FC, memo } from 'react';
import clsx from 'clsx';

import BlinkPropTypes from './BlinkPropTypes';
import useStyles from './useStyles';

const Blink: FC<BlinkPropTypes> = ({
  enabled = false,
  children,
}) => {
  const styles = useStyles();
  return (
    <div
      className={clsx({
        [styles.blink]: enabled,
      })}
    >
      { children }
    </div>
  );
};

export default memo(Blink);
