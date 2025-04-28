import { useAppInit } from '../../hooks';
import './peopleSoft';

const init = () => {
  useAppInit({
    frameName: 'peopleSoft',
    handleOnLoad: () => {}
  });
};

init();
