/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = {
images:{
  domains:['images.unsplash.com']
}
  
}
