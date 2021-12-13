import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '80%',
    margin: '0 auto',
    '& > *': {
      marginBottom: '32px !important',
    },
  },
});

export default useStyles;
