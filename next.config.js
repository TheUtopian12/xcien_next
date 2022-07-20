/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  
}

module.exports = {
images:{
  domains:['images.unsplash.com','www.google.com','lh3.googleusercontent.com','images.pexels.com']
}
  
}
