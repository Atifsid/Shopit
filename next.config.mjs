/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
