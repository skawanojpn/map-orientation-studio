import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const distHtml = await readFile(resolve(root, "dist/index.html"), "utf8");
const cssMatch = distHtml.match(/href="([^"]+\.css)"/);
const jsMatch = distHtml.match(/src="([^"]+\.js)"/);
if (!cssMatch || !jsMatch) throw new Error("Vite assets were not found. Run npm run build first.");

const css = await readFile(resolve(root, "dist", cssMatch[1].replace(/^\//, "")), "utf8");
const js = await readFile(resolve(root, "dist", jsMatch[1].replace(/^\//, "")), "utf8");
const html = distHtml
  .replace(/<link rel="stylesheet"[^>]+>/, () => `<style>${css}</style>`)
  .replace(/<script type="module"[^>]+><\/script>/, () => `<script>${js}</script>`)
  .replace(/<script[^>]+src="[^"]+\.js"[^>]*><\/script>/, () => `<script>${js}</script>`);

await mkdir(resolve(root, "gas"), { recursive: true });
await writeFile(resolve(root, "gas/Index.html"), html);
console.log("Generated gas/Index.html from the Vite production bundle.");
