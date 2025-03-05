import Link from 'next/link';
import Button from '../../components/Button';
import Navigation from '../../components/Navigation';


export default function About() {
    const pageContent = (
        <div className="flex flex-col justify-center items-center h-screen bg-black">
        <h1 className="text-4xl font-semibold mb-8 text-white">About</h1>
        <Navigation />
      </div>
    );

    // Return the variable containing the JSX
    return pageContent;
}
