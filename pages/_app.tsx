import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

import { Header } from '../components/Header';
import '../styles/global.scss';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>rJornal</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}