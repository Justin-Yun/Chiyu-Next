import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Particles from "./Particles";
import PageTransition from "./PageTransition";

// Shared shell for every page. Because it lives in _app, the WebGL particle
// background and the top bar mount once and stay put across client-side
// navigations; only the page content (and footer) transitions.
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

      <Header />

      <PageTransition routeKey={pathname} className="page">
        <main className="page-main">{children}</main>
        <Footer />
      </PageTransition>
    </>
  );
}
