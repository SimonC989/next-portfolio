import { Box, Title, Spoiler } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { projectList } from '../../lib/projectList';

const Projects: React.FC = () => (
  <Box
    id="projects"
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[4],
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[2],
      padding: '40px 0 8px',
    })}
  >
    <Title align="center" weight={400}>
      Projects
    </Title>
    {projectList.map((project) => (
      <Box
        sx={(theme) => ({
          display: 'flex',
          // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[4],
          margin: '60px',
          padding: '16px 0 16px',
          gap: '48px',
        })}
        key={project.title}
      >
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.dark[6],
            padding: '24px',
            borderRadius: '20px',
            width: '100%',
          })}
        >
          <Title size="h2" weight={400} align="center" sx={{ paddingBottom: '24px' }}>
            {project.title}
          </Title>
          <Spoiler
            maxHeight={200}
            hideLabel="Show Less"
            showLabel="Show More"
            styles={(theme) => ({
              control:
                { color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[7] },
            })}
          >
            {project.description}
          </Spoiler>
        </Box>
        <Image src={project.image} alt={project.alt} height={400} width={800} />
      </Box>
      ))}
  </Box>
);

export default Projects;
