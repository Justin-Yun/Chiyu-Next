import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PhotoGallery from "../components/PhotoGallery";
import Particles from "@/components/Particles";

export default function Gallery() {
  const pageContent = (
    <div className="relative w-full min-h-screen overflow-hidden slide-in-fwd-center">
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
        <title>Gallery</title>
        <Header />
        <Navigation />
        <h1>Gallery</h1>
        <div><br/></div>
        <PhotoGallery />
        <Footer />
      </div>
    </div>
  );

  // Return the variable containing the JSX
  return pageContent;
}
