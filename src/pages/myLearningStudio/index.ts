import { loadMyLearningStudioCss } from './common';
import './myLearningStudio';

const init = () => {
  const handleOnLoad = () => {
    loadMyLearningStudioCss();
    // removeHardcodedSizes(document);
  };

  document.onload = () => {
    handleOnLoad();
  };

  handleOnLoad();
};

init();
