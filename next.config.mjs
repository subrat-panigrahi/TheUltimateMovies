/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'],
    },
        reactStrictMode: false,
        async headers() {
            return [
              {
                // Apply these headers to all routes
                source: "/(.*)",
                headers: [
                  {
                    key: "Content-Security-Policy",
                    value: `
                      default-src 'self';
                      script-src 'self' 'unsafe-eval' 'unsafe-inline';
                      style-src 'self' 'unsafe-inline';
                      img-src 'self' 'https://image.tmdb.org';
                      font-src 'self';
                      connect-src 'self' 'https://image.tmdb.org';
                      frame-ancestors 'none';
                      object-src 'none';
                      base-uri 'self';
                    `.replace(/\s{2,}/g, ' ').trim()
                  }
                ]
              }
            ]
          }
};

export default nextConfig;
