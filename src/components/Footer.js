'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Footer = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        // Dynamically import to avoid SSR errors
        const initGallery = async () => {
            if (!galleryRef.current) return;

            const lightGallery = (await import('lightgallery')).default;
            const lgZoom = (await import('lightgallery/plugins/zoom')).default;
            const lgThumbnail = (await import('lightgallery/plugins/thumbnail')).default;

            lightGallery(galleryRef.current, {
                plugins: [lgZoom, lgThumbnail],
                speed: 500,
            });
        };

        initGallery();
    }, []);

    const footerContent = (
        <div>
            <div className="flex space-x-4 items-center mt-12 mb-10">
                <footer>&copy; Hannah Lee</footer>
                <Link href="https://www.instagram.com/hli.xi/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/instagram.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/hlixi/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/linkedin.png"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="https://www.hlixi.com/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/jellyfish.png"
                        alt="Portfolio"
                        width={20}
                        height={20}
                    />
                </Link>
                <div ref={galleryRef} className="cursor-pointer">
                    <a href="/images/qr-code.png">
                        <Image
                            src="/icons/fish.png"
                            alt="QR Code"
                            width={20}
                            height={20}
                        />
                    </a>
                </div>
            </div>
        </div>
    );

    return footerContent;
};

export default Footer;
