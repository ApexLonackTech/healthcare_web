/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    unoptimized:true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env:{
    API_URL: process.env.API_URL,
    LOCAL_FILE_PATH:process.env.LOCAL_FILE_PATH,
    ENCRYPT_KEY:process.env.ENCRYPT_KEY
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
