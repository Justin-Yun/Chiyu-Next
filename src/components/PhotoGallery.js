import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";

const LightGallery = dynamic(() => import("lightgallery"), { ssr: false });

const PhotoGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {
    // Fetch image paths from API
    fetch("/api/getImages")
      .then((res) => res.json())
      .then((data) => setImagePaths(data.images))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  useEffect(() => {
    if (galleryRef.current) {
      import("lightgallery").then((lg) => {
        lg.default(galleryRef.current, {
          counter: false,
          zoom: true,
          thumbnail: true,
          showCaptions: false,
        });
      });
    }
  }, [imagePaths]); // Re-run LightGallery when images are loaded

  return (
    <div>
      <div ref={galleryRef} className="gallery">
        {imagePaths.map((imagePath, index) => (
          <a href={imagePath} key={index} data-src={imagePath}>
            <Image src={imagePath} alt="" width={300} height={200} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
