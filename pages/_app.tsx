import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, MantineThemeOverride } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Layout from '../components/Layout/Layout';
import '../styles/global.css';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const myTheme: MantineThemeOverride = {
    colorScheme,
    colors: {
      dark: ['#F8FAFC', '#F1F5F9', '#E2E8F0', '#CBD5E1', '#94A3B8', '#64748B', '#475569', '#334155', '#1E293B', '#0F172A'],
    },
    primaryColor: 'cyan',
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Portfolio presenting projects done by Simon Chan" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:image" content="Portfolio.png" />
        <meta property="og:description" content="My Portfolio" />
        {/* <meta property="og:url" content="//www.example.com/URL of the article" /> */}
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={myTheme}
          withCSSVariables
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'dark',
});

// components: {
//   Divider: {
//     styles: (theme) => ({
//       label: {
//         '&::after': {
//           borderTopColor:
//             theme.colorScheme === 'dark'
//               ? theme.colors.dark[4]
//               : theme.colors.dark[6],
//         },
//         '&::before': {
//           borderTopColor:
//             theme.colorScheme === 'dark'
//               ? theme.colors.dark[4]
//               : theme.colors.dark[6],
//         },
//       },
//       root: {
//         borderTopColor:
//           theme.colorScheme === 'dark'
//           ? `${theme.colors.dark[4]} !important`
//           : `${theme.colors.dark[6]} !important`,
//       },
//     }),
//   },
// },
