import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export default function Research() {
    const pageContent = (
        <div className="flex flex-col justify-center items-center slide-in-fwd-center">
            <title>About</title>
            <Header />
            <Navigation />
            <h1>Research</h1>
            <p>Put research stuff here</p>
            <Footer />
        </div>
    );

    // Return the variable containing the JSX
    return pageContent;
}
