/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Several source images are 20–40 MB; cache the optimised versions for a
    // week so they aren't re-encoded (and re-downloaded by browsers) often.
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
};

export default nextConfig;
