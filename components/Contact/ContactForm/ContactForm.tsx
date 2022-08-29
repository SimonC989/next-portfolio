import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Stack, Textarea, TextInput, Text } from '@mantine/core';
import { send } from '@emailjs/browser';
import { IconCheck } from '@tabler/icons';
import { useTimeout } from '@mantine/hooks';

const ContactForm: React.FC = (): JSX.Element => {
  const [form, setForm] = useState({
    userName: '',
    userEmail: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [sentSuccessful, setSentSuccessful] = useState(false);
  const [sentError, setSentError] = useState('');
  const { start } = useTimeout(() => setSentSuccessful(false), 3000);

  useEffect(() => {
    if (sentSuccessful === true) {
      start();
    }
  }, [sentSuccessful]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setLoading(true);

    send(
      'service_so2qt2s',
      'template_d420l3t',
      form,
      'oO9xYAPQrYSSP2O8I'
    )
      .then(() => {
        // console.log('SUCCESS!', response.status, response.text);
        setLoading(false);
        setSentSuccessful(true);
        setForm({
          userName: '',
          userEmail: '',
          message: '',
        });
        setSentError('');
      })
      .catch((err) => {
        // console.log('FAILED...', err);
        setSentError(err);
      });
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.dark[4],
        borderRadius: '20px',
        width: '50%',
      })}
      p="md"
      my="xl"
    >
      <form onSubmit={sendEmail}>
        <TextInput
          label="Name"
          name="userName"
          placeholder="Name"
          radius="md"
          error=""
          onChange={handleChange}
          required
          mb="md"
          sx={(theme) => ({
            input: {
              '&::placeholder': { color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[5] },
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[3],
            },
          })}
        />
        <TextInput
          type="email"
          label="Email"
          name="userEmail"
          placeholder="hello@awesome.com"
          radius="md"
          error=""
          onChange={handleChange}
          required
          mb="md"
          sx={(theme) => ({
            input: {
              '&::placeholder': { color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[5] },
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[3],
            },
          })}
        />
        <Textarea
          placeholder="Say Hi! Let me know you're favorite boardgame."
          label="Message"
          radius="md"
          error=""
          autosize
          minRows={3}
          maxRows={6}
          required
          mb="xl"
          styles={(theme) => ({
            input: {
              '&::placeholder': { color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[5] },
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[3],
            },
          })}
        />
        <Center>
          <Stack align="center" spacing="xs">
            <Button
              type="submit"
              variant="light"
              rightIcon={sentSuccessful ? <IconCheck size={18} /> : null}
              loaderPosition="right"
              loading={loading}
            >
              Send
            </Button>
            {sentError ? (
              <Text
                sx={(theme) => ({
                  color: theme.colorScheme === 'dark' ? theme.colors.red[6] : theme.colors.red[4],
                })}
                p={8}
              >
                {sentError}
              </Text>
            ) : null }
          </Stack>
        </Center>
      </form>
    </Box>
  );
};

export default ContactForm;
