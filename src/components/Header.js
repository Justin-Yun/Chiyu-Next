import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
    const headerContent = (
        <div>
            <link rel="icon" type="image/x-icon" href="/icons/jellyfish.png" />
            <Link href="/">
                <Image
                    src="/icons/Chiyu-Square.png"
                    alt="Home Page"
                    width={100} // Smaller width
                    height={50} // Adjust height to maintain aspect ratio
                    className='flicker-in-glow'
                />
            </Link>
        </div>
    )

    return headerContent;
};

export default Header;