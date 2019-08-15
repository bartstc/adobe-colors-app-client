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

interface IProps {
  id: string;
  name: string;
  colors: string[];
  tags: string;
  ownerusername: string;
  saves: number;
  views: number;
}

export const Palette: React.FC<IProps> = ({ name, colors, saves, views }) => {
  return (
    <Wrapper>
      <PaletteHeader>
        <PaletteTitle>{name}</PaletteTitle>
        <PaletteInfo>
          <Info>
            <i className="fas fa-cloud-download-alt" />
            <InfoText>{saves}</InfoText>
          </Info>
          <Info>
            <i className="fas fa-eye" />
            <InfoText>{views}</InfoText>
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
        {colors.map(color => (
          <Color color={color} />
        ))}
      </Colors>
    </Wrapper>
  );
};
