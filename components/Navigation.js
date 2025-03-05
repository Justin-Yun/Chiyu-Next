import Link from 'next/link';

const Navigation = () => {
  // Define the button style in a variable
  const buttonClass = "cta";

  return (
    <div className="flex justify-center space-x-4">
      <Link href="/" className={buttonClass}>
        <span>Home</span>
      </Link>
      <Link href="/about" className={buttonClass}>
        <span>About</span>
      </Link>
      <Link href="/gallery" className={buttonClass}>
        <span>Gallery</span>
      </Link>
    </div>
  );
};

export default Navigation;