import { loadFile } from '../../utils';
import useGoPerformCode from '../goPerform/external';
import useMyLearningStudioCode from '../myLearningStudio/external';
import './oneCognizant';

const init = () => {
  loadFile({ cssFileName: 'oneCognizant.css' });

  useGoPerformCode();
  useMyLearningStudioCode();
};

init();
