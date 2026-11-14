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
    <nav className="flex justify-center space-x-4 mt-6 mb-10">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="cta"
          aria-current={pathname === href ? "page" : undefined}
        >
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
