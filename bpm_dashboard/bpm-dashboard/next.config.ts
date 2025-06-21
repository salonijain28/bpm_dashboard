import type { NextConfig } from "next";

 

const nextConfig: NextConfig = {

   output: "export",

   images: {

     unoptimized: true,

   },

  basePath: "/bpm_dashboard",

  assetPrefix: "/bpm_dashboard",

};

 

export default nextConfig;