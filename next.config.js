const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      // Optional: add remark/rehype plugins here
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
  
  module.exports = withMDX({
    // Other Next.js configuration options
  });