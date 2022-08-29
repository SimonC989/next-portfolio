import { Box, Center, Title, Text, Anchor, Stack, Divider } from '@mantine/core';
import React from 'react';
import SocialGroup from '../Hero/SocialGroup/SocialGroup';
import ContactForm from './ContactForm/ContactForm';

const Contact: React.FC = (): JSX.Element => (
  <Box
    id="contact"
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[3],
    })}
    p={24}
  >
    <Title align="center" weight={400} mb="md">
      Let&#39;s Get In Touch
    </Title>
    <Center>
      <Stack spacing={0}>
        <Text align="center" mb="xs">
          Contact me at
        </Text>
        <Divider mb="md" />
        <div>
          {'Email: '}
          <Anchor href="mailto:SimonChan989@gmail.com">
            SimonChan989@gmail.com
          </Anchor>
        </div>
        <SocialGroup contact />
        <Text align="center">
          Or send me a quick email here
        </Text>
      </Stack>
    </Center>
    <Center>
      <ContactForm />
    </Center>
  </Box>
);

export default Contact;
