import React from 'react';
import { Wrapper, Color, ColorName } from './PaletteColor.styles';
import { SliderPicker } from 'react-color';

export const PaletteColor: React.FC = () => {
  return (
    <Wrapper>
      <Color>
        <ColorName color="#333333">#444444</ColorName>
      </Color>
      <SliderPicker />
    </Wrapper>
  );
};
