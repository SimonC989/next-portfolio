import { Box, Title, Text, Center, Container, Spoiler } from '@mantine/core';
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Something',
      description: 'ABC',
      image: '',
    },
    {
      title: 'Dashboard',
      description: 'XYZ',
      image: '',
    },
  ];

  return (
    <Box
      id="projects"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[4],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[2],
      })}
    >
      {projectList.map((project) => (
        <Box
          sx={() => ({
            // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[4],
            // color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[2],
            padding: '60px',
          })}
        >
          <Center>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.dark[6],
                // color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[2],
                // padding: '60px',
                width: '100%',
              })}
            >
              <Title size={60} align="center">
                {project.title}
              </Title>
              <Spoiler maxHeight={200} hideLabel="Show Less" showLabel="Show More">
                {project.description}
              </Spoiler>
            </Box>
          </Center>
        </Box>
       ))}
    </Box>
  );
};

export default Projects;
