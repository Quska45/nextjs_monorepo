import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import moonlightTheme from "./public/moonlight-ii.json" assert { type: "json" };

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // 원하는 테마가 있다면 적용가능. rehype이 제공하는 테마를 적용해봄.
  // https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/assets/moonlight-ii.json
  theme: moonlightTheme,
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
