import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  // Containers
  container: {
    width: '75%',
    maxWidth: '1080px',
    margin: '0 auto',
    '& > *': {
      marginBottom: '32px !important',
    },
  },

  roleNameContainer: {
    '& > *:not(:last-child)': {
      marginBottom: '40px',
    },
  },

  descriptionContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minHeight: '160px',
    flexDirection: 'row',
  },

  statisticContainer: {
    height: '100%',
    '& > *:not(:last-child)': {
      marginBottom: '24px !important',
    },
  },

  // Fixers
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  githubIcon: {
    marginLeft: '8px',
  },

  nextButtonContainer: {
    alignSelf: 'flex-end',
  },

  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  skillsContainer: {

  },

  iconLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },

  avatar: {

  },

  // Media queries
  '@media (max-width: 767px)': {
    container: {
      width: '90%',
    },

    descriptionContainer: {
      flexDirection: 'column',
      minHeight: '425px',
    },

    chartContainer: {
      width: 'auto',
    },

    avatar: {
      margin: '16px 0px !important',
    },
  },
});

export default useStyles;
