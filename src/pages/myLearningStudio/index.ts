import { useFrameInit } from '../../utils';
import './myLearningStudio';

const init = () => {
  useFrameInit({
    frameName: 'myLearningStudio',
    handleOnLoad: () => {}
  });
};

init();
