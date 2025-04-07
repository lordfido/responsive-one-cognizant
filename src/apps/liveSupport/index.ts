import { useAppInit } from '../../hooks';
import './liveSupport';

const init = () => {
  useAppInit({
    frameName: 'liveSupport',
    handleOnLoad: () => {}
  });
};

init();
