import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nesText: {
    color: 'var(--primary-contrast-text)',
    '& *': {
      fontSize: 'inherit',
    },
  },
});

export default useStyles;
