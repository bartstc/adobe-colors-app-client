import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  Wrapper,
  Panel,
  PaletteList,
  PanelTitle,
  Color,
  ColorName,
  SaveBtn
} from './Details.styles';

interface IProps extends RouteComponentProps {}

export const Details: React.FC<IProps> = () => (
  <Wrapper>
    <Panel>
      <PanelTitle>Created by Username</PanelTitle>
      <SaveBtn>Save palette</SaveBtn>
    </Panel>
    <PaletteList>
      <Color>
        <ColorName color="#333333">#444444</ColorName>
      </Color>
      <Color>
        <ColorName color="#333333">#444444</ColorName>
      </Color>
      <Color>
        <ColorName color="#333333">#444444</ColorName>
      </Color>
      <Color>
        <ColorName color="#333333">#444444</ColorName>
      </Color>
      <Color>
        <ColorName color="#333333">#444444</ColorName>
      </Color>
    </PaletteList>
  </Wrapper>
);
