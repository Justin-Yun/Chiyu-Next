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
                lg.default(galleryRef.current, {
                    counter: false, // Disable the photo counter (current/total images)
                    zoom: true,     // Enable zoom
                    thumbnail: true, // Enable thumbnails
                    showCaptions: false,   // Disable captions (image name)
                    getCaptionFromTitle: false, // Ensure no captions are fetched from title attribute
                    caption: false,         // Explicitly disable captions
                });
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
                            alt={""}
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
