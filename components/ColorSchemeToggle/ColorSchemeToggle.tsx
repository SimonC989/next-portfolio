import { ActionIcon, Group, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Group position="center">
      <Tooltip label={dark ? 'Toggle to light mode' : 'Toggle to dark mode'}>
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="xl"
          sx={(theme) => ({
            backgroundColor:
              dark ? theme.colors.dark[6] : theme.colors.dark[2],
            color:
              dark ? theme.colors.yellow[4] : theme.colors.cyan[6],
            '&:hover': {
              backgroundColor:
                dark ? theme.colors.dark[5] : theme.colors.dark[3],
            },
          })}
        >
          {colorScheme === 'dark' ? (
            <IconSun size={20} stroke={1.5} />
          ) : (
            <IconMoonStars size={20} stroke={1.5} />
          )}
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
