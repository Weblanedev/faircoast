/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "i.ibb.co",
      "m.media-amazon.com",
      "th.bing.com",
      "fullstackdotso.nyc3.cdn.digitaloceanspaces.com",
      "example.com",
      "images.pexels.com",
    ],
  },
}

export default nextConfig
