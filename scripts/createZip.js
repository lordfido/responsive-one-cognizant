const fs = require('fs');
const JSZip = require('jszip');
const {
  BUILD_LOCATION,
  MANIFEST_LOCATION,
  PACKAGE_LOCATION,
  ZIP_LOCATION
} = require('./constants');

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const createZip = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const zip = new JSZip();
      const fileNames = fs.readdirSync(BUILD_LOCATION, { recursive: true });

      const { name } = require(PACKAGE_LOCATION);
      const { version } = require(MANIFEST_LOCATION);
      const releaseFilePath = `${ZIP_LOCATION}${name}-${version}.zip`;

      fileNames.forEach((fileName) => {
        const currPath = `${BUILD_LOCATION}${fileName}`;

        if (!fs.lstatSync(currPath).isDirectory()) {
          zip.file(fileName, fs.readFileSync(currPath));
        }
      });

      zip
        .generateNodeStream({ type: 'nodebuffer' })
        .pipe(fs.createWriteStream(releaseFilePath))
        .on('finish', () => {
          resolve();
        });
    } catch (err) {
      console.error(err);
      reject();
    }
  });

createZip();
