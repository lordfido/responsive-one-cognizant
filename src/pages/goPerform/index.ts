import { loadGoPerformCss, removeHardcodedSizes } from './common';
import './goPerform';

const init = () => {
  const handleOnLoad = () => {
    loadGoPerformCss();
    removeHardcodedSizes(document);
  }

  document.onload = () => {
    handleOnLoad();
  }

  handleOnLoad();
};

init();
