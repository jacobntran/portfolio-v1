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
  },
  title: {
    letterSpacing: '0.1rem',
    fontWeight: '500',
  },
  text_main: {
    fontSize: '1.1rem',
    lineHeight: '2rem',
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
        style={{ marginLeft: '7rem' }}
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
