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
    <footer className="site-footer">
      <p className="site-footer-name">&copy; Hannah Lee</p>
      <div className="site-footer-links">
        <Link href="https://www.instagram.com/hli.xi/" target="_blank" rel="noopener noreferrer" className="icon-link glass" aria-label="Instagram">
          <Image src="/icons/instagram.png" alt="" width={18} height={18} />
        </Link>
        <Link href="https://www.linkedin.com/in/hlixi/" target="_blank" rel="noopener noreferrer" className="icon-link glass" aria-label="LinkedIn">
          <Image src="/icons/linkedin.png" alt="" width={18} height={18} />
        </Link>
        <Link href="https://www.hlixi.com/" target="_blank" rel="noopener noreferrer" className="icon-link glass" aria-label="Portfolio">
          <Image src="/icons/jellyfish.png" alt="" width={18} height={18} />
        </Link>
        <a href={QR_SRC} onClick={openQr} className="icon-link glass" aria-label="Show QR code">
          <Image src="/icons/fish.png" alt="" width={18} height={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
