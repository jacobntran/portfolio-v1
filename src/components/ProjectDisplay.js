import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Tooltip, Grid } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2.5rem',
    },
  },
  icon_main: {
    width: '17rem',
    height: '17rem',
    color: theme.palette.text.primary,
    transform: 'translateY(0)',
    transition: '0.5s',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: ' translateY(-0.2rem)',
      transition: '0.5s',
    },
    [theme.breakpoints.down('md')]: {
      width: '13rem',
      height: '13rem',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  textContainer: {
    marginLeft: '7rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 1rem',
    },
  },
  title: {
    letterSpacing: '0.1rem',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    },
  },
  text_main: {
    fontSize: '1.1rem',
    lineHeight: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  text_sub: {
    color: theme.palette.primary.main,
  },
  icon_sub: {
    marginRight: '1rem',
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
      transition: '0.5s',
    },
  },
}));

const ProjectDisplay = ({
  name,
  description,
  component: Component,
  github,
  website,
  tech,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href={website} target='_blank'>
        <Component className={classes.icon_main} />
      </Link>
      <Grid
        container
        direction='column'
        spacing={1}
        className={classes.textContainer}
      >
        <Grid item>
          <Typography variant='h5' color='primary' className={classes.title}>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text_main}>
            {description}
            <br />
            <span className={classes.text_sub}>{tech.join(' | ')}</span>
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip title='Code'>
            <Link href={github} target='_blank' className={classes.icon_sub}>
              <CodeIcon fontSize='large' />
            </Link>
          </Tooltip>
          <Tooltip title='Website'>
            <Link href={website} target='_blank' className={classes.icon_sub}>
              <WebIcon fontSize='large' />
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectDisplay;
