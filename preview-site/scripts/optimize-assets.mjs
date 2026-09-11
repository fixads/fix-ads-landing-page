import path from "node:path";
import { transform } from "esbuild";

const loaders = new Map([
  [".css", "css"],
  [".js", "js"],
]);

export const optimizeTextAsset = async (file, source) => {
  const loader = loaders.get(path.extname(file).toLowerCase());
  if (!loader) return source;

  const result = await transform(source, {
    charset: "utf8",
    format: loader === "js" ? "esm" : undefined,
    legalComments: "none",
    loader,
    minify: true,
    target: "es2020",
  });

  return `${result.code.trim()}\n`;
};
