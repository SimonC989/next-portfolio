import { Box, Group, Text } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
import HeaderButton from './HeaderButton';

// const styles = (theme: MantineTheme): CSSObject => ({
//   padding: `${theme.spacing.md}px ${theme.spacing.xl}px ${theme.spacing.md}px`,
// });

const Header: React.FC = () => (
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
        <Text size="xl">Header</Text>
        <Group>
          <HeaderButton href="#top">Home</HeaderButton>
          <HeaderButton href="#projects">Projects</HeaderButton>
          <HeaderButton href="#test">Test</HeaderButton>
          <ColorSchemeToggle />
        </Group>
      </Group>
    </Box>
  );

export default Header;
