/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname : "img.clerk.com",
            port: '',
          },
          {
            protocol: 'https',
            hostname: "gezvkwcpgxslutbavqds.supabase.co",
          },
        ],
      },
};

export default nextConfig;


