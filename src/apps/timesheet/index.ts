import { useAppInit } from '../../hooks';
import './timesheet';

// Require the image, so it's available on `dist` folder
const bg = require('../../assets/logo_inverted.svg');

const init = () => {
  useAppInit({
    frameName: 'timesheet',
    handleOnLoad: () => {}
  });
};

init();
