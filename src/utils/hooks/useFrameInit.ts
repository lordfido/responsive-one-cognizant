import { FrameName } from '../../types';
import { loadFile } from '../cssUtils';

interface Props {
  frameName: FrameName;
  handleOnLoad: () => void;
}

export const useFrameInit = ({ frameName, handleOnLoad }: Props) => {
  const onLoad = () => {
    loadFile({
      doc: document,
      cssFileName: `${frameName}.css`
    });

    handleOnLoad();
  };

  document.onload = () => {
    onLoad();
  };

  onLoad();
};
