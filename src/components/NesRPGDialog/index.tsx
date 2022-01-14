import { FC, memo, useMemo } from 'react';
import { animated, useTransition } from 'react-spring';

import NesText from '../NesText';
import useStyles from './useStyles';
import NesRPGDialogPropTypes from './NesRPGDialogPropTypes';

const NesRPGDialog: FC<NesRPGDialogPropTypes> = ({ children = '' }) => {
  const styles = useStyles();

  const letters = useMemo(
    () => (
      children
        .split('')
        .map((letter, index) => ({
          item: letter,
          key: `${letter}${index}`,
        }))
    ),
    [children],
  );

  const transitions = useTransition(letters, {
    trail: 20,
    from: { display: 'none' },
    enter: { display: '' },
  });

  return (
    <NesText className={styles.nestRPGDialog}>
      {
        transitions((style, item) => (
          <animated.span
            key={item.key}
            style={style}
          >
            {item.item}
          </animated.span>
        ))
      }
    </NesText>
  );
};
export default memo(NesRPGDialog);
