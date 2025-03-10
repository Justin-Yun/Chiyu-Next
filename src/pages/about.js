import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Particles from "@/components/Particles";

const aboutDetails = (
  <>
    <p>Hello! This is Hannah</p>
    <p>Fill Details Here:</p>
    <iframe
      width="150"
      height="150"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/86910948&color=%23cdcdcb&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
  </>
);

export default function About() {
  const pageContent = (
    <div className="relative w-full h-screen overflow-hidden slide-in-fwd-center">
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
      <div className="relative z-10 flex flex-col justify-start items-center h-screen pt-5">
        <title>About</title>
        <Header />
        <Navigation />
        <h1>About</h1>
        {aboutDetails}
        <Footer />
      </div>
    </div>
  );

  // Return the variable containing the JSX
  return pageContent;
}
