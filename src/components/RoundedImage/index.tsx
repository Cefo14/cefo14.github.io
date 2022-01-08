import React, { FC, memo } from 'react';

import RoundedImagePropTypes from './RoundedImagePropTypes';
import useStyles from './useStyles';

const RoundedImage: FC<RoundedImagePropTypes> = ({
  alt = '',
  src = '',
  diameter = 100,
}) => {
  const styles = useStyles();

  return (
    <img
      alt={alt}
      src={src}
      width={diameter}
      height={diameter}
      className={styles.roundedImage}
    />
  );
};

export default memo(RoundedImage);
