import Header from "@/src/components/navbar";
import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
     
    </>
  );
}
