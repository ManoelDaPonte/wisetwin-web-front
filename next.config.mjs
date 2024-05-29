/** @type {import('next').NextConfig} */

let nextConfig = {};

if (process.env.env !== 'local') {
    nextConfig = {
        output: 'export',
    };
}

export default nextConfig;