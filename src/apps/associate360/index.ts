import { useAppInit } from '../../hooks';
import './associate360';

const init = () => {
  useAppInit({
    frameName: 'associate360',
    handleOnLoad: () => {}
  });
};

init();
