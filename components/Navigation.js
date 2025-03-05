import Link from 'next/link';

const Navigation = () => {
    // const buttonClass = "btn1";
    const buttonClass = "cta";
    const navigationContent = (
        <div className="flex justify-center space-x-4 mt-6 mb-10">
            <Link href="/about" className={buttonClass}>
                <span>About</span>
            </Link>
            <Link href="/research" className={buttonClass}>
                <span>Research</span>
            </Link>
            <Link href="/gallery" className={buttonClass}>
                <span>Gallery</span>
            </Link>
        </div>
    )
    return navigationContent;
};

export default Navigation;