import React, { FC, memo } from 'react';
import clsx from 'clsx';

import 'devicon';

import DevIconPropTypes from './DevIconPropTypes';

const ICON_MAP = {
  github: 'devicon-github-original',
  javascript: 'devicon-javascript-plain colored',
  typescript: 'devicon-typescript-plain colored',
  angular: 'devicon-angularjs-plain colored',
  react: 'devicon-react-original colored',
  vue: 'devicon-vuejs-plain colored',
  nodejs: 'devicon-nodejs-plain colored',
  bash: 'devicon-bash-plain',
  docker: 'devicon-docker-plain colored',
  aws: 'devicon-amazonwebservices-original colored',
  postgresql: 'devicon-postgresql-plain colored',
  linkedin: 'devicon-linkedin-plain colored"',
};

const DevIcon: FC<DevIconPropTypes> = ({ icon, className = '' }) => (
  <i
    className={clsx(
      ICON_MAP[icon],
      className,
    )}
  />
);

export default memo(DevIcon);
