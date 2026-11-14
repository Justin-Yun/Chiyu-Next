import fs from "fs";
import path from "path";
import Head from "next/head";
import PhotoGallery from "../components/PhotoGallery";
import { getImageSize } from "@/lib/imageSize";

export default function Gallery({ images }) {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <h1>Gallery</h1>
      <div>
        <br />
      </div>
      <PhotoGallery images={images} />
    </>
  );
}

// Read the gallery folder once at build time instead of fetching it from an
// API route on every visit. The page is now fully static and the thumbnails
// are in the HTML from the first paint.
export async function getStaticProps() {
  const dir = path.join(process.cwd(), "public/gallery");
  const allowedExtensions = [".jpeg", ".jpg", ".png"];

  const images = fs
    .readdirSync(dir)
    .filter((file) => allowedExtensions.includes(path.extname(file).toLowerCase()))
    .map((file) => {
      const size = getImageSize(path.join(dir, file)) || { width: 300, height: 200 };
      return { src: `/gallery/${file}`, width: size.width, height: size.height };
    });

  return { props: { images } };
}
