import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    '& > *': {
      marginBottom: 'calc(var(--spacing) * 4) !important',
    },
  },

  titleSection: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing)',
  },

  iconLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },

  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 'calc(var(--spacing) * 2)',
  },

  avatarContainer: {
    flexGrow: 1,
    '& > div': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
  },

  roleNameContainer: {
    flexGrow: 2,
    display: 'grid',
    gap: 'calc(var(--spacing) * 2)',
  },

  descriptionSection: {

  },

  descriptionContainer: {
    display: 'grid',
    gap: 'calc(var(--spacing) * 2)',
  },

  dialogContainer: {
    minHeight: '100px',
  },

  nextButtonContainer: {
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },

  statisticSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'calc(var(--spacing) * 2)',
  },

  statisticContainer: {
    flexGrow: 1,
    '& > *:not(:last-child)': {
      marginBottom: 'calc(var(--spacing) * 2)',
    },
  },

  statisticImageContainer: {
    flexGrow: 1,
  },

  skillsSection: {

  },

  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // gap: 'calc(var(--spacing) * 2)', // TODO ?
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
});

export default useStyles;
