/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[{
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "**"
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
      pathname: "**"
    }]
  }
};

module.exports = nextConfig;
