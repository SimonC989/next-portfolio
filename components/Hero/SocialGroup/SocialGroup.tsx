import React from 'react';
import { ActionIcon, Group, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconBrandGithub, IconBrandGitlab, IconBrandLinkedin } from '@tabler/icons';

interface ISocialGroupProps {
  contact?: boolean
}

const SocialGroup: React.FC<ISocialGroupProps> = ({ contact }): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  const list = [
    {
      label: 'GitHub',
      link: 'https://github.com/',
      icon: <IconBrandGithub size={48} />,
    },
    {
      label: 'GitLab',
      link: 'https://linkedin.com/',
      icon: <IconBrandGitlab size={48} />,
    },
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com/',
      icon: <IconBrandLinkedin size={48} />,
    },
  ];

  return (
    <div>
      <Group
        position="center"
        spacing="xl"
        sx={(theme) => ({
          padding: theme.spacing.md,
        })}
      >
        {list.map(social =>
          <Tooltip label={social.label} key={social.label}>
            <ActionIcon
              color={contact ? (colorScheme === 'dark' ? 'dark.2' : 'dark.6') : 'dark.2'}
              variant="subtle"
              size="lg"
              sx={(theme) => ({
                '&:hover':
                  contact ?
                    { backgroundColor: colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[3] }
                    :
                    { backgroundColor: theme.colors.dark[5] },
              })}
              component="a"
              href={social.link}
            >
              {social.icon}
            </ActionIcon>
          </Tooltip>
        )}
      </Group>
    </div>
  );
};

export default SocialGroup;
