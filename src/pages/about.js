import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Particles from "@/components/Particles";

const aboutDetails = (
  <section className="flex flex-col items-center text-center max-w-2xl px-4 mt-6 space-y-6">
    <p className="text-xl md:text-2xl font-medium text-white-800 dark:text-gray-200">
      Hello! I’m <span className="font-bold text-primary">Hannah</span> — a
      passionate digital design artist who loves crafting intuitive and visually
      compelling digital experiences.
    </p>
    <Image
      src="/images/Profile.jpg"
      width={360}
      height={300}
      className="rounded-2xl shadow-lg"
      alt="Profile Pic"
    />
    <p className="text-md text-white-600 dark:text-gray-400">
      Hannah is driven by a passion to use design as a pathway to achieving her
      dreams. For her, design is more than a profession — it’s a means of
      self-expression and a tool for bringing ideas to life in ways that
      inspire, inform, and connect with others.
    </p>
    <p className="text-md text-white-600 dark:text-gray-400">
      Currently, she is refining her skills at the University of Colorado
      Denver, immersing herself in a range of design disciplines to become a
      true "jack of all trades." She believes versatility is essential in
      today’s fast-evolving creative landscape. By mastering concept
      development, visual storytelling, user-centered design, and brand
      aesthetics, she is building a strong foundation to adapt to any project
      and bring creative visions to life.
    </p>
    <p className="text-md text-white-600 dark:text-gray-400">
      She is currently working on her thesis project, <strong>Chiyu</strong>,
      which means "healing" in Korean — a video game exploring the emotional
      journey of a breakup. Through interactive storytelling, the game
      symbolizes the challenges and growth that come with healing.
    </p>
    <p className="text-md text-white-600 dark:text-gray-400">
      Hannah is researching how design can support emotional processing and
      incorporating insights from psychology to create a meaningful player
      experience. Through this project, she is merging creativity with purpose,
      using interactive design to craft an experience that resonates on a deep
      emotional level.
    </p>
  </section>
);

export default function About() {
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
        <title>About</title>
        <Header />
        <Navigation />
        {/* <h1>About Me</h1> */}
        <h1 className="text-4xl font-bold text-white-900 dark:text-white mb-6">
          About Me
        </h1>
        {aboutDetails}
        <Footer />
      </div>
    </div>
  );

  // Return the variable containing the JSX
  return pageContent;
}
