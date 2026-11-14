import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>CHIYU</title>
      </Head>
      <section className="home">
        <div className="home-scene">
          <Image
            src="/icons/Land.png"
            width={2881}
            height={2377}
            sizes="(max-width: 1024px) 100vw, 720px"
            priority
            alt="Hand-drawn hanok, a traditional Korean house, under a blue and a red taeguk swirl"
          />
        </div>

        <div className="home-card glass">
          <p className="home-hangul" lang="ko">치유</p>
          <h1>A game about healing after heartbreak</h1>
          <p>
            Chiyu is Hannah Lee&rsquo;s thesis project: a narrative game that moves through the
            five stages of grief, set in an ocean world built around Korean hanok architecture.
          </p>
          <div className="home-actions">
            <Link href="/research" className="btn btn-primary">
              Read the research
            </Link>
            <Link href="/gallery" className="btn btn-ghost glass">
              View the gallery
            </Link>
          </div>
        </div>

        <p className="hint glass">Move your cursor to drift the stars</p>
      </section>
    </>
  );
}
