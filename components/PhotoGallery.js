import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    // Define your images in an array
    const imagePaths = [
        '/gallery/photo1.jpeg',
        '/gallery/photo2.jpeg',
        '/gallery/photo3.jpeg',
        '/gallery/photo4.jpeg',
        '/gallery/photo5.jpeg',
    ];

    // Photo gallery content generated from the array
    const photoContent = (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {imagePaths.map((image, index) => (
                <div key={index} className="grid gap-4">
                    <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={100}
                        height={50}
                        onClick={() => handleClick(image)} // Set selected image on click
                        className="cursor-pointer"
                    />
                </div>
            ))}
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
                    className="absolute top-2 right-10 text-white font-bold text-2xl"
                >
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
