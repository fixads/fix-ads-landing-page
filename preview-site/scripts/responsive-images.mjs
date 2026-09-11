import sharp from "sharp";
import path from "node:path";

// Build-only encoding/size derivatives. Original photographs and brand marks stay intact.
export async function responsiveImageEntries(root) {
  const entries = [];
  for (const file of ["ecommerce-growth.jpg", "hvac-leads.jpg", "hero-team.jpg", "market-commerce.png", "market-services.png", "market-automation.png"]) {
    const name = path.parse(file).name;
    for (const width of [640, 1040]) {
      const bytes = await sharp(path.join(root, "assets", file))
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();
      entries.push({ relativePath: `assets/optimized/${name}-${width}.webp`, bytes, mime: "image/webp" });
    }
  }
  const bytes = await sharp(path.join(root, "assets/platforms/amazon-ads.png"))
    .resize({ width: 320, withoutEnlargement: true }).png().toBuffer();
  entries.push({ relativePath: "assets/optimized/amazon-ads-320.png", bytes, mime: "image/png" });
  return entries;
}
