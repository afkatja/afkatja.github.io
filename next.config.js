/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && { output: "export"}),
  ...(process.env.NODE_ENV === 'production' && {basePath:  "/afkatja.github.io"}),
  images: {unoptimized:true}
};

module.exports = nextConfig;
