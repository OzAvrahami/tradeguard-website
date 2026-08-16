import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const projectRoot = process.cwd();
const standaloneRoot = join(projectRoot, ".next", "standalone");

if (!existsSync(join(standaloneRoot, "server.js"))) {
  throw new Error(
    "Standalone server output is missing. Run this script after `next build`.",
  );
}

cpSync(join(projectRoot, "public"), join(standaloneRoot, "public"), {
  recursive: true,
  force: true,
});

const standaloneNextRoot = join(standaloneRoot, ".next");
mkdirSync(standaloneNextRoot, { recursive: true });
cpSync(join(projectRoot, ".next", "static"), join(standaloneNextRoot, "static"), {
  recursive: true,
  force: true,
});
