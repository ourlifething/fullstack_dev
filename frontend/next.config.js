/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        console.log("Next.js configuration is being loaded...");
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/hello_db/backend/',
                permanent: true,
            },
        ]
    }

}

module.exports = nextConfig

