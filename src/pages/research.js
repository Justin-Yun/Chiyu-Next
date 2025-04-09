import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Particles from "@/components/Particles";

const researchDetails = (
  <section className="flex flex-col items-center text-center max-w-2xl px-4 mt-6 space-y-6">
    <p className="text-xl md:text-2xl font-medium text-white-800 dark:text-gray-200">
      <strong>Chiyu</strong>, which means &quot;healing&quot; in Korean — a
      video game exploring the emotional journey of a breakup. Through
      interactive storytelling, the game symbolizes the challenges and growth
      that come with healing.
    </p>
    <p className="text-md text-white-600 dark:text-gray-400"></p>
    <p className="text-md text-white-600 dark:text-gray-400">
      Hannah is researching how design can support emotional processing and
      incorporating insights from psychology to create a meaningful player
      experience. Through this project, she is merging creativity with purpose,
      using interactive design to craft an experience that resonates on a deep
      emotional level.
    </p>
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
