import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Stack, Textarea, TextInput } from '@mantine/core';
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
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.dark[3],
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
        />
        <Center>
          <Stack>
            <Button
              type="submit"
              variant="light"
              rightIcon={sentSuccessful ? <IconCheck size={18} /> : null}
              loaderPosition="right"
              loading={loading}
            >
              Send
            </Button>
            <div style={{ color: 'red' }}>
              {sentError || null}
            </div>
          </Stack>
        </Center>
      </form>
    </Box>
  );
};

export default ContactForm;
