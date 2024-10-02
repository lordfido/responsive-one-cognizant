const fs = require('fs');
const { PACKAGE_LOCATION } = require('./constants');

const increaseVersion = (current) => {
  const [major, minor, patch] = current.split('.');
  return `${major}.${Number(minor) + 1}.${patch}`;
};

const updatePackageJson = () => {
  const packageJson = require(PACKAGE_LOCATION);
  const newVersion = increaseVersion(packageJson.version);

  fs.writeFileSync(
    PACKAGE_LOCATION,
    JSON.stringify(
      {
        ...packageJson,
        version: newVersion
      },
      null,
      2
    ),
    {
      encoding: 'utf-8'
    }
  );
};

updatePackageJson();
