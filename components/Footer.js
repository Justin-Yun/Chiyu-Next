import Link from 'next/link';
import Navigation from '../components/Navigation';
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <div className="flex space-x-4 items-center mt-12">
                <p>&copy; Hannah Lee</p>
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
    );
};

export default Footer;