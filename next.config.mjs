/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // You can also add pathname: '/path/*' if you want to be more specific
      },
    ],
  },

};

export default nextConfig;
