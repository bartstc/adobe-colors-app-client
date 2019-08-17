import React from 'react';

import {
  Wrapper,
  Panel,
  PaletteList,
  PanelTitle,
  Color,
  ColorName
} from './Details.styles';

interface IProps {
  name: string;
  ownerusername: string;
  colors: string[];
}

export const Details: React.FC<IProps> = ({ name, ownerusername, colors }) => (
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
          <ColorName color={color}>{color}</ColorName>
        </Color>
      ))}
    </PaletteList>
  </Wrapper>
);
