import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TheatersIcon from '@material-ui/icons/Theaters';

import ProjectDisplay from './ProjectDisplay';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: '4.5rem 0',
    [theme.breakpoints.down('md')]: {
      padding: '3.6rem 0',
    },
    [theme.breakpoints.down('sm')]: {
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
}));

const Projects = () => {
  const classes = useStyles();

  const projects = [
    {
      name: 'Covid Logger',
      description:
        'A social networking web app that allows loved ones to log and view each others Covid-19 results. Keep track of the health of those you interact with most. Create events with friends and meet only with those that have tested negative recently.',
      icon: InsertChartIcon,
      github: 'https://github.com/jacobntran/covid-logger',
      website: 'https://covid-logger.herokuapp.com/',
      tech: [
        'React',
        'React-Redux',
        'Node.js',
        'Express',
        'MongoDB',
        'Socket IO',
        'Material UI',
      ],
    },
    {
      name: 'Projectify',
      description:
        'With remote workspaces becoming the current norm, this app can be used to create project boards with your fellow peers and help to effeciently complete work. Add tasks to projects for more organized group work. Includes live updates and chat with each project for real time collaboration.',
      icon: AssignmentIcon,
      github: 'https://github.com/jacobntran/projectify',
      website: 'https://projectify-app.herokuapp.com/',
      tech: [
        'React',
        'React-Redux',
        'Node.js',
        'Express',
        'MongoDB',
        'Google OAuth',
        'Socket IO',
        'Material UI',
      ],
    },
    {
      name: 'RecoMovie',
      description:
        "A personal movie recommendation application for all your movie viewing needs. Use the provided filter to recommend you a movie on the days where you can't seem to find something to watch. Also included are features to search movies by title,   and nearby theatre showtimes in your area.",
      icon: TheatersIcon,
      github: 'https://github.com/jacobntran/recomovie',
      website: 'https://jacobntran.github.io/recomovie/',
      tech: ['React', 'Styled-Components', 'TMDB API', 'TMS API'],
    },
  ];

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant='h2' className={classes.header}>
          Projects
        </Typography>
        {projects.map((project) => {
          return (
            <ProjectDisplay
              name={project.name}
              description={project.description}
              component={project.icon}
              github={project.github}
              website={project.website}
              tech={project.tech}
              key={project.name}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Projects;
