import React from 'react';

import {
  Wrapper,
  Panel,
  PaletteList,
  PanelTitle,
  Color,
  ColorName,
  CopyOverlay,
  OverlayText
} from './Details.styles';
import { GetPalette } from '../../../schema/GetPalette';
import { Spinner } from '../../../components/Spinner/Spinner';
import CopyToClipboard from 'react-copy-to-clipboard';

interface IProps {
  data: GetPalette | undefined;
  loading: boolean;
  handlePopup: (message?: string) => void;
}

export const Details: React.FC<IProps> = ({ data, loading, handlePopup }) => {
  const onCopy = () => handlePopup('Copied to clipboard!');

  if (!data || loading)
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );

  const { name, ownerusername, colors } = data.getPalette;

  return (
    <Wrapper>
      <Panel>
        <PanelTitle>
          Palette name: <span>{name}</span>
        </PanelTitle>
        <PanelTitle>
          Created by <span>{ownerusername}</span>
        </PanelTitle>
      </Panel>
      <PaletteList>
        {colors.map(color => (
          <Color key={color} color={color}>
            <CopyToClipboard text={color} onCopy={onCopy}>
              <CopyOverlay>
                <OverlayText>Click to copy!</OverlayText>
              </CopyOverlay>
            </CopyToClipboard>
            <ColorName color={color}>{color}</ColorName>
          </Color>
        ))}
      </PaletteList>
    </Wrapper>
  );
};
