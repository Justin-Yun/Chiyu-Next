import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export default function Gallery() {



    const pageContent = (
        <div className="flex flex-col justify-center items-center h-screen">
            <Header />
            <Navigation />
            <h1>Gallery</h1>

            <Footer />
        </div>
    );

    // Return the variable containing the JSX
    return pageContent;
}
