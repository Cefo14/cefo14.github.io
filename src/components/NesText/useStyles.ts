import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nesText: {
    '& *': {
      fontSize: 'inherit',
    },
  },
});

export default useStyles;
