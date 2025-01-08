/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Beranda",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
