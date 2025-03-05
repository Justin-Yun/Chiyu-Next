import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image'
import 'lightgallery/css/lightgallery.css';

// Dynamically import LightGallery for client-side only
const LightGallery = dynamic(() => import('lightgallery'), {
    ssr: false, // Disable server-side rendering for this component
});

const PhotoGallery = () => {
    // Define your images in an array
    const imagePaths = [
        '/gallery/photo1.jpeg',
        '/gallery/photo2.jpeg',
        '/gallery/photo3.jpeg',
        '/gallery/photo4.jpeg',
        '/gallery/photo5.jpeg',
    ];

    // Ref to attach to LightGallery
    const galleryRef = useRef(null);

    // Initialize LightGallery on component mount
    useEffect(() => {
        if (galleryRef.current) {
            import('lightgallery').then((lg) => {
                lg.default(galleryRef.current); // Initialize LightGallery on the gallery element
            });
        }
    }, []);

    // Define gallery content as a variable
    const galleryContent = (
        <div>
            <div ref={galleryRef} className="gallery">
                {imagePaths.map((imagePath, index) => (
                    <a href={imagePath} key={index} data-src={imagePath}>
                        <Image
                            src={imagePath}
                            alt={`Gallery Image ${index + 1}`}
                            width={300}
                            height={200}
                            className="gallery-image"
                        />
                    </a>
                ))}
            </div>
        </div>
    );

    return galleryContent; // Return the gallery content variable
};

export default PhotoGallery;
