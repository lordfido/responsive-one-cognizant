import { useAppInit } from '../../hooks';
import './ePay';

const init = () => {
  useAppInit({
    frameName: 'ePay',
    handleOnLoad: () => {}
  });
};

init();
