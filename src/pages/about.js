import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Particles from "@/components/Particles";

const aboutDetails = (
  <section className="flex flex-col items-center text-center max-w-2xl px-4 mt-6 space-y-6">
    <Image
      src="/images/profilePic.jpg"
      width={200}
      height={100}
      className="rounded-2xl shadow-lg"
      alt="Profile"
    />
    <p className="text-sm text-white-600 dark:text-gray-400">
      Hannah Lee is a Digital Design student at the University of Colorado
      Denver, currently pursuing her Bachelor’s degree with a focus on
      illustration and concept art. She has developed an interest in game art
      design and is now working toward a career in the gaming industry.
    </p>
    <p className="text-sm text-white-600 dark:text-gray-400">
      In addition to her academic work, she is a licensed esthetician and laser
      technician, blending two different yet complementary fields to offer a
      unique perspective.
    </p>
    <p className="text-sm text-white-600 dark:text-gray-400">
      Outside of school and work, Hannah enjoys exploring local food spots and
      capturing artistic photos of her meals. Her hobbies include journaling,
      drawing, gaming, and engaging in any activity that allows her to work with
      her hands.
    </p>
    <p className="text-sm text-white-600 dark:text-gray-400">
      Recently, her creative focus has centered on character concept art, a
      passion that grew through the development of her thesis project—a
      narrative-driven video game exploring the emotional healing process
      following a breakup.
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
        {/* <h1 className="text-4xl font-bold text-white-900 dark:text-white mb-6">About Me</h1> */}
        <h1>About</h1>
        {aboutDetails}
        <Footer />
      </div>
    </div>
  );

  // Return the variable containing the JSX
  return pageContent;
}
