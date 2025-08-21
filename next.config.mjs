/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.prismic.io", "player.vimeo.com"],
    unoptimized: true, // Optional: if you want to optimize external images
  },
  reactStrictMode: true,
};

export default nextConfig;
