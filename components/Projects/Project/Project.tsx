import { Box, Spoiler, Title, Text, Anchor, Tooltip, ActionIcon, Group } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { IProjectList } from '../../../lib/projectList';

export type IModalCarousel = {
  image: string | StaticImageData,
  alt: string,
};

interface IProjectProps {
  project: IProjectList,
  setModalCarousel: React.Dispatch<React.SetStateAction<IModalCarousel[]>>,
  setActive: React.Dispatch<React.SetStateAction<boolean>>,
  index: number,
}

const Project: React.FC<IProjectProps> = (
    {
      project,
      setModalCarousel,
      setActive,
      index,
    }
  ): JSX.Element => (
  <Box
    sx={() => ({
      display: 'flex',
      margin: '60px',
      padding: '16px 0 16px',
      gap: '48px',
      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
    })}
  >
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[6],
        padding: '24px',
        borderRadius: '20px',
        width: '100%',
      })}
    >
      <Title size="h2" weight={400} align="center" sx={{ paddingBottom: '24px' }} mb={0}>
        {project.title}
      </Title>
      <Spoiler
        maxHeight={120}
        hideLabel="Show Less"
        showLabel="Show More"
        styles={(theme) => ({
          control:
            {
              color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[3],
              paddingTop: '8px',
            },
        })}
      >
        <div>
          <Text mb="md">
            {project.description.split('\n').map((paragraph: string, j: number) =>
              <p style={{ margin: '0 0 8px' }} key={project.title + j}>{paragraph}</p>
            )}
          </Text>
          <Group align="flex-end" mb="md">
            {project.github.map((github) =>
              <Tooltip label={github.label} key={github.label}>
                <ActionIcon
                  color="dark.2"
                  variant="subtle"
                  size="lg"
                  sx={(theme) => ({ '&:hover': { backgroundColor: theme.colors.dark[5] } })}
                  component="a"
                  href={github.link}
                  mt="sm"
                >
                  <IconBrandGithub size={48} />
                </ActionIcon>
              </Tooltip>
            )}
            {project.url.map((url) =>
              <Anchor href={url.link} key={url.label}>
                {url.label}
              </Anchor>
            )}
          </Group>
        </div>
      </Spoiler>
    </Box>

    <div style={{ cursor: 'pointer' }}>
      <Image
        src={project.image}
        alt={project.alt}
        height={500}
        width={850}
        onClick={() => {
          setActive(true);
          setModalCarousel(project.imageList as IModalCarousel[]);
        }}
      />
    </div>
  </Box>
);

export default Project;
