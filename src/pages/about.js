import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <article className="sheet">
        <header className="sheet-head">
          <h1>About</h1>
        </header>

        <div className="about">
          <div className="about-photo">
            <Image
              src="/images/profilePic.jpg"
              width={1184}
              height={1679}
              sizes="(max-width: 760px) 280px, 240px"
              style={{ height: "auto" }}
              priority
              alt="Portrait of Hannah Lee"
            />
          </div>

          <div className="prose">
            <p className="lede">
              Hannah Lee is a Digital Design student at the University of Colorado Denver, currently
              pursuing her Bachelor&rsquo;s degree with a focus on illustration and concept art.
            </p>
            <p>
              She has developed an interest in game art design and is now working toward a career in
              the gaming industry.
            </p>
            <p>
              In addition to her academic work, she is a licensed esthetician and laser technician,
              blending two different yet complementary fields to offer a unique perspective.
            </p>
            <p>
              Outside of school and work, Hannah enjoys exploring local food spots and capturing
              artistic photos of her meals. Her hobbies include journaling, drawing, gaming, and
              engaging in any activity that allows her to work with her hands.
            </p>
            <p>
              Recently, her creative focus has centered on character concept art, a passion that grew
              through the development of her thesis project—a narrative-driven video game exploring
              the emotional healing process following a breakup.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
