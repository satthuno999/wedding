/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com'],
    },
    useFileSystemPublicRoutes:false,
}

module.exports = nextConfig
