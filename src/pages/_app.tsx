import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps } : AppProps) {
  return (
    <>
      <Head>
        <title>Escape Game</title>
        <meta
          name="description"
          content="Escape Game | Nuits Impacts 2025."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${geistSans.className} ${geistMono.className} relative min-h-screen`}>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
