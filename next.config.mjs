/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react', 'recharts'],
  images: {
    unoptimized: true // Since it was Vite, it probably has no specific Next.js image optimization in mind yet.
  },
  experimental: {
    serverActions: true,
  }
};

export default nextConfig;