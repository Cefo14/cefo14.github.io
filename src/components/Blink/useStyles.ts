import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@keyframes blink': {
    '0%': {
      opacity: 0,
    },
    '25%': {
      opacity: 0.25,
    },
    '50%': {
      opacity: 0.5,
    },
    '75%': {
      opacity: 0.75,
    },
    '100%': {
      opacity: 1,
    },
  },

  blink: {
    animation: 'blink 1.5s ease-in-out infinite',
  },
});

export default useStyles;
