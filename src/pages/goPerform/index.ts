import { loadFile } from '../../utils';
import { removeHardcodedSizes } from './common';
import './goPerform';

const init = () => {
  const loadGoPerformCss = () => {
    loadFile({ cssFileName: 'goPerform.css' });
    removeHardcodedSizes(document);
  }

  document.onload = () => {
    loadGoPerformCss();
  }

  loadGoPerformCss();
};

init();
