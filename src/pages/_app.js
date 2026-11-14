import Head from "next/head";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

// lightGallery styles (used by the gallery page and the footer QR code)
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/jellyfish.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
