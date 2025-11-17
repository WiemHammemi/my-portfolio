import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
   devIndicators: {
    position: 'top-right', // Déplace l'indicateur (ou utilisez 'bottom-right', 'top-left', 'bottom-left')
  },
};

export default nextConfig;
