import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';


const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const photoContent = (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <Image
                    src="/icons/Chiyu-Square.png"
                    alt="Home Page"
                    width={100}
                    height={50}
                    onClick={() => handleClick('/icons/Chiyu-Square.png')} // Set selected image on click
                    className="cursor-pointer"
                />
            </div>
            <div className="grid gap-4">
                <Image
                    src="/icons/Chiyu-Square.png"
                    alt="Home Page"
                    width={100}
                    height={50}
                    onClick={() => handleClick('/icons/Chiyu-Square.png')}
                    className="cursor-pointer"
                />
            </div>
            <div className="grid gap-4">
                <Image
                    src="/icons/Chiyu-Square.png"
                    alt="Home Page"
                    width={100}
                    height={50}
                    onClick={() => handleClick('/icons/Chiyu-Square.png')}
                    className="cursor-pointer"
                />
            </div>
            <div className="grid gap-4">
                <Image
                    src="/icons/Chiyu-Square.png"
                    alt="Home Page"
                    width={100}
                    height={50}
                    onClick={() => handleClick('/icons/Chiyu-Square.png')}
                    className="cursor-pointer"
                />
            </div>
            <div className="grid gap-4">
                <Image
                    src="/icons/Chiyu-Square.png"
                    alt="Home Page"
                    width={100}
                    height={50}
                    onClick={() => handleClick('/icons/Chiyu-Square.png')}
                    className="cursor-pointer"
                />
            </div>
        </div>
    );

    // Modal content
    const modalContent = selectedImage && (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleClose}
        >
            <div className="relative">
                <Image
                    src={selectedImage}
                    alt="Enlarged Image"
                    width={500} // Adjust the size as needed
                    height={250} // Adjust the height as needed
                    className="max-w-full max-h-full"
                />
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-white font-bold"
                >
                    Close
                </button>
            </div>
        </div>
    );

    // Combine the photo content and modal content into one variable to return
    const galleryContent = (
        <div>
            {photoContent}
            {modalContent}
        </div>
    );

    return galleryContent; // Returning the gallery content variable
};

export default PhotoGallery;