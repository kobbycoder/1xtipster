/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'www.vitibet.com', 'upload.wikimedia.org', 'vitibet.com', 'ai.mobsports.com', 'tmssl.akamaized.net',
  'www.stadebriochin.com'
  ],
  }
}

module.exports = nextConfig
