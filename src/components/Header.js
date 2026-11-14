import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

const Header = () => (
  <header className="topbar">
    <Link href="/" className="brand" aria-label="Chiyu home">
      <Image
        src="/icons/Chiyu-Square.png"
        alt=""
        width={44}
        height={45}
        className="flicker-in-glow"
        priority
      />
    </Link>
    <Navigation />
  </header>
);

export default Header;
