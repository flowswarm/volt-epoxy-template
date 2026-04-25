import fs from 'fs';
import path from 'path';
import Vibrant from 'node-vibrant';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const photosDir = path.join(__dirname, 'ReferencePhotos');
const resultFile = path.join(__dirname, 'src', 'data', 'swatches.json');

async function extractColors() {
    const files = fs.readdirSync(photosDir).filter(file => {
        const match = file.match(/Screenshot \((\d+)\)\.png/);
        if (!match) return false;
        const num = parseInt(match[1]);
        return num >= 142 && num <= 153;
    }).sort();

    console.log(`Found ${files.length} swatch images...`);
    const swatches = [];

    for (const file of files) {
        const imagePath = path.join(photosDir, file);
        try {
            const palette = await Vibrant.from(imagePath).getPalette();
            // Usually, the dominant color in these swatches is Vibrant or Muted
            const hex = palette.Vibrant ? palette.Vibrant.hex : (palette.Muted ? palette.Muted.hex : '#888888');

            const numMatch = file.match(/Screenshot \((\d+)\)\.png/);
            swatches.push({
                id: numMatch[1],
                file,
                color: hex
            });
            console.log(`Extracted ${hex} from ${file}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }

    // ensure data dir exists
    const dataDir = path.join(__dirname, 'src', 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(resultFile, JSON.stringify(swatches, null, 2));
    console.log(`Saved extracted colors to ${resultFile}`);
}

extractColors();
