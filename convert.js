import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "src/assets";
const outputDir = "public";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir);

files.forEach(async (file) => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);

  if (ext === ".jpg" || ext === ".png") {
    await sharp(`${inputDir}/${file}`)
      .resize(1400) // можно убрать или адаптировать
      .webp({ quality: 80 })
      .toFile(`${outputDir}/${name}.webp`);

    console.log(`✔ ${file} → ${name}.webp`);
  }
});