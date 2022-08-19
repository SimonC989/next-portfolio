import { Button } from '@mantine/core';

interface Props {
  href?: string,
  children?: React.ReactNode;
}

const HeaderButton: React.FC<Props> = ({ href, children }) => (
  <Button
    variant="subtle"
    color="dark"
    size="lg"
    styles={(theme) => ({
      root: {
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.dark[3],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[5],
        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[2],
        },
      },
    })}
    compact
    component="a"
    href={href}
  >
    {children}
  </Button>
);

export default HeaderButton;
