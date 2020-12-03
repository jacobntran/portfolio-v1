import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import introBackground from '../assets/intro-background.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '95%',
    background: `linear-gradient(
        to bottom,
        rgba(53, 53, 53, 0.45),
        rgba(53, 53, 53, 0.45)
      ),url(${introBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },
  header: {
    textAlign: 'center',
  },
  main: {
    fontWeight: 400,
    letterSpacing: '0.4rem',
    paddingTop: '12rem',
    fontSize: '7rem',
  },
  sub: {
    fontWeight: 300,
    letterSpacing: '0.2rem',
    fontSize: '3rem',
  },
  arrow: {
    '-moz-animation': '$bounce 2s infinite',
    ' -webkit-animation': '$bounce 2s infinite',
    animation: '$bounce 2s infinite',
    fontSize: '5rem',
    marginTop: '3rem',
  },
  '@keyframes bounce': {
    ' 0%, 20%, 50%, 80%, 100% ': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-30px)',
    },
    '60%': {
      transform: 'translateY(-15px)',
    },
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade in timeout={4000}>
        <div className={classes.header}>
          <Typography className={classes.main}>Jacob Tran</Typography>
          <Typography className={classes.sub}>
            Full Stack Web Developer
          </Typography>
          <KeyboardArrowDownIcon className={classes.arrow} />
        </div>
      </Fade>
    </div>
  );
};

export default Intro;