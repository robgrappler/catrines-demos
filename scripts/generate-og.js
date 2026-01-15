// scripts/generate-og.js - Generate Open Graph image for social previews.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const width = 1200;
const height = 630;
const logoWidth = 720;

const logoPath = path.join(rootDir, 'public', 'brand', 'catrines-stacked.png');
const outputPath = path.join(rootDir, 'public', 'og-catrines.png');

try {
  await fs.access(logoPath);

  const logoBuffer = await sharp(logoPath)
    .resize({ width: logoWidth })
    .png()
    .toBuffer();

  const meta = await sharp(logoBuffer).metadata();
  const logoHeight = meta.height ?? Math.round((meta.width ?? logoWidth) * 0.7);
  const left = Math.round((width - (meta.width ?? logoWidth)) / 2);
  const top = Math.round((height - logoHeight) / 2);

  const shadowBuffer = await sharp(logoBuffer)
    .flatten({ background: '#000000' })
    .blur(18)
    .modulate({ brightness: 0.2 })
    .png()
    .toBuffer();

  const glowSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50%" cy="45%" rx="28%" ry="28%" fill="rgba(201,164,106,0.12)" />
    </svg>
  `);

  const vignetteSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="v" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stop-color="rgba(0,0,0,0)" />
          <stop offset="100%" stop-color="rgba(0,0,0,0.55)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#v)" />
    </svg>
  `);

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: '#0b0b0b'
    }
  })
    .composite([
      { input: glowSvg, blend: 'screen' },
      { input: shadowBuffer, top: top + 10, left },
      { input: logoBuffer, top, left },
      { input: vignetteSvg, blend: 'multiply' }
    ])
    .png()
    .toFile(outputPath);

  console.log(`OG image generated at ${outputPath}`);
} catch (error) {
  console.error('Failed to generate OG image:', error);
  process.exitCode = 1;
}
