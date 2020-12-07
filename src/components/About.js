import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Container, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import gradPhoto from '../assets/grad-image.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '4.5rem 0',
    [theme.breakpoints.down('md')]: {
      padding: '3.6rem 0',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '3rem 0',
    },
  },
  header: {
    color: theme.palette.primary.main,
    fontWeight: '400',
    letterSpacing: '0.2rem',
    textAlign: 'center',
    marginBottom: '2.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
      marginBottom: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
    },
  },
  container: {
    display: 'flex',
    color: theme.palette.text.secondary,
    alignItems: 'center',
    // [theme.breakpoints.down('md')]: {
    //   margin: '0 0.5rem',
    // },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: '20rem',
    height: '20rem',
    borderRadius: '50%',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
      width: '16rem',
      height: '16rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '12rem',
      height: '12rem',
    },
  },
  body: {
    marginLeft: '8rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      marginLeft: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 1rem 0rem 1rem',
    },
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  extra: {
    display: 'flex',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.5rem',
    },
  },
  list: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    color: theme.palette.primary.main,
    fontWeight: '300',
    fontSize: '1.1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  icon: {
    transform: 'translateY(0)',
    transition: '0.5s',
    margin: '0.4rem',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary.main,
      transform: ' translateY(-0.2rem)',
      transition: '0.5s',
    },
    [theme.breakpoints.down('sm')]: {
      size: 'small',
    },
  },
}));

const About = () => {
  const classes = useStyles();

  const tech1 = ['HTML', 'CSS', 'Javascript'];

  const tech2 = ['Node.js', 'MongoDB', 'React & React-Redux'];

  return (
    <div id='about' className={classes.root}>
      <Container>
        <Typography className={classes.header} variant='h2'>
          About Me
        </Typography>
        <div className={classes.container}>
          <img
            src={gradPhoto}
            alt='Jacob Tran Grad'
            className={classes.image}
          />
          <div className={classes.body}>
            <Typography className={classes.text}>
              Hey there! 👋 My name is Jacob Tran and I graduated from the
              University of California, Irvine with a degree in business
              economics. After graduating, I quickly realized economics was not
              a field I wanted to pursue so I attended the{' '}
              <Link href='https://bootcamp.ce.uci.edu/coding/'>
                UCI Full Stack Bootcamp
              </Link>{' '}
              in 2019. Through the bootcamp I discovered a passion in coding and
              have been pursuing a career in the field ever since. To contact me
              for further discussion you can reach me{' '}
              <Link href='https://github.com/jacobntran' target='_blank'>
                here!
              </Link>
            </Typography>
            <div className={classes.extra}>
              <div style={{ width: '50%' }}>
                <Typography className={classes.text}>
                  Technologies I Use:
                </Typography>
                <ul className={classes.list}>
                  {tech1.map((tech) => (
                    <li className={classes.item} key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className={classes.list}>
                  {tech2.map((tech) => (
                    <li className={classes.item} key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ width: '50%' }}>
                <Typography className={classes.text}>
                  Platforms I Use:
                </Typography>
                <Tooltip title='GitHub'>
                  <Link href='https://github.com/jacobntran' target='_blank'>
                    <GitHubIcon fontSize='large' className={classes.icon} />
                  </Link>
                </Tooltip>
                <Tooltip title='LinkedIn'>
                  <Link
                    href='https://www.linkedin.com/in/jacobntran/'
                    target='_blank'
                  >
                    <LinkedInIcon fontSize='large' className={classes.icon} />
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
