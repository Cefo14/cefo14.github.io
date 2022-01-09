import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  childFontSize: {
    '& *': {
      fontSize: 'inherit',
    },
  },
});

export default useStyles;
