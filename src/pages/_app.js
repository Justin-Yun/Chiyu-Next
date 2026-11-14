import Head from "next/head";
import { Gowun_Batang, Figtree, Amatic_SC } from "next/font/google";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

// lightGallery styles (used by the gallery page and the footer QR code)
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Gowun Batang: a Korean serif with Latin + Hangul, used for headings.
// Figtree: a friendly geometric sans for body text and UI.
const display = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
// Amatic SC: tall, narrow hand-lettering that echoes the Chiyu logo; nav only.
const hand = Amatic_SC({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/jellyfish.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1d23" />
      </Head>
      <div className={`${display.variable} ${sans.variable} ${hand.variable} app-root`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
