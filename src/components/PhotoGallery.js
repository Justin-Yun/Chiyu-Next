import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// LightGallery styles (core + plugins)
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

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
    if (galleryRef.current && imagePaths.length > 0) {
      Promise.all([
        import("lightgallery"),
        import("lightgallery/plugins/zoom"),
        import("lightgallery/plugins/thumbnail"),
      ]).then(([lg, lgZoom, lgThumbnail]) => {
        lg.default(galleryRef.current, {
          plugins: [lgZoom.default, lgThumbnail.default],
          counter: false,
          showCaptions: false,
          closable: true,
          showCloseIcon: true,
        });
      });
    }
  }, [imagePaths]);

  return (
    <div>
      <div ref={galleryRef} className="gallery">
        {imagePaths.map((imagePath, index) => (
          <a href={imagePath} key={index} data-src={imagePath}>
            <Image src={imagePath} alt={``} width={300} height={200} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PhotoGallery), {
  ssr: false,
});

/*
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
*/