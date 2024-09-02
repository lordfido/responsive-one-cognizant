import { loadAssociate360Css, removeHardcodedSizes } from './common';
import './associate360';

const init = () => {
  const handleOnLoad = () => {
    loadAssociate360Css();
    removeHardcodedSizes(document);
  };

  document.onload = () => {
    handleOnLoad();
  };

  handleOnLoad();
};

init();
