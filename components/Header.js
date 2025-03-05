import Link from 'next/link';
import Navigation from '../components/Navigation';
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <Link href="/">
                <Image
                    src="/icons/Chiyu-Square.png"
                    alt="Home Page"
                    width={100} // Smaller width
                    height={50} // Adjust height to maintain aspect ratio
                />
            </Link>
        </div>
    );
};

export default Header;