import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nesContainer: {
    width: 'fit-content',
    minWidth: '182px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

    '& > *:not(:last-child)': {
      marginBottom: '12px',
    },
  },

  devIcon: {
    fontSize: '50px',
  },

  nesReactionRate: {
    '& > i': {
      marginRight: '24px !important',
      marginBottom: '24px !important',
      transform: 'scale(2)!important',
    },
  },
});

export default useStyles;
