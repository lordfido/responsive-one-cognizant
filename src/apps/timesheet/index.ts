import { useAppInit } from '../../hooks';
import renderAlert from '../../utils/renderAlert';
import './timesheet';

// Require the image, so it's available on `dist` folder
const bg = require('../../assets/logo_inverted.svg');

const init = () => {
  useAppInit({
    frameName: 'timesheet',
    handleOnLoad: () => {
      const appIframe = document.querySelector('iframe');
      if (!!appIframe) {
        renderAlert();
      }
    }
  });
};

init();
