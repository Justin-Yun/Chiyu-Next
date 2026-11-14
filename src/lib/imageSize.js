import fs from "fs";

const JPEG_PROBE_BYTES = 512 * 1024;

// Minimal, dependency-free PNG/JPEG dimension reader used at build time.
// Returns { width, height } or null if the format isn't recognised.
export function getImageSize(filePath) {
  const fd = fs.openSync(filePath, "r");
  try {
    const head = Buffer.alloc(24);
    fs.readSync(fd, head, 0, 24, 0);

    // PNG: dimensions live in the IHDR chunk at a fixed offset.
    if (head.readUInt32BE(0) === 0x89504e47) {
      return { width: head.readUInt32BE(16), height: head.readUInt32BE(20) };
    }

    // JPEG: the frame header sits near the start of the file, so probe the
    // first 512 KB instead of reading a potentially 30+ MB image, and only
    // fall back to the full file if it wasn't found there.
    if (head[0] === 0xff && head[1] === 0xd8) {
      const size = fs.fstatSync(fd).size;
      const probe = Buffer.alloc(Math.min(size, JPEG_PROBE_BYTES));
      fs.readSync(fd, probe, 0, probe.length, 0);
      const found = findJpegSize(probe);
      if (found || probe.length === size) return found;
      return findJpegSize(fs.readFileSync(filePath));
    }
    return null;
  } finally {
    fs.closeSync(fd);
  }
}

// Walk the JPEG segment markers until we hit a Start Of Frame.
function findJpegSize(buf) {
  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    const isSOF =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSOF) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    offset += 2 + buf.readUInt16BE(offset + 2);
  }
  return null;
}
