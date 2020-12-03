import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import gradPhoto from '../assets/grad-image.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '6.5rem 0',
  },
  header: {
    color: theme.palette.primary.main,
    fontWeight: '400',
    letterSpacing: '0.2rem',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    marginTop: '3rem',
    color: theme.palette.text.secondary,
    alignItems: 'center',
  },
  image: {
    width: '20rem',
    height: '20rem',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  body: {
    marginLeft: '8rem',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontWeight: '400',
    fontSize: '1.1rem',
    lineHeight: '2rem',
  },
  extra: {
    display: 'flex',
    marginTop: '1rem',
  },
  list: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    color: theme.palette.primary.main,
    fontWeight: '300',
    fontSize: '1.1rem',
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
  },
}));

const About = () => {
  const classes = useStyles();

  const tech1 = ['HTML', 'CSS', 'Javascript'];

  const tech2 = ['Node.js', 'MongoDB', 'React & React-Redux'];

  return (
    <div id='about' className={classes.root}>
      <Typography className={classes.header} variant='h2'>
        About Me
      </Typography>
      <div className={classes.container}>
        <img src={gradPhoto} alt='Jacob Tran Grad' className={classes.image} />
        <div className={classes.body}>
          <Typography className={classes.text}>
            Hey there! 👋 My name is Jacob Tran and I graduated from the
            University California, Irvine with a degree in business economics.
            After graduating I quickly realized economics was not a field I
            wanted to pursue so I attended the{' '}
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
              <Typography className={classes.text}>Platforms I Use:</Typography>
              <Link href='https://github.com/jacobntran' target='_blank'>
                <GitHubIcon fontSize='large' className={classes.icon} />
              </Link>
              <Link
                href='https://www.linkedin.com/in/jacobntran/'
                target='_blank'
              >
                <LinkedInIcon fontSize='large' className={classes.icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
