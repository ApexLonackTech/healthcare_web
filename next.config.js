/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    unoptimized:true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/auth/login': { page: '/auth/login' },
      '/auth/register': { page: '/auth/register' },
      '/auth/resetpassword': { page: '/auth/resetpassword' },
      '/course/[course]': { page: '/course/[course]' },
      '/student/home': { page: '/student/home' },
      '/student/courses': { page: '/student/courses' },
      '/student/course/[course]': { page: '/student/course/[course]' }
    }
  },
  trailingSlash: true,
}

module.exports = nextConfig
