import { loadFile } from '../../utils';
import useAssociate360Code from '../associate360/external';
import useGoPerformCode from '../goPerform/external';
import useMyLearningStudioCode from '../myLearningStudio/external';
import './oneCognizant';

const init = () => {
  loadFile({ cssFileName: 'oneCognizant.css' });

  useGoPerformCode();
  useMyLearningStudioCode();
  useAssociate360Code();
};

init();
