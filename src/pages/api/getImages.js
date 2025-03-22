import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), "public/gallery");

  try {
    const fileNames = fs.readdirSync(imagesDirectory);

    // Filter only JPEG and PNG files
    const allowedExtensions = [".jpeg", ".jpg", ".png"];
    const imagePaths = fileNames
      .filter((file) =>
        allowedExtensions.includes(path.extname(file).toLowerCase())
      )
      .map((file) => `/gallery/${file}`); // Map to public URLs

    res.status(200).json({ images: imagePaths });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch images" });
  }
}
