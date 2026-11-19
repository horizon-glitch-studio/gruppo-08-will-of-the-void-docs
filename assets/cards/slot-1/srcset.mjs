import { readdir, mkdir } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const SRC = "jpg"
const OUT = "webp"
const WIDTHS = [320, 640, 848]
const QUALITY = 85

for (const faction of await readdir(SRC)) {
  if (faction.startsWith(".")) continue // salta .DS_Store
  await mkdir(path.join(OUT, faction), { recursive: true })
  for (const file of await readdir(path.join(SRC, faction))) {
    if (!file.endsWith(".jpg")) continue
    const name = path.parse(file).name
    for (const w of WIDTHS) {
      await sharp(path.join(SRC, faction, file))
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(path.join(OUT, faction, `${name}-${w}w.webp`))
    }
    console.log(`✓ ${faction}/${name}`)
  }
}
