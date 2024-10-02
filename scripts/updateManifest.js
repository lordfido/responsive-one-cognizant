const fs = require('fs');
const { MANIFEST_LOCATION, PACKAGE_LOCATION } = require('./constants');

const updatePackageJson = () => {
  const { description, displayName: name, version } = require(PACKAGE_LOCATION);
  const [major, minor] = version.split('.');

  fs.writeFileSync(
    MANIFEST_LOCATION,
    JSON.stringify(
      {
        ...require(MANIFEST_LOCATION),
        description,
        name,
        version: `${major}.${minor}`
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
