import { loadFile } from '../../utils';
import useGoPerformCode from '../goPerform/external';
import './oneCognizant';

const init = () => {
  loadFile({ cssFileName: 'oneCognizant.css' });

  useGoPerformCode();
}

init();
