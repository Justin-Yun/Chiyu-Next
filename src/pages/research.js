import Head from "next/head";
import Image from "next/image";

const stages = [
  ["Denial", "A form of self-protection and isolation from reality."],
  ["Anger", "Expressing frustration and protest against the loss."],
  ["Bargaining", "Attempting to regain control by making hypothetical deals."],
  ["Depression", "Fully experiencing sadness and surrendering to emotions."],
  ["Acceptance", "Acknowledging the facts and embracing wisdom."],
];

const palettes = [
  {
    stage: "Denial",
    colors: ["#9a9a9a", "#ffffff"],
    note: "Grey, white (uncertainty, void)",
  },
  {
    stage: "Anger",
    colors: ["#d7261e", "#f5c518", "#f07c1b", "#d6249f", "#ffffff"],
    note: "Red, yellow (release through laughter), orange, fuchsia + white",
  },
  {
    stage: "Bargaining",
    colors: ["#3f9b4f"],
    note: "Green (exchange, negotiation)",
  },
  {
    stage: "Depression",
    colors: ["#000000", "#3a3a3a", "#4a3324", "#1d2f5c"],
    note: "Black, dark grey, dark brown (earthy, hands in dirt), dark blue (depth)",
  },
  {
    stage: "Acceptance",
    colors: ["#ffffff", "#f5c518"],
    note: "White, yellow (transformational, bright sun, energy-giving yet anxiety-inducing)",
  },
];

const Figure = ({ src, width, height, alt, caption }) => (
  <figure className="figure">
    <Image src={src} width={width} height={height} sizes="(max-width: 760px) 100vw, 650px" alt={alt} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default function Research() {
  return (
    <>
      <Head>
        <title>Research</title>
      </Head>
      <article className="sheet">
        <header className="sheet-head">
          <h1>Research</h1>
          <p>
            How a game can help someone move through a breakup, from therapy insights to color, art
            direction and Korean architecture.
          </p>
        </header>

        <div className="prose">
          <h2>Thesis question</h2>
          <p className="lede">
            How might I design a video game experience that helps individuals process the emotions of
            a breakup, gain closure, and foster emotional healing through engaging storytelling,
            gameplay mechanics, and interactive design?
          </p>

          <h3>Problem statement</h3>
          <p>
            Many video games prioritize action, competition, or fantasy elements, often neglecting the
            emotional aspects of life. While some narrative-driven games explore emotional themes, few
            directly address breakups, grief, and emotional healing in an interactive and meaningful
            way. This gap presents an opportunity to design a game that not only entertains but also
            aids players in processing complex emotions through immersive storytelling and gameplay.
          </p>

          <h2>Therapy &amp; psychology research</h2>

          <h3>Insights from Hope Carwile</h3>
          <p>
            During my meetings with therapist Hope Carwile, we discussed the psychological process
            individuals undergo during a breakup, which closely aligns with the five stages of grief
            (Kübler-Ross &amp; Kessler, 2005). These stages are:
          </p>
          <ol className="stages">
            {stages.map(([name, text]) => (
              <li key={name}>
                <span>
                  <strong>{name}</strong> — {text}
                </span>
              </li>
            ))}
          </ol>
          <p>
            Carwile also highlighted how past trauma significantly influences how individuals cope
            with breakups. Childhood experiences, including parental relationships, often shape
            unconscious coping mechanisms (Bowlby, 1980). Trauma from previous relationships can also
            resurface, affecting emotional regulation and healing.
          </p>

          <Figure src="/research/poster.jpg" width={3168} height={3456} alt="Research poster" />

          <h3>Color symbolism in the stages of grief</h3>
          <p>
            Carwile and I also explored how different colors can symbolize each stage of grief, which
            may be incorporated into the game&rsquo;s aesthetic and emotional journey:
          </p>
          <ul className="palettes" style={{ listStyle: "none", paddingLeft: 0 }}>
            {palettes.map(({ stage, colors, note }) => (
              <li key={stage}>
                <span className="palette-name">{stage}</span>
                <span className="swatches" aria-hidden="true">
                  {colors.map((c, i) => (
                    <span key={i} className="swatch" style={{ background: c }} />
                  ))}
                </span>
                <span className="palette-note">{note}</span>
              </li>
            ))}
          </ul>
          <p>
            For simplicity in game design, I am currently focusing on the five core stages of grief.
            However, in the future, I would consider incorporating a deeper character backstory to
            explore how personal history shapes an individual&rsquo;s response to loss.
          </p>

          <Figure src="/research/storyboard.jpg" width={2732} height={2048} alt="Storyboard" />

          <h2>Game design &amp; background</h2>

          <h3>Research on 2D game aesthetics</h3>
          <p>
            Charles Valesechi helped me develop this portion of the game by emphasizing the importance
            of clearly distinguishing the two visual styles, so the audience can easily recognize
            they&rsquo;re in different worlds. He also guided me in simplifying my character designs,
            especially for a 2D game, by encouraging me to consider both the artistic and coding
            aspects to ensure the game remains realistic and achievable.
          </p>
          <p>
            With Charles Valesechi&rsquo;s advice and the extensive research on 2D games, I created
            two different mood boards to distinguish between:
          </p>
          <ul>
            <li>
              <strong>The gameplay world</strong> — 2D style, with a stylized cartoon-inspired
              aesthetic
            </li>
            <li>
              <strong>The storyline world</strong> — 2D/3D style, with a more lifelike and detailed
              visual approach
            </li>
          </ul>

          <div className="figure-pair">
            <Figure src="/research/character.jpg" width={2732} height={2048} alt="Character studies" />
            <Figure src="/research/mainCharacter.jpg" width={2732} height={2048} alt="Main character" />
          </div>

          <h3>Naming &amp; cultural influence</h3>
          <p>
            To align the game with its healing theme, I explored translations of the word
            &ldquo;healing&rdquo; in different languages. Ultimately, I chose &ldquo;Chiyu&rdquo;{" "}
            <strong lang="ko">(치유)</strong>, the Korean word for healing, as a representation of my
            cultural identity. Incorporating Korean traditional elements remains a challenge due to
            the limited representation of Korean stylized games in the U.S. gaming industry (Chung
            &amp; Fung, 2013). However, I am actively researching ways to blend Korean architecture,
            mythology, and aesthetics into the game.
          </p>
          <p>
            One of my key references for integrating Korean architecture is the Seoul Hanok Portal,
            which provides extensive information about the structure and design of Hanok (traditional
            Korean houses). The Hanok style features natural materials, curved roofs, and open
            courtyards, which I aim to incorporate into my game&rsquo;s environments (Seoul
            Metropolitan Government, n.d.). This research helps ensure that the game remains authentic
            while presenting a visually rich and immersive world.
          </p>

          <h3>Theme &amp; character design</h3>
          <p>
            Inspired by <em>Hollow Knight</em>, which utilizes its characters based on skulls and
            insects, I explored alternative themes to unify my game&rsquo;s artistic direction. I
            ultimately gravitated toward the ocean due to its dual nature—both soothing and chaotic.
            This theme allows for dynamic enemy and boss designs based on different depths of the
            ocean, reflecting emotional progression within the game.
          </p>

          <h3>
            Process book inspiration: <em>The Art and Making of Arcane</em>
          </h3>
          <p>
            As I work on documenting my game development process, I am drawing inspiration from{" "}
            <em>The Art and Making of Arcane</em> (2022). This book details the artistic journey behind
            the hit animated series <em>Arcane</em>, offering deep insights into world-building,
            character design, and storytelling. The visually rich layouts and behind-the-scenes content
            provide a structured and aesthetically compelling approach that I aim to replicate in my
            process book for <em>Chiyu</em>.
          </p>
          <p>
            <em>The Art and Making of Arcane</em> excels in:
          </p>
          <ul>
            <li>Presenting concept art and development sketches in an organized manner.</li>
            <li>
              Structuring the creative workflow into phases (early sketches, color studies, and final
              renders).
            </li>
            <li>Offering insightful commentary from artists and designers on stylistic choices.</li>
          </ul>
          <p>
            By adopting a similar format, my process book will not only document the visual evolution
            of Chiyu but also showcase my thought process in a clear, visually engaging way. I plan to
            integrate:
          </p>
          <ul>
            <li>Layered sketches showing character and environmental progression.</li>
            <li>
              Mood boards and color palettes that define the emotional tone of different stages of the
              game.
            </li>
            <li>
              Annotated design choices, explaining how they tie into Korean aesthetics and the five
              stages of grief.
            </li>
          </ul>
          <p>
            This structured approach will ensure that my process book is both a valuable design archive
            and a visually captivating narrative that complements the game&rsquo;s themes.
          </p>

          <h2>References</h2>
          <ol className="references">
            <li>
              Bowlby, J. (1980). <em>Loss: Sadness and depression</em> (Attachment and Loss Vol. 3).
              Basic Books.
            </li>
            <li>
              Chung, P., &amp; Fung, A. (2013). <em>Asian Popular Culture in Transition</em>.
              Routledge.
            </li>
            <li>
              Kübler-Ross, E., &amp; Kessler, D. (2005).{" "}
              <em>
                On grief and grieving: Finding the meaning of grief through the five stages of loss
              </em>
              . Scribner.
            </li>
            <li>
              Riot Games. (2022). <em>The Art and Making of Arcane</em>. Dark Horse Books.
            </li>
            <li>
              Seoul Metropolitan Government. (n.d.). <em>What is Hanok? Seoul Hanok Portal</em>.
              Retrieved March 13, 2025, from{" "}
              <a
                href="https://hanok.seoul.go.kr/front/eng/info/infoHanok.do?tab=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://hanok.seoul.go.kr/front/eng/info/infoHanok.do?tab=2
              </a>
            </li>
          </ol>
        </div>
      </article>
    </>
  );
}
