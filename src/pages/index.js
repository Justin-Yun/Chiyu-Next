import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>CHIYU</title>
      </Head>
      <Image
        src="/icons/Land.png"
        width={400}
        height={350}
        sizes="400px"
        priority
        alt="Background Image"
      />
    </>
  );
}
