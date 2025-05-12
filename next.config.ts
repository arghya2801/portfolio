import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: {
  //   appIsrStatus: false,
  // },
  // swcMinify: true,
  // fastRefresh: true,
  // images: {
  //   domains: ['api.svgl.app'],
  // },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

// export default nextConfig;
export default withMDX(nextConfig);