import { Box, Title, Text, Anchor, Stack, Divider, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMail, IconPhone } from '@tabler/icons';
import React from 'react';
import SocialGroup from '../Hero/SocialGroup/SocialGroup';
import ContactForm from './ContactForm/ContactForm';

const Contact: React.FC = (): JSX.Element => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const { dark } = theme.colors;
  const darkMode = colorScheme === 'dark';

  function getDividerColor() {
    return darkMode ? dark[4] : dark[6];
  }

  return (
    <Box
      id="contact"
      sx={{ backgroundColor: darkMode ? dark[8] : dark[2] }}
      p={24}
    >
      <Divider
        mb="xl"
        labelPosition="center"
        label={
          <Title align="center" weight={400} mb="md">
            Let&#39;s Get In Touch
          </Title>
        }
        color={getDividerColor()}
      />
      <Box
        sx={() => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '160px',
        })}
      >
        <Stack spacing={0}>
          <Text align="center" mb="xs">
            Contact me at
          </Text>
          <Divider
            mb="md"
            color={getDividerColor()}
          />
          <div>
            <Group mb="sm">
              <IconMail />
              <Anchor href="mailto:SimonChan989@gmail.com">
                SimonChan989@gmail.com
              </Anchor>
            </Group>
            <Group mb="sm">
              <IconPhone />
              (415)866-5246
            </Group>
          </div>
        </Stack>
        <ContactForm />
      </Box>
      <Divider
        my="xl"
        labelPosition="center"
        label={
          <SocialGroup contact />
        }
        color={getDividerColor()}
      />
    </Box>
  );
};

export default Contact;
