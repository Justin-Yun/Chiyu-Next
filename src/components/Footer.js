import Link from 'next/link';
import Image from 'next/image'

const Footer = () => {
    const footerContent = (
        <div>
            <div className="flex space-x-4 items-center mt-12">
                <footer>&copy; Hannah Lee</footer>
                <Link href="https://www.instagram.com/hli.xi/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/instagram.svg"
                        alt="Instagram"
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/hlixi/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/linkedin.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="https://www.hlixi.com/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/icons/portfolio.png"
                        alt="Portfolio"
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
        </div>
    )

    return footerContent;
};

export default Footer;