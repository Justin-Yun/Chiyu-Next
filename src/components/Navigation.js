import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/gallery", label: "Gallery" },
];

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className="nav" aria-label="Main">
      {/* Roughens straight CSS borders into a chalky, hand-drawn line like
          the box around the Chiyu logo. */}
      <svg className="nav-filters" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="chalk-edge" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" />
        </filter>
      </svg>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="nav-link"
          aria-current={pathname === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
