import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Particles from "@/components/Particles";

const researchDetails = (
  <section className="flex flex-col items-center text-center max-w-2xl px-4 mt-6 space-y-6">
    <h2 className="text-xl md:text-2xl font-medium text-white-800 dark:text-gray-200">
      Thesis Question
    </h2>
    <p className="text-sm text-white-600 dark:text-gray-400">
      How might I design a video game experience that helps individuals process
      the emotions of a breakup, gain closure, and foster emotional healing
      through engaging storytelling, gameplay mechanics, and interactive design?
    </p>
    <h2 className="text-xl md:text-2xl font-medium text-white-800 dark:text-gray-200">
      Problem Statement
    </h2>
    <p className="text-sm text-white-600 dark:text-gray-400">
      Many video games prioritize action, competition, or fantasy elements,
      often neglecting the emotional aspects of life. While some
      narrative-driven games explore emotional themes, few directly address
      breakups, grief, and emotional healing in an interactive and meaningful
      way. This gap presents an opportunity to design a game that not only
      entertains but also aids players in processing complex emotions through
      immersive storytelling and gameplay.
    </p>

    <h2 className="text-xl md:text-2xl font-medium text-white-800 dark:text-gray-200">
      Therapy & Psychology Research
    </h2>

    <p className="text-md text-white-600 dark:text-gray-400 font-bold">
      Insights from Hope Carwile
    </p>

    <p className="text-sm text-white-600 dark:text-gray-400">
      During my meetings with therapist Hope Carwile, we discussed the
      psychological process individuals undergo during a breakup, which closely
      aligns with the five stages of grief (Kübler-Ross & Kessler, 2005). These
      stages are:
    </p>

    <ol className="list-decimal list-inside text-white-600 dark:text-gray-400 text-sm">
      <li>
        <strong>Denial</strong> – A form of self-protection and isolation from
        reality.
      </li>
      <li>
        <strong>Anger</strong> – Expressing frustration and protest against the
        loss.
      </li>
      <li>
        <strong>Bargaining</strong> – Attempting to regain control by making
        hypothetical deals.
      </li>
      <li>
        <strong>Depression</strong> – Fully experiencing sadness and
        surrendering to emotions.
      </li>
      <li>
        <strong>Acceptance</strong> – Acknowledging the facts and embracing
        wisdom.
      </li>
    </ol>

    <p className="text-sm text-white-600 dark:text-gray-400">
      Carwile also highlighted how past trauma significantly influences how
      individuals cope with breakups. Childhood experiences, including parental
      relationships, often shape unconscious coping mechanisms (Bowlby, 1980).
      Trauma from previous relationships can also resurface, affecting emotional
      regulation and healing.
    </p>
    <p className="text-md text-white-600 dark:text-gray-400 font-bold">
      Color Symbolism in the Stages of Grief
    </p>

    <p className="text-sm text-white-600 dark:text-gray-400">
      Carwile and I also explored how different colors can symbolize each stage
      of grief, which may be incorporated into the game's aesthetic and
      emotional journey:
    </p>

    <ul className="list-decimal list-inside text-white-600 dark:text-gray-400 text-sm">
      <li>
        <strong>Denial:</strong> Grey, white (uncertainty, void)
      </li>
      <li>
        <strong>Anger:</strong> Red, yellow (release through laughter), orange,
        fuchsia + white
      </li>
      <li>
        <strong>Bargaining:</strong> Green (exchange, negotiation)
      </li>
      <li>
        <strong>Depression:</strong> Black, dark grey, dark brown (earthy, hands
        in dirt), dark blue (depth)
      </li>
      <li>
        <strong>Acceptance:</strong> White, yellow (transformational, bright
        sun, energy-giving yet anxiety-inducing)
      </li>
    </ul>

    <p className="text-sm text-white-600 dark:text-gray-400">
      For simplicity in game design, I am currently focusing on the five core
      stages of grief. However, in the future, I would consider incorporating a
      deeper character backstory to explore how personal history shapes an
      individual's response to loss.
    </p>

    <h2 className="text-xl md:text-2xl font-medium text-white-800 dark:text-gray-200">
      Game Design & Background
    </h2>

    <p className="text-md text-white-600 dark:text-gray-400 font-bold">
      Research on 2D Game Aesthetics
    </p>

    <p className="text-sm text-white-600 dark:text-gray-400">
      Charles Valesechi helped me develop this portion of the game by
      emphasizing the importance of clearly distinguishing the two visual
      styles, so the audience can easily recognize they’re in different worlds.
      He also guided me in simplifying my character designs, especially for a 2D
      game, by encouraging me to consider both the artistic and coding aspects
      to ensure the game remains realistic and achievable.
      <br />
      With Charles Valesechi advice and the extensive research on 2D games, I
      created two different mood boards to distinguish between:
    </p>

    <ul className="list-disc list-inside text-white-600 dark:text-gray-400 text-sm">
      <li>
        <strong>The gameplay world</strong> - 2D style, with a stylized
        cartoon-inspired aesthetic
      </li>
      <li>
        <strong>The storyline world</strong> – 2D/3D style, with a more lifelike
        and detailed visual approach
      </li>
    </ul>
    <p className="text-md text-white-600 dark:text-gray-400 font-bold">
      Naming & Cultural Influence
    </p>
    <p className="text-sm text-white-600 dark:text-gray-400">
      To align the game with its healing theme, I explored translations of the
      word "healing" in different languages. Ultimately, I chose "Chiyu" (치유),
      the Korean word for healing, as a representation of my cultural identity.
      Incorporating Korean traditional elements remains a challenge due to the
      limited representation of Korean stylized games in the U.S. gaming
      industry (Chung & Fung, 2013). However, I am actively researching ways to
      blend Korean architecture, mythology, and aesthetics into the game. <br />
      <br />
      One of my key references for integrating Korean architecture is the Seoul
      Hanok Portal, which provides extensive information about the structure and
      design of Hanok (traditional Korean houses). The Hanok style features
      natural materials, curved roofs, and open courtyards, which I aim to
      incorporate into my game's environments (Seoul Metropolitan Government,
      n.d.). This research helps ensure that the game remains authentic while
      presenting a visually rich and immersive world.
    </p>

    <p className="text-md text-white-600 dark:text-gray-400 font-bold">
      Theme & Character Design
    </p>

    <p className="text-sm text-white-600 dark:text-gray-400">
      Inspired by <em>Hollow Knight</em>, which utilizes its characters based on
      skulls and insects, I explored alternative themes to unify my game’s
      artistic direction. I ultimately gravitated toward the ocean due to its
      dual nature—both soothing and chaotic. This theme allows for dynamic enemy
      and boss designs based on different depths of the ocean, reflecting
      emotional progression within the game.
      <br />
      <br />
      Process Book Inspiration: <em>The Art and Making of Arcane</em>
      <br />
      <br />
      As I work on documenting my game development process, I am drawing
      inspiration from <em>The Art and Making of Arcane</em> (2022). This book
      details the artistic journey behind the hit animated series{" "}
      <em>Arcane</em>, offering deep insights into world-building, character
      design, and storytelling. The visually rich layouts and behind-the-scenes
      content provide a structured and aesthetically compelling approach that I
      aim to replicate in my process book for <em>Chiyu</em>.
      <br />
      <br /> <br />
      <em>The Art and Making of Arcane</em> excels in:
    </p>

    <ul className="list-disc list-inside text-white-600 dark:text-gray-400 text-sm">
      <li>
        Presenting concept art and development sketches in an organized manner.
      </li>
      <li>
        Structuring the creative workflow into phases (early sketches, color
        studies, and final renders).
      </li>
      <li>
        Offering insightful commentary from artists and designers on stylistic
        choices.
      </li>
    </ul>

    <p className="text-sm text-white-600 dark:text-gray-400">
      By adopting a similar format, my process book will not only document the
      visual evolution of Chiyu but also showcase my thought process in a clear,
      visually engaging way. I plan to integrate:
    </p>

    <ul className="list-disc list-inside text-white-600 dark:text-gray-400 text-sm">
      <li>Layered sketches showing character and environmental progression.</li>
      <li>
        Mood boards and color palettes that define the emotional tone of
        different stages of the game.
      </li>
      <li>
        Annotated design choices, explaining how they tie into Korean aesthetics
        and the five stages of grief.
      </li>
    </ul>

    <p className="text-sm text-white-600 dark:text-gray-400">
      This structured approach will ensure that my process book is both a
      valuable design archive and a visually captivating narrative that
      complements the game's themes.
    </p>

    <h2 className="text-xl md:text-2xl font-medium text-white-800 dark:text-gray-200">
      References
    </h2>

    <div className="text-xs text-white-600 dark:text-gray-400 mt-6 space-y-1">
      <p>
        <sup>1</sup> Bowlby, J. (1980). <em>Loss: Sadness and depression</em>{" "}
        (Attachment and Loss Vol. 3). Basic Books.
      </p>
      <p>
        <sup>2</sup> Chung, P., & Fung, A. (2013).{" "}
        <em>Asian Popular Culture in Transition</em>. Routledge.
      </p>
      <p>
        <sup>3</sup> Kübler-Ross, E., & Kessler, D. (2005).{" "}
        <em>
          On grief and grieving: Finding the meaning of grief through the five
          stages of loss
        </em>
        . Scribner.
      </p>
      <p>
        <sup>4</sup> Riot Games. (2022). <em>The Art and Making of Arcane</em>.
        Dark Horse Books.
      </p>
      <p>
        <sup>5</sup> Seoul Metropolitan Government. (n.d.).{" "}
        <em>What is Hanok? Seoul Hanok Portal</em>. Retrieved March 13, 2025,
        from{" "}
        <a
          href="https://hanok.seoul.go.kr/front/eng/info/infoHanok.do?tab=2"
          className="underline text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://hanok.seoul.go.kr/front/eng/info/infoHanok.do?tab=2
        </a>
      </p>
    </div>
  </section>
);

export default function Research() {
  const pageContent = (
    <div className="relative w-full min-h-screen overflow-hidden slide-in-fwd-center">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#faedcd", "#faedcd"]}
          particleCount={200}
          particleSpread={10}
          speed={0.125}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10 flex flex-col justify-start items-center min-h-screen pt-5">
        <title>Research</title>
        <Header />
        <Navigation />
        <h1>Research</h1>
        {researchDetails}
        <Footer />
      </div>
    </div>
  );

  // Return the variable containing the JSX
  return pageContent;
}
