import { useRouter } from "next/router";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Particles from "./Particles";
import PageTransition from "./PageTransition";

// Shared shell for every page. Because it lives in _app, the WebGL particle
// background mounts once and keeps running across client-side navigations
// instead of being torn down and rebuilt (new WebGL context) on every page.
// The foreground (header, nav, page, footer) still replays the site's
// entrance animation on every navigation, as it did before.
export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      {/* Particles Background — fixed to the viewport so the canvas stays
          viewport-sized no matter how long the page is. */}
      <div className="fixed inset-0 z-0 bg-fade-in" aria-hidden="true">
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

      {/* Foreground Content */}
      <PageTransition
        routeKey={pathname}
        className="relative z-10 flex flex-col justify-start items-center min-h-screen pt-5"
      >
        <Header />
        <Navigation />
        {children}
        <Footer />
      </PageTransition>
    </>
  );
}
