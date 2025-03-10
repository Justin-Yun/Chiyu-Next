import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Particles from "@/components/Particles";

export default function Research() {
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
        <title>Research</title>
        <Header />
        <Navigation />
        <h1>Research</h1>
        <p>Put research stuff here</p>
        <Footer />
      </div>
    </div>
  );

  // Return the variable containing the JSX
  return pageContent;
}
