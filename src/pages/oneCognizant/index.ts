import { supportedApps } from '../../constants';
import { useAppDetector } from '../../hooks';
import { FrameName } from '../../types';
import { loadFile } from '../../utils';
import './oneCognizant';

const init = () => {
  loadFile({ cssFileName: 'oneCognizant.css' });

  const frameNames = Object.keys(supportedApps) as FrameName[];
  frameNames.forEach((frameName) => {
    if (frameName === 'rootLink') {
      return;
    }

    useAppDetector(frameName);
  });
};

init();
