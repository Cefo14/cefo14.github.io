import { FC, memo } from 'react';

import NesContainer from '../NesContainer';
import DevIcon from '../DevIcon';
import NesReactionRate from '../NesReactionRate';
import NesText from '../NesText';

import useStyles from './useStyles';

import SkillBadgePropTypes from './SkillBadgePropTypes';

const SkillBadge: FC<SkillBadgePropTypes> = ({
  icon,
  title = '',
  rate = 0,
}) => {
  const styles = useStyles();

  return (
    <NesContainer
      rounded
      className={styles.nesContainer}
    >
      <DevIcon
        icon={icon}
        className={styles.devIcon}
      />
      <NesText>
        { title }
      </NesText>
      <NesReactionRate
        size="is-medium"
        className={styles.nesReactionRate}
        maxRate={3}
        rate={rate}
      />
    </NesContainer>
  );
};

export default memo(SkillBadge);
