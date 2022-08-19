import { ActionIcon, Anchor, Box, Group, Text, Title, Tooltip } from '@mantine/core';
import React from 'react';
import { IconBrandGithub, IconBrandGitlab, IconBrandLinkedin, IconArrowDown } from '@tabler/icons';
import styles from './Hero.module.css';

const Hero = () => (
  <Box
    sx={(theme) => ({
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[3],
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[2],
      justifyContent: 'center',
      alignItems: 'center',
      gap: '160px',
      height: 'calc(100vh - 88px)',
    })}
  >
    <div className={styles.photoGroup}>
      <div className={styles.avatarBg} />
      <div className={styles.avatar} />
    </div>
    <div className={styles.intro}>
      <Title>
        Hey there!<br />
        I&#39;m Simon,<br />
        Software Engineer
      </Title>
      <Text size="lg">
        I&#39;m an aspiring developer aiming to create a great user experience.
        Most of my skills lie in Front-End developement, but I have had some Full-stack experience.
      </Text>
      <div className={styles.icon}>
        <Group
          position="center"
          spacing="xl"
          sx={(theme) => ({
            padding: theme.spacing.md,
          })}
        >
          <Tooltip label="GitHub">
            <ActionIcon
              color="dark.2"
              variant="subtle"
              size="lg"
              sx={(theme) => ({ '&:hover': { backgroundColor: theme.colors.dark[5] } })}
              component="a"
              href="https://github.com/SimonC989"
            >
              <IconBrandGithub size={48} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="GitLab">
            <ActionIcon
              color="dark.2"
              variant="subtle"
              size="lg"
              sx={(theme) => ({ '&:hover': { backgroundColor: theme.colors.dark[5] } })}
            >
              <IconBrandGitlab size={48} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <ActionIcon
              color="dark.2"
              variant="subtle"
              size="lg"
              sx={(theme) => ({ '&:hover': { backgroundColor: theme.colors.dark[5] } })}
            >
              <IconBrandLinkedin size={48} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Anchor href="#projects" underline={false} color="dark.3">
          <Group position="center" spacing={0}>
            <Text size="sm">
              Jump to projects!
            </Text>
            <ActionIcon color="dark.3">
              <IconArrowDown size={16} />
            </ActionIcon>
          </Group>
        </Anchor>
      </div>
    </div>
  </Box>
);

export default Hero;
