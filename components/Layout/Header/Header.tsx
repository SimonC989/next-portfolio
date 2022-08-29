import { Box, Group, Title } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
import HeaderButton from './HeaderButton';

const Header: React.FC = (): JSX.Element => (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.dark[1],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[5],
        padding: `${theme.spacing.md}px 60px ${theme.spacing.md}px`,
        position: 'fixed',
        top: 0,
        height: '88px',
        width: '100%',
        zIndex: 2,
      })}
    >
      <Group position="apart">
        <Title size="h2" weight={600}>Simon Chan</Title>
        <Group>
          <HeaderButton href="#home">Home</HeaderButton>
          <HeaderButton href="#projects">Projects</HeaderButton>
          <HeaderButton href="#contact">Contact</HeaderButton>
          <ColorSchemeToggle />
        </Group>
      </Group>
    </Box>
  );

export default Header;
