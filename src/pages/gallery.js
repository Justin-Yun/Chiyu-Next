import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import PhotoGallery from '../../components/PhotoGallery';

export default function Gallery() {
    const pageContent = (
        <div className="flex flex-col justify-center items-center slide-in-fwd-center">
            <title>Gallery</title>
            <Header />
            <Navigation />
            <h1>Gallery</h1>
            <PhotoGallery />
            <Footer />
        </div>
    );

    // Return the variable containing the JSX
    return pageContent;
}
