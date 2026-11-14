import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const QR_SRC = "/images/qr-code.png";

const Footer = () => {
  const lightboxRef = useRef(null);

  // lightGallery is only downloaded and initialised the first time someone
  // opens the QR code, instead of on every page load.
  const openQr = async (e) => {
    e.preventDefault();
    if (!lightboxRef.current) {
      const [lg, lgZoom] = await Promise.all([
        import("lightgallery"),
        import("lightgallery/plugins/zoom"),
      ]);
      lightboxRef.current = lg.default(document.createElement("div"), {
        plugins: [lgZoom.default],
        dynamic: true,
        dynamicEl: [{ src: QR_SRC, thumb: QR_SRC }],
        speed: 450,
        mode: "lg-fade",
        download: false,
        counter: false,
      });
    }
    lightboxRef.current.openGallery(0);
  };

  useEffect(() => () => lightboxRef.current?.destroy(), []);

  return (
    <div className="flex space-x-4 items-center mt-12 mb-10">
      <footer>&copy; Hannah Lee</footer>
      <Link href="https://www.instagram.com/hli.xi/" target="_blank" rel="noopener noreferrer" className="icon-link">
        <Image src="/icons/instagram.png" alt="Instagram" width={20} height={20} />
      </Link>
      <Link href="https://www.linkedin.com/in/hlixi/" target="_blank" rel="noopener noreferrer" className="icon-link">
        <Image src="/icons/linkedin.png" alt="LinkedIn" width={20} height={20} />
      </Link>
      <Link href="https://www.hlixi.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
        <Image src="/icons/jellyfish.png" alt="Portfolio" width={20} height={20} />
      </Link>
      <a href={QR_SRC} onClick={openQr} className="icon-link cursor-pointer">
        <Image src="/icons/fish.png" alt="QR Code" width={20} height={20} />
      </a>
    </div>
  );
};

export default Footer;
