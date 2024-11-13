/** @type {import('next').NextConfig} */
export const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "replicate.delivery",
        },
        {
          protocol: "https",
          hostname: "pbxt.replicate.delivery",
        }
      ],
    },
  };
  
  export default nextConfig;