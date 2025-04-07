import { FrameName } from '../types';
import { loadFile, log } from '../utils';
import renderRocAlert from '../utils/renderRocAlert';
import { useAppMetadata } from './useAppMetadata';

interface Props {
  frameName: FrameName;
  handleOnLoad: () => void;
  shouldRenderRocBanner?: boolean
}

export const useAppInit = ({ frameName, handleOnLoad, shouldRenderRocBanner = true }: Props) => {
  log('useAppInit', { frameName });

  const onLoad = () => {
    // Set metadata
    useAppMetadata(frameName);

    // Load CSS
    loadFile({
      doc: document,
      cssFileName: `${frameName}.css`
    });

    // Render `Responsive OneCognizant`'s banner
    if (shouldRenderRocBanner) {
      renderRocAlert();
    }

    log(frameName, 'handleOnLoad');
    handleOnLoad();
  };

  document.onload = () => {
    onLoad();
  };

  onLoad();
};
