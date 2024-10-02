const path = require('path');

const BUILD_LOCATION = path.join(__dirname, '../dist/');
const MANIFEST_LOCATION = path.join(__dirname, '../src/manifest.json');
const PACKAGE_LOCATION = path.join(__dirname, '../package.json');
const ZIP_LOCATION = path.join(__dirname, '../releases/');

module.exports = {
  BUILD_LOCATION,
  MANIFEST_LOCATION,
  PACKAGE_LOCATION,
  ZIP_LOCATION
};
