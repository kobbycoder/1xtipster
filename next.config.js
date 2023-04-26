/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'www.vitibet.com', 'upload.wikimedia.org', 'vitibet.com', 'ai.mobsports.com', 'tmssl.akamaized.net',
  'www.stadebriochin.com', 'e7.pngegg.com', 'www.rainbow-sports.com', 'as01.epimg.net', 'static.holoduke.nl', 'www.gudjaunitedfc.com', 'seeklogo.com',
  'static.wikia.nocookie.net', 'sortitoutsi.net'
  ],
  },
  distDir: 'public'
}

module.exports = nextConfig
