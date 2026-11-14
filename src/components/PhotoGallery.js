import { useEffect, useMemo, useRef } from "react";
import Image, { getImageProps } from "next/image";

const THUMB_WIDTH = 480;

const scaledHeight = (width, image) => Math.round((width * image.height) / image.width);

// Optimised (resized + WebP) URLs for the lightbox, so opening an image
// downloads a screen-sized version instead of the 20–40 MB original.
function lightboxProps({ src, width, height }) {
  const { props } = getImageProps({
    src,
    width,
    height,
    alt: "",
    sizes: "100vw",
  });
  const thumb = getImageProps({
    src,
    width: 256,
    height: scaledHeight(256, { width, height }),
    alt: "",
  }).props;
  return { src: props.src, srcSet: props.srcSet, thumb: thumb.src };
}

const PhotoGallery = ({ images = [] }) => {
  const galleryRef = useRef(null);
  const items = useMemo(
    () => images.map((image) => ({ ...image, lb: lightboxProps(image) })),
    [images]
  );

  useEffect(() => {
    if (!galleryRef.current || images.length === 0) return;
    let instance;
    let cancelled = false;

    Promise.all([
      import("lightgallery"),
      import("lightgallery/plugins/zoom"),
      import("lightgallery/plugins/thumbnail"),
    ]).then(([lg, lgZoom, lgThumbnail]) => {
      if (cancelled || !galleryRef.current) return;
      instance = lg.default(galleryRef.current, {
        plugins: [lgZoom.default, lgThumbnail.default],
        counter: false,
        showCaptions: false,
        closable: true,
        showCloseIcon: true,
        exThumbImage: "data-thumb",
        mode: "lg-fade",
        speed: 450,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        zoomFromOrigin: true,
        startAnimationDuration: 450,
        backdropDuration: 300,
      });
    });

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, [images]);

  return (
    <div ref={galleryRef} className="gallery">
      {items.map(({ lb, ...image }, index) => {
        return (
          <a
            href={lb.src}
            key={image.src}
            data-src={lb.src}
            data-srcset={lb.srcSet}
            data-sizes="100vw"
            data-thumb={lb.thumb}
            data-lg-size={`${image.width}-${image.height}`}
            data-download-url={image.src}
            className="gallery-item"
            style={{ "--i": index % 3 }}
          >
            <Image
              src={image.src}
              alt=""
              width={THUMB_WIDTH}
              height={scaledHeight(THUMB_WIDTH, image)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
            />
          </a>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
