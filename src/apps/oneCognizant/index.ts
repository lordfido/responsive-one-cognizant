import { supportedApps } from '../../constants';
import { useAppDetector } from '../../hooks';
import { FrameName } from '../../types';
import { loadFile } from '../../utils';
import renderRocAlert from '../../utils/renderRocAlert';
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

  renderRocAlert();
};

init();
