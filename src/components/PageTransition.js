import { useEffect, useRef, useState } from "react";

const EXIT_MS = 200;

// Animates the foreground between routes: the outgoing page quickly fades
// away, then the incoming page plays the site's entrance animation (the
// original full-page fade-in, with the logo flicker). The particle background
// lives outside this component so it keeps running uninterrupted.
export default function PageTransition({ routeKey, className = "", children }) {
  // The route currently on screen. While it differs from `routeKey`, the
  // previous page is frozen on screen and fading out.
  const [shownKey, setShownKey] = useState(routeKey);
  const outgoing = useRef(children);
  const exiting = routeKey !== shownKey;
  if (!exiting) outgoing.current = children;

  useEffect(() => {
    if (!exiting) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => setShownKey(routeKey), reduceMotion ? 0 : EXIT_MS);
    return () => window.clearTimeout(id);
  }, [exiting, routeKey]);

  return (
    <div
      key={shownKey}
      // Class names are spelled out in full so PurgeCSS can find them.
      className={`${exiting ? "page-exit" : "slide-in-fwd-center"} ${className}`}
    >
      {exiting ? outgoing.current : children}
    </div>
  );
}
