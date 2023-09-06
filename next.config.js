/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',
    
    images: {
        domains: ['cdn.imagin.studio']
    }
}

module.exports = nextConfig
