import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";

const stableTag = "fixads-transparency-stable-2026-05-17";
const permitHash = "b0f046cc382f0e7f2c3ce0c3588f606bbb385e2eb234e6f4a37b416c77a354c7";
const protectedPaths = ["public/transparency", "netlify.toml"];

function git(args, options = {}) {
  try {
    return execFileSync("git", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", options.quiet ? "pipe" : "inherit"],
    }).trim();
  } catch (error) {
    if (options.allowFailure) return "";
    throw error;
  }
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function ensureStableTag() {
  const hasTag = git(["rev-parse", "--verify", "--quiet", `${stableTag}^{commit}`], {
    allowFailure: true,
    quiet: true,
  });

  if (hasTag) return;

  git(["fetch", "--depth=1", "origin", `refs/tags/${stableTag}:refs/tags/${stableTag}`], {
    quiet: true,
  });
}

function hasPermit() {
  const permit = process.env.TRANSPARENCY_CHANGE_PERMIT;
  return Boolean(permit && sha256(permit) === permitHash);
}

ensureStableTag();

const changedFiles = git(["diff", "--name-only", `${stableTag}..HEAD`, "--", ...protectedPaths], {
  quiet: true,
})
  .split("\n")
  .map((file) => file.trim())
  .filter(Boolean);

if (changedFiles.length > 0 && !hasPermit()) {
  console.error("");
  console.error("Protected transparency page changed without permit.");
  console.error(`Stable restore tag: ${stableTag}`);
  console.error("Changed protected files:");
  changedFiles.forEach((file) => console.error(`- ${file}`));
  console.error("");
  console.error("To intentionally change this page, set TRANSPARENCY_CHANGE_PERMIT for that deploy.");
  process.exit(1);
}

console.log("Transparency page guard passed.");
