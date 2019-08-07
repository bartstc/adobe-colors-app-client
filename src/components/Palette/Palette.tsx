import React from 'react';
import {
  Wrapper,
  PaletteHeader,
  PaletteTitle,
  PaletteInfo,
  Info,
  InfoText,
  Colors,
  Color,
  ActionPanel,
  ActionBtn
} from './Palette.styles';

export const Palette: React.FC = () => {
  return (
    <Wrapper>
      <PaletteHeader>
        <PaletteTitle>Palette title</PaletteTitle>
        <PaletteInfo>
          <Info>
            <i className="fas fa-cloud-download-alt" />
            <InfoText>5</InfoText>
          </Info>
          <Info>
            <i className="fas fa-eye" />
            <InfoText>23</InfoText>
          </Info>
        </PaletteInfo>
      </PaletteHeader>
      <Colors>
        <ActionPanel>
          <ActionBtn>
            <i className="fas fa-eye" />
            View
          </ActionBtn>
          <ActionBtn>
            <i className="fas fa-cloud-download-alt" />
            Save
          </ActionBtn>
        </ActionPanel>
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </Colors>
    </Wrapper>
  );
};
