import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
await rm(resolve(root, "docs"), { recursive: true, force: true });
await mkdir(resolve(root, "docs"), { recursive: true });
await cp(resolve(root, "dist"), resolve(root, "docs"), { recursive: true });
console.log("Copied dist/ to docs/ for GitHub Pages.");
