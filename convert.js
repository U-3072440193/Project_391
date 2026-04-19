import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "src/assets/case";
const outputDir = "public";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir);

files.forEach(async (file) => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);

  // ✅ проверяем ИМЯ файла
  if (file === "main-poster.jpg" || file === "main-poster.png") {
    await sharp(`${inputDir}/${file}`)
      .resize(1400)
      .webp({ quality: 92,
        effort: 6
       })
      .toFile(`${outputDir}/${name}.webp`);

    console.log(`✔ ${file} → ${name}.webp`);
  }
});