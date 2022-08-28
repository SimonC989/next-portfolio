import { ActionIcon, Anchor, Box, Group, Text, Title } from '@mantine/core';
import React from 'react';
import { IconArrowDown } from '@tabler/icons';
import Image from 'next/image';
import styles from './Hero.module.css';
import ProfilePhoto from '../../Assets/Simon.jpeg';
import SocialGroup from './SocialGroup/SocialGroup';

const Hero: React.FC = (): JSX.Element => (
  <Box
    id="home"
    sx={(theme) => ({
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[3],
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[2],
      justifyContent: 'center',
      alignItems: 'center',
      gap: '160px',
      marginTop: '88px',
      height: 'calc(100vh - 88px)',
    })}
  >
    <div className={styles.photoGroup}>
      <div style={{ position: 'relative', width: '400px', height: '400px' }}>
        <Image src={ProfilePhoto} layout="fill" objectFit="cover" style={{ borderRadius: '20px', zIndex: 1 }} priority />
      </div>
      <div className={styles.avatarBg} />
    </div>
    <div className={styles.intro}>
      <Title>
        Hey there!<br />
        I&#39;m Simon,<br />
        Software Engineer
      </Title>
      <Text size="lg">
        I&#39;m an aspiring developer aiming to create a great user experience.
        Most of my skills are in Front-End developement, but I have had some Full-stack experience.
      </Text>
      <div className={styles.icon}>
        <SocialGroup />
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
