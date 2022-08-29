import { Box, Center, Title } from '@mantine/core';
import React from 'react';
import ContactForm from './ContactForm/ContactForm';

const Contact: React.FC = (): JSX.Element => (
  <Box
    id="contact"
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.dark[3],
    })}
    p={24}
  >
    <Title align="center" weight={400}>
      Let&#39;s Get In Touch
    </Title>
    <Center>
      <ContactForm />
    </Center>
  </Box>
);

export default Contact;
