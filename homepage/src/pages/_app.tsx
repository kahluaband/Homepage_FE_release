import { AppProps } from "next/app";
import "../app/globals.css";
import RootLayout from "@/app/layout";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KAHLUA BAND</title>
        <link rel="icon" href="/kahlua.png" />
      </Head>
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js"></Script>
      <Script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></Script>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
