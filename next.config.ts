import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              "frame-src https://www.youtube.com https://youtube.com",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
              "media-src 'self' https://www.youtube.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
