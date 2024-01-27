import { useRouter } from 'next/router';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { MessageProvider } from '@/contexts/MessageContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Teste Front-End - BNP</title>
      </Head>
      <MessageProvider>
        <Link href="/">
          Menu de Testes
        </Link>
        <Component {...pageProps} />
      </MessageProvider>
    </>
  );
}
