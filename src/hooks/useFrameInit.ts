import { FrameName } from '../types';
import { loadFile, log } from '../utils';
import { useAppMetadata } from './useAppMetadata';

interface Props {
  frameName: FrameName;
  handleOnLoad: () => void;
}

export const useAppInit = ({ frameName, handleOnLoad }: Props) => {
  log('useAppInit', { frameName });

  const onLoad = () => {
    // Set metadata
    useAppMetadata(frameName);

    // Load CSS
    loadFile({
      doc: document,
      cssFileName: `${frameName}.css`
    });

    log(frameName, 'handleOnLoad');
    handleOnLoad();
  };

  document.onload = () => {
    onLoad();
  };

  onLoad();
};
