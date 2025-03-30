/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.dribbble.com",
        },
        {
          protocol: "https",
          hostname: "plus.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "img.freepik.com",
        },
        {
          protocol: "https",
          hostname: "i.pinimg.com",
        },
        {
          protocol: "https",
          hostname: "nilufar.com",
        },
        {
          protocol: "https",
          hostname: "mir-s3-cdn-cf.behance.net",
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
    env: {
      NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
      NOTION_INTERNAL_INTEGRATION_TOKEN:
        process.env.NEXT_PUBLIC_NOTION_INTERNAL_INTEGRATION_TOKEN,
    },
  };
  

export default nextConfig;
